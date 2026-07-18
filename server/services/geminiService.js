const { getModel, FALLBACK_MODELS } = require('../config/gemini');
const { buildMemoryContext } = require('./memoryService');
const { getTranslation } = require('./chatTranslations');

function buildSystemPrompt(lang = 'en') {
  const disclaimer = getTranslation(lang, 'disclaimer');
  const outOfScope = getTranslation(lang, 'outOfScope');
  const crisis = getTranslation(lang, 'crisis');
  const langNote = getTranslation(lang, 'systemLangNote');

  return `You are Sakhi, an empathetic, caring, and knowledgeable AI assistant focused exclusively on menstrual health and puberty education. Your tone is warm, supportive, and non-judgmental, like a trusted older sister or friend.

${langNote}

## Your Role
- Answer questions about menstrual health, puberty, periods, cycle tracking, cramps, PMS, hygiene, common myths, and related topics.
- Use age-appropriate, culturally sensitive, and scientifically accurate language.
- Always include a disclaimer in every response: "${disclaimer}"
- If the user asks about something outside menstrual health/puberty (general knowledge, coding, math, etc.), politely redirect by saying: "${outOfScope}"
- If the user expresses distress, self-harm, or crisis-related content, respond with care: "${crisis}"

## Guidelines
- Correct myths and misinformation gently with evidence-based facts.
- Encourage users to speak to a parent, teacher, or doctor for personal medical concerns.
- Keep responses concise, clear, and comforting.
- Do NOT diagnose medical conditions or prescribe treatments.
- Do NOT engage with inappropriate, sexual, or offensive content, redirect to menstrual health.`;
}

function isRetryableError(err) {
  const msg = err?.message || '';
  return msg.includes('429') || msg.includes('quota') || msg.includes('rate limit') || msg.includes('not found');
}

async function tryGenerate(modelName, contents) {
  const model = getModel(modelName);
  const result = await model.generateContent({ contents });
  return result.response.text();
}

const MAX_RECENT_MSGS = 4;

const chatWithSakhi = async (messageHistory, newMessage, userId, conversationSummary = '', lang = 'en') => {
  let memoryContext = '';
  if (userId) {
    memoryContext = await buildMemoryContext(userId);
  }

  const fullSystemPrompt = memoryContext
    ? `${buildSystemPrompt(lang)}\n\n${memoryContext}`
    : buildSystemPrompt(lang);

  let historyParts = [];
  if (conversationSummary) {
    historyParts.push(
      { role: 'user', parts: [{ text: `Here is a summary of our conversation so far: ${conversationSummary}` }] },
      { role: 'model', parts: [{ text: 'Got it, I will use this summary for context.' }] }
    );
  }

  const recent = messageHistory.slice(-MAX_RECENT_MSGS);
  historyParts.push(
    ...recent.flatMap((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }))
  );

  const contents = [
    { role: 'user', parts: [{ text: fullSystemPrompt }] },
    { role: 'model', parts: [{ text: 'Understood. I will follow these guidelines as Sakhi.' }] },
    ...historyParts,
    { role: 'user', parts: [{ text: newMessage }] },
  ];

  const errors = [];

  for (const modelName of FALLBACK_MODELS) {
    try {
      const reply = await tryGenerate(modelName, contents);
      return reply;
    } catch (err) {
      errors.push(`${modelName}: ${err.message}`);
      if (!isRetryableError(err)) {
        throw err;
      }
    }
  }

  throw new Error(`All models exhausted. Errors: ${errors.join(' | ')}`);
};

module.exports = { chatWithSakhi };
