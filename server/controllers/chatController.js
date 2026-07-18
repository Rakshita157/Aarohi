const Conversation = require('../models/Conversation');
const { getModel } = require('../config/gemini');
const { chatWithSakhi } = require('../services/geminiService');
const { updateMemory, updateSessionContext } = require('../services/memoryService');

const sendMessage = async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: 'Message is required' });
    }

    let conversation;

    if (conversationId) {
      conversation = await Conversation.findOne({
        _id: conversationId,
        userId: req.user._id,
      });

      if (!conversation) {
        return res.status(404).json({ message: 'Conversation not found' });
      }
    } else {
      conversation = await Conversation.create({
        userId: req.user._id,
        messages: [],
      });
    }

    const history = conversation.messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    const reply = await chatWithSakhi(history, message, req.user._id, conversation.summary, req.lang);

    conversation.messages.push(
      { role: 'user', content: message },
      { role: 'model', content: reply }
    );

    await conversation.save();

    const userMsgCount = conversation.messages.filter((m) => m.role === 'user').length;
    if (userMsgCount > 0 && userMsgCount % 6 === 0) {
      summarizeConversation(conversation);
    }

    await updateMemory(req.user._id, message);
    await updateMemory(req.user._id, reply);

    updateSessionContext(req.user._id, message, reply);

    res.json({
      reply,
      conversationId: conversation._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const summarizeConversation = async (conversation) => {
  try {
    const model = getModel('gemini-2.5-flash-lite');
    const allMessages = conversation.messages.map((m) => `${m.role}: ${m.content}`).join('\n');
    const prevSummary = conversation.summary ? `Previous summary: ${conversation.summary}\n\n` : '';

    const prompt = `${prevSummary}Summarize the key topics and questions the user asked about in this conversation. Keep it under 40 words. Focus on what the user cares about.\n\n${allMessages}`;

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    const summary = result.response.text().trim();

    await Conversation.updateOne({ _id: conversation._id }, { summary });
  } catch {
    // summarization failure should not break the chat flow
  }
};

const getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({ userId: req.user._id })
      .select('title createdAt updatedAt')
      .sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    res.json(conversation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    res.json({ message: 'Conversation deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMessage, getConversations, getConversation, deleteConversation };
