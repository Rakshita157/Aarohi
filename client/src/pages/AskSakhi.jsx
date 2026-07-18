import { useState, useRef, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { chatAPI, memoryAPI } from '../services/api';
import { SakhiAvatar } from '../components/Icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/AskSakhi.css';

const AskSakhi = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [activeConvId, setActiveConvId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [convLoading, setConvLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMemory, setUserMemory] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const loadedRef = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (loadedRef.current) return;
    loadedRef.current = true;

    Promise.all([
      chatAPI.getConversations(),
      memoryAPI.getMemory(),
    ]).then(([convRes, memRes]) => {
      setConversations(convRes.data);
      setUserMemory(memRes.data);
    }).catch(() => {
      // silently fail
    }).finally(() => {
      setConvLoading(false);
    });
  }, [user, navigate]);

  const loadConversation = async (id) => {
    setActiveConvId(id);
    setSending(true);
    try {
      const res = await chatAPI.getConversation(id);
      setMessages(res.data.messages);
    } catch {
      setMessages([]);
    } finally {
      setSending(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || sending) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setSending(true);

    try {
      const res = await chatAPI.sendMessage(userMessage, activeConvId);
      setMessages((prev) => [...prev, { role: 'model', content: res.data.reply }]);
      const newConvId = res.data.conversationId;
      if (activeConvId !== newConvId) {
        setActiveConvId(newConvId);
        chatAPI.getConversations().then((r) => setConversations(r.data)).catch(() => {});
      }
      memoryAPI.getMemory().then((mr) => setUserMemory(mr.data)).catch(() => {});
    } catch (err) {
      const serverMsg = err?.response?.data?.message;
      const displayMsg = serverMsg
        ? t('askSakhi.sorryError', { message: serverMsg })
        : t('askSakhi.sorryGeneric');
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: displayMsg },
      ]);
    } finally {
      setSending(false);
    }
  };

  const refreshConversations = useCallback(() => {
    chatAPI.getConversations().then((res) => {
      setConversations(res.data);
    }).catch(() => {});
  }, []);

  const handleNewChat = () => {
    setActiveConvId(null);
    setMessages([]);
    setInput('');
    inputRef.current?.focus();
  };

  const handleDeleteConv = async (id, e) => {
    e.stopPropagation();
    try {
      await chatAPI.deleteConversation(id);
      if (activeConvId === id) {
        setActiveConvId(null);
        setMessages([]);
      }
      refreshConversations();
    } catch {
      // silently fail
    }
  };

  return (
    <div className="sakhi-page">
      <button className="sakhi-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>

      <div className={`sakhi-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sakhi-sidebar-header">
          <h2>{t('askSakhi.chats')}</h2>
          <button className="sakhi-new-chat-btn" onClick={handleNewChat}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            {t('askSakhi.newChat')}
          </button>
        </div>
        <div className="sakhi-conv-list">
          {convLoading ? (
            <div className="sakhi-conv-loading">{t('askSakhi.loadingConversations')}</div>
          ) : conversations.length === 0 ? (
            <div className="sakhi-conv-empty">{t('askSakhi.noConversations')}</div>
          ) : (
            conversations.map((conv) => (
              <div
                key={conv._id}
                className={`sakhi-conv-item ${activeConvId === conv._id ? 'active' : ''}`}
                onClick={() => loadConversation(conv._id)}
              >
                <div className="sakhi-conv-item-content">
                  <div className="sakhi-conv-title">{conv.title}</div>
                  <div className="sakhi-conv-date">
                    {new Date(conv.updatedAt).toLocaleDateString()}
                  </div>
                </div>
                <button
                  className="sakhi-conv-delete"
                  onClick={(e) => handleDeleteConv(conv._id, e)}
                  title={t('askSakhi.deleteConversation')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="sakhi-main">
        <div className="sakhi-chat-header">
          <div className="sakhi-chat-header-left">
            <div className="sakhi-chat-avatar">
              <SakhiAvatar />
            </div>
            <div>
              <div className="sakhi-chat-title">{t('askSakhi.sakhiTitle')}</div>
              <div className="sakhi-chat-subtitle">
                {userMemory?.recentTopics?.length > 0
                  ? `${t('askSakhi.iKnowAbout')} ${userMemory.recentTopics.slice(0, 3).join(', ')}`
                  : t('askSakhi.menstrualHealthAssistant')}
              </div>
            </div>
          </div>
          <button className="sakhi-new-chat-btn header-only" onClick={handleNewChat}>
            {t('askSakhi.newChat')}
          </button>
        </div>

        <div className="sakhi-messages">
          {messages.length === 0 && !sending && (
            <div className="sakhi-empty">
              <div className="sakhi-empty-icon">
                <SakhiAvatar />
              </div>
              <h2>{t('askSakhi.hiImSakhi')}</h2>
              <p>{t('askSakhi.sakhiDesc')}</p>
              <div className="sakhi-suggestions">
                <button onClick={() => setInput(t('askSakhi.suggestion1'))}>{t('askSakhi.suggestion1')}</button>
                <button onClick={() => setInput(t('askSakhi.suggestion2'))}>{t('askSakhi.suggestion2')}</button>
                <button onClick={() => setInput(t('askSakhi.suggestion3'))}>{t('askSakhi.suggestion3')}</button>
                <button onClick={() => setInput(t('askSakhi.suggestion4'))}>{t('askSakhi.suggestion4')}</button>
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`sakhi-msg ${msg.role}`}>
              {msg.role === 'model' && (
                <div className="sakhi-msg-avatar">
                  <SakhiAvatar />
                </div>
              )}
              <div className={`sakhi-msg-bubble ${msg.role}`}>
                <div className="sakhi-msg-content">{msg.content}</div>
              </div>
            </div>
          ))}
          {sending && messages.length > 0 && (
            <div className="sakhi-msg model">
              <div className="sakhi-msg-avatar">
                <SakhiAvatar />
              </div>
              <div className="sakhi-msg-bubble model">
                <div className="sakhi-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="sakhi-input-area" onSubmit={handleSend}>
          <input
            ref={inputRef}
            type="text"
            placeholder={t('askSakhi.inputPlaceholder')}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={sending}
          />
          <button type="submit" disabled={!input.trim() || sending}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskSakhi;
