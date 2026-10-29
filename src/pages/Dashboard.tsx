import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">☁️</span>
            <span>CloudVault</span>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-label">Connected Clouds</div>
          <div className="cloud-account-item active">
            <div className="cloud-provider-icon" style={{ background: '#f0f9ff' }}>📦</div>
            <div className="cloud-provider-info">
              <div className="cloud-provider-name">Google Drive</div>
              <div className="cloud-provider-email">user@gmail.com</div>
            </div>
            <div className="cloud-provider-status connected" />
          </div>
          <div className="cloud-account-item">
            <div className="cloud-provider-icon" style={{ background: '#e8f5e9' }}>☁️</div>
            <div className="cloud-provider-info">
              <div className="cloud-provider-name">OneDrive</div>
              <div className="cloud-provider-email">user@outlook.com</div>
            </div>
            <div className="cloud-provider-status connected" />
          </div>
          <div className="cloud-account-item">
            <div className="cloud-provider-icon" style={{ background: '#e3f2fd' }}>📦</div>
            <div className="cloud-provider-info">
              <div className="cloud-provider-name">Dropbox</div>
              <div className="cloud-provider-name">user@dropbox.com</div>
            </div>
            <div className="cloud-provider-status connected" />
          </div>
        </div>

        <div className="sidebar-section" style={{ marginTop: 'auto', paddingBottom: 16 }}>
          <div className="divider" />
          <button
            className="btn btn-ghost"
            style={{ width: '100%', justifyContent: 'flex-start', gap: 10, color: 'var(--accent-light)' }}
            onClick={() => alert('+ Connect More Clouds')}
          >
            <span>+</span> Connect More Clouds
          </button>
        </div>
      </aside>

      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/')} title="Home">☁️</button>
          <div className="search-bar"><span className="search-icon">🔍</span>
            <input type="text" className="input" placeholder="Search files across all clouds..." onChange={e => console.log('search:', e.target.value)} />
          </div>
          <div className="topbar-actions"><button className="btn btn-ghost btn-icon" title="Grid view">⊞</button>
            <button className="btn btn-ghost btn-icon" title="Sort">↕️</button></div>
        </div>

        <div className="breadcrumb"><span className="breadcrumb-item current">Dashboard</span></div>

        <div className="file-browser">
          <div className="file-grid">
            <div className="file-item" onClick={() => navigate('/player?url=mock://f4&type=video/mp4&name=vacation.mp4')}>
              <div className="file-icon">🎬</div>
              <div className="file-name">vacation.mp4</div>
              <div className="file-meta">847 MB · 2024-12-28</div>
            </div>
            <div className="file-item" onClick={() => navigate('/player?url=mock://f5&type=image/jpeg&name=sunset_beach.jpg')}>
              <div className="file-icon">🖼️</div>
              <div className="file-name">sunset_beach.jpg</div>
              <div className="file-meta">4.2 MB · 2024-12-27</div>
            </div>
            <div className="file-item" onClick={() => navigate('/player?url=mock://f6&type=application/pdf&name=quarterly_report.pdf')}>
              <div className="file-icon">📄</div>
              <div className="file-name">quarterly_report.pdf</div>
              <div className="file-meta">2.1 MB · 2025-01-08</div>
            </div>
            <div className="file-item" onClick={() => navigate('/player?url=mock://f7&type=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&name=budget_2025.xlsx')}>
              <div className="file-icon">📊</div>
              <div className="file-name">budget_2025.xlsx</div>
              <div className="file-meta">156 KB · 2025-01-09</div>
            </div>
          </div>
        </div>

        <div className="status-bar">
          <div className="status-dot" /> <span>4 items</span>
          <span style={{ marginLeft: 'auto' }}>15 / 15 GB used</span>
        </div>
      </div>
    </div>
  );
}
