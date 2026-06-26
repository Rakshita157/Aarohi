import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page" id="not-found">
      {/* Decorative circles */}
      <div className="not-found-deco not-found-deco-1"></div>
      <div className="not-found-deco not-found-deco-2"></div>
      <div className="not-found-deco not-found-deco-3"></div>
      <div className="not-found-deco not-found-deco-4"></div>

      <div className="not-found-emoji">🌸</div>
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-description">
        Oops! The page you're looking for doesn't exist yet.
        We're working hard to bring you more content. In the meantime,
        head back to the homepage.
      </p>
      <Link to="/" className="not-found-btn">
        ← Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
