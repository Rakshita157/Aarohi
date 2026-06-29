const UserMemory = require('../models/UserMemory');

const MENSTRUAL_TOPICS = [
  'period', 'periods', 'menstrual', 'menstruation', 'menstrual cycle', 'cycle',
  'cramps', 'cramping', 'pms', 'pmdd', 'puberty', 'ovulation',
  'fertility', 'hygiene', 'sanitary', 'sanitary pad', 'sanitary napkin',
  'tampon', 'tampons', 'pad', 'pads', 'menstrual cup', 'period panties',
  'cycle tracking', 'irregular periods', 'irregular', 'amenorrhea',
  'dysmenorrhea', 'endometriosis', 'pcos', 'pcod', 'hormones', 'hormonal',
  'spotting', 'menopause', 'perimenopause',
  'premenstrual', 'mood swings', 'bloating', 'acne', 'breast tenderness',
  'period pain', 'back pain', 'nausea', 'fatigue', 'headache', 'dizziness',
  'heavy bleeding', 'menorrhagia', 'light bleeding', 'clots', 'color',
  'discharge', 'vaginal discharge', 'white discharge', 'brown discharge',
  'itch', 'itching', 'infection', 'uti', 'vaginal infection',
  'yeast infection', 'bacterial vaginosis',
  'exercise', 'workout', 'yoga', 'walking', 'running', 'stretching',
  'diet', 'nutrition', 'food', 'eating', 'iron', 'vitamin', 'calcium',
  'sleep', 'insomnia', 'rest',
  'stress', 'mental health', 'anxiety', 'depression', 'mood', 'moody', 'self care',
  'sex education', 'consent', 'safe sex', 'contraception', 'birth control',
  'pregnancy', 'conception', 'fertility window', 'safe period',
  'pelvic pain', 'lower back', 'abdomen', 'stomach',
  'weight', 'weight gain', 'weight loss', 'body changes',
  'embarrassed', 'ashamed', 'scared', 'nervous', 'worried',
  'teen', 'adolescent', 'first period', 'menarche',
];

const MENSTRUAL_TOPIC_MAP = {
  period: 'menstruation', periods: 'menstruation', menstrual: 'menstruation',
  cramps: 'cramps', cramping: 'cramps', pms: 'pms', pmdd: 'pms',
  puberty: 'puberty', ovulation: 'ovulation',
  exercise: 'exercise', workout: 'exercise', yoga: 'exercise', walking: 'exercise', running: 'exercise',
  diet: 'diet & nutrition', nutrition: 'diet & nutrition', food: 'diet & nutrition', iron: 'diet & nutrition',
  sleep: 'sleep & rest', insomnia: 'sleep & rest', rest: 'sleep & rest',
  stress: 'mental health', anxiety: 'mental health', depression: 'mental health',
  mood: 'mood swings', 'mood swings': 'mood swings', bloating: 'bloating',
  acne: 'skin changes', 'breast tenderness': 'body changes',
  'sex education': 'sex education', consent: 'sex education', 'safe sex': 'sex education',
  contraception: 'contraception', 'birth control': 'contraception',
  pregnancy: 'pregnancy & fertility', conception: 'pregnancy & fertility',
  endometriosis: 'endometriosis', pcos: 'pcos', pcod: 'pcos',
  hygiene: 'hygiene', sanitary: 'hygiene', tampon: 'hygiene', pad: 'hygiene',
  'menstrual cup': 'hygiene',
  discharge: 'vaginal health', infection: 'vaginal health',
};

function extractTopics(message) {
  const lower = message.toLowerCase();
  const found = [];

  for (const keyword of MENSTRUAL_TOPICS) {
    if (lower.includes(keyword)) {
      const mapped = MENSTRUAL_TOPIC_MAP[keyword] || keyword;
      if (!found.includes(mapped)) {
        found.push(mapped);
      }
    }
  }

  if (found.length === 0 && /\b(what|how|why|when|tell|explain|about)\b/.test(lower)) {
    found.push('general question');
  }

  return found;
}

function detectAgeGroup(message) {
  const lower = message.toLowerCase();

  if (/1[0-2]\s*(year|yr|y\.o)/.test(lower) || /\b(10|11|12)\s*(year|yr)/.test(lower)) {
    return 'pre-teen';
  }
  if (/1[3-9]\s*(year|yr|y\.o)/.test(lower) || /\b(13|14|15|16|17|18|19)\s*(year|yr)/.test(lower)) {
    return 'teen';
  }
  if (/2[0-9]\s*(year|yr|y\.o)/.test(lower) || /\b(20|21|22|23|24|25|26|27|28|29)\s*(year|yr)/.test(lower)) {
    return 'young-adult';
  }
  if (/3[0-9]|4[0-9]|5[0-9]\s*(year|yr|y\.o)/.test(lower)) {
    return 'adult';
  }

  return null;
}

function detectConcern(message) {
  const lower = message.toLowerCase();
  const concerns = [];

  if (/\b(pain|hurts|hurt|cramp|cramping|cramps|agonizing|unbearable|ache|aching|sore)\b/.test(lower)) {
    concerns.push('pain management');
  }
  if (/\b(irregular|missed|skipped|late|absent|unpredictable)\b/.test(lower) && /\b(period|cycle)\b/.test(lower)) {
    concerns.push('irregular cycles');
  }
  if (/\b(heavy|flood|soaking|flooding|gush|gushing|clot|clots)\b/.test(lower)) {
    concerns.push('heavy bleeding');
  }
  if (/\b(discharge|smell|odor|itch|itching|irritation|burning)\b/.test(lower)) {
    concerns.push('vaginal health');
  }
  if (/\b(worry|worried|scared|nervous|anxious|embarrass|embarrassed|ashamed|afraid|fear|frightened)\b/.test(lower)) {
    concerns.push('anxiety or fear');
  }
  if (/\b(pimple|pimples|acne|breakout|skin|hair|growth|developing|changing)\b/.test(lower)) {
    concerns.push('body changes');
  }
  if (/\b(mood|moody|emotion|emotional|cry|crying|irritable|irritated|angry|sad|upset)\b/.test(lower)) {
    concerns.push('mood changes');
  }
  if (/\b(tired|fatigue|exhausted|energy|low energy|dizzy|dizziness|faint|nausea|vomit)\b/.test(lower)) {
    concerns.push('fatigue or energy');
  }

  return concerns;
}

let classificationModel = null;

function getClassificationModel() {
  if (!classificationModel) {
    try {
      const { getModel } = require('../config/gemini');
      classificationModel = getModel('gemini-2.5-flash-lite');
    } catch {
      classificationModel = null;
    }
  }
  return classificationModel;
}

const CLASSIFICATION_CACHE = new Map();

async function classifyTopicsWithAI(message) {
  if (CLASSIFICATION_CACHE.has(message)) {
    return CLASSIFICATION_CACHE.get(message);
  }

  const model = getClassificationModel();
  if (!model) return [];

  try {
    const prompt = `You are a topic classifier for a menstrual health chatbot.
From this list, pick ALL topics that the user's message relates to:
- menstruation
- cramps
- pms
- puberty
- ovulation
- exercise
- diet & nutrition
- sleep & rest
- mental health
- mood swings
- bloating
- hygiene
- vaginal health
- body changes
- sex education
- contraception
- pregnancy & fertility
- endometriosis
- pcos
- menopause
- general

Return ONLY a JSON array of strings. Example: ["cramps", "exercise"]
For general health questions with no specific topic, return ["general"].

Message: "${message.replace(/"/g, '\\"').slice(0, 500)}"`;

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    const text = result.response.text().trim();
    const parsed = JSON.parse(text);

    if (Array.isArray(parsed)) {
      const valid = parsed.filter((t) => typeof t === 'string' && t !== 'general');
      CLASSIFICATION_CACHE.set(message, valid);
      if (CLASSIFICATION_CACHE.size > 100) {
        const firstKey = CLASSIFICATION_CACHE.keys().next().value;
        CLASSIFICATION_CACHE.delete(firstKey);
      }
      return valid;
    }
    return [];
  } catch {
    return [];
  }
}

async function getOrCreateMemory(userId) {
  let memory = await UserMemory.findOne({ userId });
  if (!memory) {
    memory = await UserMemory.create({ userId });
  }
  return memory;
}

async function updateMemory(userId, message) {
  const memory = await getOrCreateMemory(userId);

  let topics = extractTopics(message);

  if (topics.length === 0 || (topics.length === 1 && topics[0] === 'general question')) {
    const aiTopics = await classifyTopicsWithAI(message);
    for (const topic of aiTopics) {
      if (!topics.includes(topic)) topics.push(topic);
    }
  }

  for (const topic of topics) {
    memory.recordTopic(topic);
  }

  if (topics.length > 0) {
    memory.lastTopic = topics[0];
  }

  const ageGroup = detectAgeGroup(message);
  if (ageGroup && memory.ageGroup === 'unspecified') {
    memory.ageGroup = ageGroup;
  }

  const concerns = detectConcern(message);
  for (const concern of concerns) {
    if (!memory.concerns.includes(concern)) {
      memory.concerns.push(concern);
    }
  }

  memory.lastInteraction = new Date();
  memory.totalInteractions += 1;
  await memory.save();

  return memory;
}

async function updateSessionContext(userId, userMessage, sakhiReply) {
  try {
    const memory = await getOrCreateMemory(userId);

    const model = getClassificationModel();
    if (!model || memory.totalInteractions % 3 !== 0) return;

    const prompt = `Summarize this exchange in one short sentence (max 15 words):
User: "${userMessage.replace(/"/g, '\\"').slice(0, 200)}"
Assistant: "${sakhiReply.replace(/"/g, '\\"').slice(0, 200)}"

Summary:`;

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    const summary = result.response.text().trim();
    if (summary && summary.length < 150) {
      memory.sessionSummary = summary;
      await memory.save();
    }
  } catch {
    // silently fail
  }
}

async function buildMemoryContext(userId) {
  const memory = await UserMemory.findOne({ userId });
  if (!memory || memory.totalInteractions === 0) {
    return '';
  }

  const summary = memory.getSummary();
  const parts = [];

  if (summary.lastTopic) {
    parts.push(`- Last discussed topic: ${summary.lastTopic}`);
  }

  if (summary.sessionSummary) {
    parts.push(`- Recent conversation context: ${summary.sessionSummary}`);
  }

  if (summary.ageGroup !== 'unspecified') {
    parts.push(`- User age group: ${summary.ageGroup}`);
  }

  if (summary.concerns.length > 0) {
    parts.push(`- Known concerns: ${summary.concerns.join(', ')}`);
  }

  if (summary.recentTopics.length > 0) {
    parts.push(`- Topics they've asked about: ${summary.recentTopics.join(', ')}`);
  }

  parts.push(`- Total interactions so far: ${summary.totalInteractions}`);
  parts.push(`- Preferred detail level: ${summary.detailLevel}`);

  return parts.length > 0
    ? `\n## User Context (from memory)\n${parts.join('\n')}\n`
    : '';
}

module.exports = {
  updateMemory,
  buildMemoryContext,
  updateSessionContext,
  classifyTopicsWithAI,
  getOrCreateMemory,
  extractTopics,
  detectAgeGroup,
  detectConcern,
};
