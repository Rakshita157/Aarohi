const url = require('url');
const jwt = require('jsonwebtoken');
const { WebSocketServer } = require('ws');
const User = require('../models/User');
const CommunityMessage = require('../models/CommunityMessage');

const adjectives = [
  'Cheerful', 'Gentle', 'Quiet', 'Playful', 'Brave', 'Kind', 'Bright', 'Calm',
  'Happy', 'Sunny', 'Clever', 'Witty', 'Bold', 'Friendly', 'Joyful', 'Sweet'
];

const nouns = [
  'Panda', 'Dolphin', 'Koala', 'Fox', 'Penguin', 'Owl', 'Squirrel', 'Rabbit',
  'Deer', 'Otter', 'Hedgehog', 'Seal', 'Tiger', 'Lion', 'Bear', 'Butterfly'
];

const generateAnonymousName = () => {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNum = Math.floor(100 + Math.random() * 900);
  return `${adj}${noun}${randomNum}`;
};

const setupWebSocket = (server) => {
  const wss = new WebSocketServer({ noServer: true });

  server.on('upgrade', async (request, socket, head) => {
    try {
      const parsedUrl = url.parse(request.url, true);
      const token = parsedUrl.query.token;

      if (!token) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        socket.destroy();
        return;
      }

      let decoded;
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        socket.destroy();
        return;
      }

      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        socket.destroy();
        return;
      }

      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request, user);
      });
    } catch (err) {
      console.error('Upgrade handling error:', err);
      socket.destroy();
    }
  });

  let cachedMessages = [];

  const preloadMessages = async () => {
    try {
      const messages = await CommunityMessage.find()
        .sort({ createdAt: -1 })
        .limit(50)
        .lean();
      
      cachedMessages = messages.reverse().map(msg => ({
        _id: msg._id,
        senderName: msg.senderName,
        text: msg.text,
        createdAt: msg.createdAt,
      }));
      console.log(`Preloaded ${cachedMessages.length} community messages.`);
    } catch (err) {
      console.error('Error preloading community messages:', err);
    }
  };

  preloadMessages();

  wss.on('connection', (ws, request, user) => {
    const anonymousName = generateAnonymousName();
    ws.anonymousName = anonymousName;
    ws.userId = user._id;

    console.log(`User ${user.name} connected to community chat as ${anonymousName}`);

    ws.send(JSON.stringify({
      type: 'history',
      messages: cachedMessages,
      yourName: anonymousName
    }));

    ws.on('message', async (data) => {
      try {
        const payload = JSON.parse(data);
        if (payload.type === 'message') {
          const text = payload.text?.trim();
          if (!text || text.length > 500) return;

          const newMessage = await CommunityMessage.create({
            senderName: anonymousName,
            user: user._id,
            text: text
          });

          const serializedMessage = {
            _id: newMessage._id,
            senderName: anonymousName,
            text: text,
            createdAt: newMessage.createdAt
          };

          cachedMessages.push(serializedMessage);
          if (cachedMessages.length > 50) {
            cachedMessages.shift();
          }

          const broadcastData = JSON.stringify({
            type: 'message',
            message: serializedMessage
          });

          wss.clients.forEach((client) => {
            if (client.readyState === 1) {
              client.send(broadcastData);
            }
          });
        }
      } catch (err) {
        console.error('Error handling WebSocket message:', err);
      }
    });

    ws.on('close', () => {
      console.log(`${anonymousName} left the community chat.`);
    });
  });
};

module.exports = setupWebSocket;
