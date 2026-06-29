const UserMemory = require('../models/UserMemory');

const MENSTRUAL_TOPICS = [
  'period', 'menstrual cycle', 'cramps', 'pms', 'puberty', 'ovulation',
  'fertility', 'hygiene', 'sanitary', 'tampon', 'pad', 'menstrual cup',
  'cycle tracking', 'irregular periods', 'amenorrhea', 'dysmenorrhea',
  'endometriosis', 'pcos', 'hormones', 'spotting', 'menopause',
  'premenstrual', 'mood swings', 'bloating', 'acne', 'breast tenderness',
  'period pain', 'back pain', 'nausea', 'fatigue', 'headache',
  'heavy bleeding', 'light bleeding', 'clots', 'color', 'discharge',
  'white discharge', 'brown discharge', 'itch', 'infection', 'uti',
  'yeast infection', 'exercise', 'diet', 'nutrition', 'sleep',
  'stress', 'mental health', 'anxiety', 'depression', 'self care',
  'sex education', 'consent', 'safe sex', 'contraception', 'pregnancy',
];

function extractTopics(message) {
  const lower = message.toLowerCase();
  const found = [];

  for (const topic of MENSTRUAL_TOPICS) {
    if (lower.includes(topic)) {
      found.push(topic);
    }
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

  if (/\b(pain|hurts|hurt|cramp|cramping|agonizing|unbearable)\b/.test(lower)) {
    concerns.push('pain management');
  }
  if (/\b(irregular|missed|skipped|late|absent)\b/.test(lower) && /\b(period|cycle)\b/.test(lower)) {
    concerns.push('irregular cycles');
  }
  if (/\b(heavy|flood|soaking|flooding|gush)\b/.test(lower)) {
    concerns.push('heavy bleeding');
  }
  if (/\b(discharge|smell|odor|itch|irritation)\b/.test(lower)) {
    concerns.push('vaginal health');
  }
  if (/\b(worry|scared|nervous|anxious|embarrass|ashamed|afraid)\b/.test(lower)) {
    concerns.push('anxiety or fear');
  }
  if (/\b(pimple|acne|breakout|skin|hair|growth)\b/.test(lower)) {
    concerns.push('body changes');
  }
  if (/\b(mood|emotion|cry|irritable|angry|sad)\b/.test(lower)) {
    concerns.push('mood changes');
  }

  return concerns;
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

  const topics = extractTopics(message);
  for (const topic of topics) {
    memory.recordTopic(topic);
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

async function buildMemoryContext(userId) {
  const memory = await UserMemory.findOne({ userId });
  if (!memory || memory.totalInteractions === 0) {
    return '';
  }

  const summary = memory.getSummary();
  const parts = [];

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
  getOrCreateMemory,
  extractTopics,
  detectAgeGroup,
  detectConcern,
};
