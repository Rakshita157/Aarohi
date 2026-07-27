const mongoose = require('mongoose');

const communityMessageSchema = new mongoose.Schema(
  {
    senderName: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: [true, 'Message text is required'],
      trim: true,
    },
  },
  { timestamps: true }
);

// Expire messages after 24 hours (86400 seconds)
communityMessageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

module.exports = mongoose.model('CommunityMessage', communityMessageSchema);
