import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-hero">
      <Header showNav />

      {/* Hero */}
      <section className="hero-content">
        <div className="hero-eyebrow">🚀 Cloud File Management, Redefined</div>
        <h1 className="hero-title">
          Your Files.<br />
          <span className="gradient-text">One Place.</span><br />
          Every Cloud.
        </h1>
        <p className="hero-subtitle">
          Connect Google Drive, OneDrive & Dropbox in one beautiful app.
          Browse, stream 4K media, and download with one click — no more juggling tabs.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/dashboard')}>🚀 Get Started Free</button>
          <a href="#features"><button className="btn btn-secondary btn-lg">Learn More →</button></a>
        </div>
        <div className="hero-stats">
          <div><div className="hero-stat-num">3</div><div className="hero-stat-label">Cloud providers</div></div>
          <div><div className="hero-stat-num">4K</div><div className="hero-stat-label">Media playback</div></div>
          <div><div className="hero-stat-num">1</div><div className="hero-stat-label">Click downloads</div></div>
          <div><div className="hero-stat-num">PC + Android + Web</div><div className="hero-stat-label">All platforms</div></div>
        </div>
      </section>

      {/* Scroll hint */}
      <div className="hero-scroll-hint"><div className="scroll-arrow" /><span>Scroll to explore</span></div>

      {/* Features */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-label">Features</div>
          <h2 className="section-title">Everything you need,<br /><span className="gradient-text">nothing you don't</span></h2>
          <p className="section-desc">CloudVault unifies your scattered cloud life into one elegant interface. No sign-up. No data collection. Just your files, beautifully organized.</p>
          <div className="features-grid">
            <div className="feature-card animate-fade-up"><div className="feature-icon">☁️</div>
              <div className="feature-title">Unified Cloud Browser</div>
              <div className="feature-desc">Connect Google Drive, OneDrive, and Dropbox simultaneously. Browse all your files in a single, fast, beautiful grid — no switching tabs.</div>
            </div>
            <div className="feature-card animate-fade-up" style={{ animationDelay: '100ms' }}><div className="feature-icon">🎬</div>
              <div className="feature-title">4K Media Player</div>
              <div className="feature-desc">Play any video or music directly in CloudVault with full playback controls. Speed up, slow down, fullscreen — your media, your way.</div>
            </div>
            <div className="feature-card animate-fade-up" style={{ animationDelay: '200ms' }}><div className="feature-icon">⚡</div>
              <div className="feature-title">One-Click Fast Downloads</div>
              <div className="fastDownloadsDesc">Generate shareable download links instantly. No waiting, no compression, no nonsense — your files delivered at full speed.</div>
            </div>
            <div className="feature-card animate-fade-up" style={{ animationDelay: '300ms' }}><div className="feature-icon">🖼️</div>
              <div className="feature-title">Image Gallery</div>
              <div className="feature-desc">Browse photos and images with smooth previews. Full-screen viewing with zoom. All your photos, one gallery.</div>
            </div>
            <div className="feature-card animate-fade-up" style={{ animationDelay: '400ms' }}><div className="feature-icon">🔒</div>
              <div className="feature-title">Secure by Design</div>
              <div className="feature-desc">OAuth 2.0 authentication. Tokens stored in your OS keychain. Your credentials never touch our servers — ever.</div>
            </div>
            <div className="feature-card animate-fade-up" style={{ animationDelay: '500ms' }}><div className="feature-icon">📱</div>
              <div className="feature-title">Works Everywhere</div>
              <div className="feature-desc">Native PC app (Windows .exe), Android APK, and GitHub Pages web app — same codebase, same experience, all platforms.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="features-section" style={{ background: 'var(--bg-primary)', paddingTop: 40 }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '60px 32px', background: 'var(--bg-secondary)', border: '1px dashed var(--border-light)' }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🖥️</div>
            <h3 style={{ marginBottom: 8 }}>App Screenshots Coming Soon</h3>
            <p style={{ marginBottom: 24 }}>Once the app is built, screenshots will be added here.</p>
            <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Try the Live App →</button>
          </div>
        </div>
      </section>

      {/* Download / Platform */}
      <section className="download-section" id="download">
        <div className="container">
          <div className="section-label">Platforms</div>
          <h2 className="section-title">Available on <span className="gradient-text">all your devices</span></h2>
          <p className="section-desc" style={{ margin: '0 auto 0', maxWidth: 480 }}>Download CloudVault for your platform. The PC app, Android app, and web app all share the same codebase and stay in sync.</p>
          <div className="platform-badges">
            <div className="platform-badge"><span className="icon">🪟</span><span>Windows PC</span><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>· .exe</span></div>
            <div className="platform-badge"><span className="icon">📱</span><span>Android</span><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>· APK</span></div>
            <div className="platform-badge"><span className="icon">🌐</span><span>Web</span><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>· github.io</span></div>
            <div className="platform-badge"><span className="icon">🍎</span><span>macOS / Linux</span><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>· coming soon</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <p>© 2025 CloudVault · Open Source MIT · <a href="https://github.com/YOUR_USERNAME/cloudvault-app" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-light)' }}>GitHub</a></p>
        </div>
      </footer>
    </div>
  );
}
