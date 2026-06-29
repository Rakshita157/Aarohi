import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { chatAPI, memoryAPI } from '../services/api';
import { SakhiAvatar } from './Icons';
import { useNavigate } from 'react-router-dom';
import '../styles/ChatBox.css';

const ChatBox = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userMemory, setUserMemory] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && user) {
      memoryAPI.getMemory().then((res) => setUserMemory(res.data)).catch(() => {});
    }
  }, [isOpen, user]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    if (!user) {
      navigate('/login');
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await chatAPI.sendMessage(userMessage, conversationId);
      setMessages((prev) => [...prev, { role: 'model', content: res.data.reply }]);
      setConversationId(res.data.conversationId);
      memoryAPI.getMemory().then((mr) => setUserMemory(mr.data)).catch(() => {});
    } catch (err) {
      const serverMsg = err?.response?.data?.message;
      const displayMsg = serverMsg
        ? `Sorry, I had trouble responding: ${serverMsg}`
        : 'Sorry, I had trouble responding. Please try again.';
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: displayMsg },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setConversationId(null);
    setMessages([]);
    setInput('');
    setUserMemory(null);
  };

  const memoryTopics = userMemory?.recentTopics?.length > 0
    ? userMemory.recentTopics.slice(0, 3).join(', ')
    : null;

  return (
    <>
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)} aria-label="Chat with Sakhi">
          <SakhiAvatar />
        </button>
      )}

      {isOpen && (
        <div className="chat-widget">
          <div className="chat-widget-header">
            <div className="chat-widget-header-left">
              <div className="chat-widget-avatar">
                <SakhiAvatar />
              </div>
              <div>
                <div className="chat-widget-title">Sakhi</div>
                <div className="chat-widget-status">
                  {memoryTopics ? (
                    <span className="chat-widget-memory-badge" title={`I remember you asked about: ${memoryTopics}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                        <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z"/>
                      </svg>
                      Knows you
                    </span>
                  ) : 'Online'}
                </div>
              </div>
            </div>
            <div className="chat-widget-header-actions">
              <button className="chat-widget-btn" onClick={handleNewChat} title="New chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
              <button className="chat-widget-btn" onClick={() => setIsOpen(false)} title="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="chat-widget-messages">
            {messages.length === 0 && !loading && (
              <div className="chat-widget-empty">
                <SakhiAvatar />
                <p>
                  {userMemory?.totalInteractions > 0
                    ? `Welcome back! I'm Sakhi. I remember we've talked ${userMemory.totalInteractions} times. What's on your mind today?`
                    : "Hi! I'm Sakhi, your menstrual health guide. Ask me anything!"}
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role}`}>
                {msg.role === 'model' && (
                  <div className="chat-msg-avatar">
                    <SakhiAvatar />
                  </div>
                )}
                <div className="chat-msg-bubble">
                  <div className="chat-msg-content">{msg.content}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-msg model">
                <div className="chat-msg-avatar">
                  <SakhiAvatar />
                </div>
                <div className="chat-msg-bubble">
                  <div className="chat-typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-widget-input" onSubmit={handleSend}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" disabled={!input.trim() || loading}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBox;
