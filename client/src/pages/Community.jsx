import { useTranslation } from 'react-i18next';

const Community = () => {
  const { t } = useTranslation();
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <div className="coming-soon-badge" style={{
          display: 'block',
          width: 'fit-content',
          margin: '0 auto 0.75rem',
          background: 'linear-gradient(135deg, #b794d4, #dc7e96)',
          color: 'white',
          fontSize: '0.8rem',
          fontWeight: 700,
          padding: '0.4rem 1rem',
          borderRadius: 50,
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>{t('community.comingSoon')}</div>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#2d3748',
          margin: '0 0 1rem',
          fontFamily: "'Georgia', serif"
        }}>{t('community.title')}</h2>
        <p style={{
          fontSize: '1.05rem',
          color: '#4a5568',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          {t('community.description')}
        </p>
      </div>
    </div>
  );
};

export default Community;
