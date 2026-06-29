const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  count: { type: Number, default: 1 },
  lastDiscussed: { type: Date, default: Date.now },
}, { _id: false });

const userMemorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true,
  },
  ageGroup: {
    type: String,
    enum: ['pre-teen', 'teen', 'young-adult', 'adult', 'unspecified'],
    default: 'unspecified',
  },
  topicsDiscussed: [topicSchema],
  concerns: [String],
  preferences: {
    language: { type: String, default: 'english' },
    detailLevel: { type: String, enum: ['basic', 'moderate', 'detailed'], default: 'moderate' },
  },
  lastInteraction: { type: Date, default: Date.now },
  totalInteractions: { type: Number, default: 0 },
}, { timestamps: true });

userMemorySchema.methods.recordTopic = function (topic) {
  const existing = this.topicsDiscussed.find(
    (t) => t.topic.toLowerCase() === topic.toLowerCase()
  );
  if (existing) {
    existing.count += 1;
    existing.lastDiscussed = new Date();
  } else {
    this.topicsDiscussed.push({ topic, count: 1, lastDiscussed: new Date() });
  }
};

userMemorySchema.methods.getSummary = function () {
  const recentTopics = this.topicsDiscussed
    .sort((a, b) => b.lastDiscussed - a.lastDiscussed)
    .slice(0, 5)
    .map((t) => t.topic);

  return {
    ageGroup: this.ageGroup,
    recentTopics,
    concerns: this.concerns,
    detailLevel: this.preferences.detailLevel,
    totalInteractions: this.totalInteractions,
  };
};

module.exports = mongoose.model('UserMemory', userMemorySchema);
