import { useNavigate, useSearchParams } from 'react-router-dom';

export default function MediaPlayer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url') || '';
  const type = searchParams.get('type') || 'video';
  const name = searchParams.get('name') || 'Media File';

  const isVideo = type === 'video' || type === 'video/mp4';
  const isAudio = type === 'audio' || type === 'audio/mpeg';
  const isImage = type === 'image' || type === 'image/jpeg' || type === 'image/png';

  const getIcon = (t: string) => {
    if (t.includes('video')) return '🎬';
    if (t.includes('audio')) return '🎵';
    if (t.includes('image')) return '🖼️';
    return '📎';
  };

  return (
    <div className="player-page">
      <div className="player-topbar">
        <button className="player-back" onClick={() => navigate('/dashboard')} title="Back to Dashboard">
          ←
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="player-filename">{name}</div>
          <div className="player-source">{isVideo ? 'Video' : isAudio ? 'Audio' : isImage ? 'Image' : 'File'}</div>
        </div>
        <button className="ctrl-btn" title="Share link">🔗</button>
        <button className="ctrl-btn" title="Download">⬇</button>
      </div>

      <div className="player-viewport">
        {isVideo && (
          <video
            className="player-media"
            src={url && !url.startsWith('mock://') ? url : `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
            controls
            autoPlay
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
          />
        )}

        {isAudio && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{ fontSize: '5rem', marginBottom: 20 }}>{getIcon(type)}</div>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>{name}</p>
            <audio
              src={url && !url.startsWith('mock://') ? url : `https://samplelib.com/lib/previews/mp3/sample.mp3`}
              controls
              autoPlay
              style={{ marginTop: 20, width: '80%' }}
            />
          </div>
        )}

        {isImage && (
          <img
            className="player-image"
            src={url && !url.startsWith('mock://') ? url : 'https://picsum.photos/1280/720'}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
          />
        )}

        {!isVideo && !isAudio && !isImage && (
          <div className="player-placeholder" style={{ textAlign: 'center', padding: 60 }}>
            <div className="player-placeholder-icon" style={{ fontSize: '4rem', marginBottom: 16 }}>{getIcon(type)}</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>{name}</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
