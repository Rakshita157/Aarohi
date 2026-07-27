import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Community.css';

const Community = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('connecting'); // 'connecting' | 'connected' | 'disconnected'
  const [anonymousName, setAnonymousName] = useState('');

  const wsRef = useRef(null);
  const messagesEndRef = useRef(null);

  const getWSUrl = () => {
    const api_url = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    const url = new URL(api_url);
    const protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${protocol}//${url.host}`;
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    let socket;
    let reconnectTimeout;
    let isMounted = true;

    const connect = () => {
      if (!isMounted) return;
      setConnectionStatus('connecting');

      const wsUrl = getWSUrl();
      socket = new WebSocket(`${wsUrl}?token=${user.token}`);
      wsRef.current = socket;

      socket.onopen = () => {
        if (isMounted) {
          setConnectionStatus('connected');
        }
      };

      socket.onmessage = (event) => {
        if (!isMounted) return;
        try {
          const payload = JSON.parse(event.data);
          if (payload.type === 'history') {
            setMessages(payload.messages || []);
            setAnonymousName(payload.yourName || '');
          } else if (payload.type === 'message') {
            setMessages((prev) => [...prev, payload.message]);
          }
        } catch (err) {
          console.error('Error parsing socket message:', err);
        }
      };

      socket.onclose = () => {
        if (isMounted) {
          setConnectionStatus('disconnected');
          reconnectTimeout = setTimeout(connect, 5000);
        }
      };

      socket.onerror = (err) => {
        console.error('WebSocket error:', err);
        if (isMounted) {
          setConnectionStatus('disconnected');
        }
      };
    };

    connect();

    return () => {
      isMounted = false;
      if (socket) {
        socket.close();
      }
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
    };
  }, [user, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || connectionStatus !== 'connected') return;

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: 'message',
          text: inputValue.trim()
        })
      );
      setInputValue('');
    }
  };

  const formatTime = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  if (!user) return null;

  return (
    <div className="community-page">
      <div className="community-header">
        <div className="community-header-left">
          <h1>{t('community.title')}</h1>
          <p>{t('community.subtitle')}</p>
        </div>
        <div className="community-status-container">
          {anonymousName && (
            <div className="community-user-badge">
              {t('community.chattingAs')} <strong>{anonymousName}</strong>
            </div>
          )}
          <div className={`community-status ${connectionStatus}`}>
            <span className={`status-dot ${connectionStatus === 'connecting' ? 'pulse' : ''}`} />
            {connectionStatus === 'connected' && t('community.statusConnected')}
            {connectionStatus === 'connecting' && t('community.statusConnecting')}
            {connectionStatus === 'disconnected' && t('community.statusDisconnected')}
          </div>
        </div>
      </div>

      <div className="community-messages">
        {messages.length === 0 && (
          <div className="community-welcome-container">
            <h3>{t('community.welcomeTitle')}</h3>
            <p>{t('community.welcomeText')}</p>
          </div>
        )}
        {messages.map((msg) => {
          const isSelf = msg.senderName === anonymousName;
          return (
            <div
              key={msg._id}
              className={`comm-msg-group ${isSelf ? 'self' : 'other'}`}
            >
              {!isSelf && <div className="comm-sender-name">{msg.senderName}</div>}
              <div className="comm-bubble">
                {msg.text}
                <span className="comm-time">{formatTime(msg.createdAt)}</span>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <form className="community-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t('community.placeholder')}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={connectionStatus !== 'connected'}
          maxLength={500}
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || connectionStatus !== 'connected'}
          aria-label={t('community.btnSend')}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Community;
