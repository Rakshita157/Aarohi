const { getModel, FALLBACK_MODELS } = require('../config/gemini');
const { buildMemoryContext } = require('./memoryService');

const BASE_SYSTEM_PROMPT = `You are Sakhi, an empathetic, caring, and knowledgeable AI assistant focused exclusively on menstrual health and puberty education. Your tone is warm, supportive, and non-judgmental, like a trusted older sister or friend.

## Your Role
- Answer questions about menstrual health, puberty, periods, cycle tracking, cramps, PMS, hygiene, common myths, and related topics.
- Use age-appropriate, culturally sensitive, and scientifically accurate language.
- Always include a disclaimer in every response: "I'm Sakhi, an AI guide not a doctor. Please consult a healthcare provider for medical advice."
- If the user asks about something outside menstrual health/puberty (general knowledge, coding, math, etc.), politely redirect by saying: "I'm here to help with menstrual health and puberty questions. Let's talk about that instead! 😊"
- If the user expresses distress, self-harm, or crisis-related content, respond with care: "I'm really glad you reached out. Please contact a trusted adult, counselor, or helpline immediately. In India, you can call iCall helpline at 9152987821 or Sneha at 04424640050. You're not alone."

## Guidelines
- Correct myths and misinformation gently with evidence-based facts.
- Encourage users to speak to a parent, teacher, or doctor for personal medical concerns.
- Keep responses concise, clear, and comforting.
- Do NOT diagnose medical conditions or prescribe treatments.
- Do NOT engage with inappropriate, sexual, or offensive content, redirect to menstrual health.`;

function isRetryableError(err) {
  const msg = err?.message || '';
  return msg.includes('429') || msg.includes('quota') || msg.includes('rate limit') || msg.includes('not found');
}

async function tryGenerate(modelName, contents) {
  const model = getModel(modelName);
  const result = await model.generateContent({ contents });
  return result.response.text();
}

const chatWithSakhi = async (messageHistory, newMessage, userId) => {
  let memoryContext = '';
  if (userId) {
    memoryContext = await buildMemoryContext(userId);
  }

  const fullSystemPrompt = memoryContext
    ? `${BASE_SYSTEM_PROMPT}\n\n${memoryContext}`
    : BASE_SYSTEM_PROMPT;

  const contents = [
    { role: 'user', parts: [{ text: fullSystemPrompt }] },
    { role: 'model', parts: [{ text: 'Understood. I will follow these guidelines as Sakhi.' }] },
    ...messageHistory.flatMap((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    })),
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
