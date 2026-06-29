const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ['user', 'model'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      default: 'New Chat',
    },
    messages: [messageSchema],
    summary: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

conversationSchema.pre('save', function () {
  if (this.messages.length > 0 && this.title === 'New Chat') {
    const firstMsg = this.messages[0].content;
    this.title = firstMsg.length > 60 ? firstMsg.slice(0, 60) + '...' : firstMsg;
  }
});

module.exports = mongoose.model('Conversation', conversationSchema);
