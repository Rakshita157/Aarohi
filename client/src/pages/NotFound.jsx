import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="not-found-page" id="not-found">
      {/* Decorative circles */}
      <div className="not-found-deco not-found-deco-1"></div>
      <div className="not-found-deco not-found-deco-2"></div>
      <div className="not-found-deco not-found-deco-3"></div>
      <div className="not-found-deco not-found-deco-4"></div>

      <div className="not-found-emoji">🌸</div>
      <h1 className="not-found-title">{t('notFound.title')}</h1>
      <h2 className="not-found-subtitle">{t('notFound.subtitle')}</h2>
      <p className="not-found-description">
        {t('notFound.description')}
      </p>
      <Link to="/" className="not-found-btn">
        {t('notFound.backToHome')}
      </Link>
    </div>
  );
}

export default NotFound;
