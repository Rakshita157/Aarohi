const { getOrCreateMemory } = require('../services/memoryService');

const getMemory = async (req, res) => {
  try {
    const memory = await getOrCreateMemory(req.user._id);
    res.json(memory.getSummary());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePreferences = async (req, res) => {
  try {
    const { ageGroup, detailLevel, language } = req.body;
    const memory = await getOrCreateMemory(req.user._id);

    if (ageGroup) memory.ageGroup = ageGroup;
    if (detailLevel) memory.preferences.detailLevel = detailLevel;
    if (language) memory.preferences.language = language;

    await memory.save();
    res.json(memory.getSummary());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const clearMemory = async (req, res) => {
  try {
    const memory = await getOrCreateMemory(req.user._id);
    memory.topicsDiscussed = [];
    memory.concerns = [];
    memory.ageGroup = 'unspecified';
    memory.totalInteractions = 0;
    await memory.save();
    res.json({ message: 'Memory cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMemory, updatePreferences, clearMemory };
