import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  showNav?: boolean;
  transparent?: boolean;
}

export default function Header({ showNav = false, transparent = false }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={`hero-nav ${transparent ? 'transparent' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => navigate('/')}>
            <span className="nav-logo-icon">☁️</span>
            <span>CloudVault</span>
          </button>

          {showNav && (
            <nav className="nav-links">
              <a href="#features">Features</a>
              <a href="#download">Download</a>
              <a href="https://github.com/YOUR_USERNAME/cloudvault-app" target="_blank" rel="noreferrer">GitHub</a>
            </nav>
          )}

          <div className="nav-actions">
            <button className="btn btn-secondary btn-sm" onClick={() => navigate('/dashboard')}>
              Open App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
