import { useEffect, useRef } from 'react';

export const VideoPlayer: React.FC<{ stream?: MediaStream }> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        height: 'auto',
        aspectRatio: '16/9',
        backgroundColor: '#000',
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        margin: '20px auto',
        padding: '10px',
      }}
    >
      <video
        data-testid='peer-video'
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '16px',
          objectFit: 'cover',
        }}
        ref={videoRef}
        autoPlay
        muted
      />
    </div>
  );
};
