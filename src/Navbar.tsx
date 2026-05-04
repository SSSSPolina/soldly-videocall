import React from 'react';

const VideoIcon: React.FC = () => (
  <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="camGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6B2EFF"/>
        <stop offset="100%" stopColor="#C084FC"/>
      </linearGradient>
    </defs>
    <rect width="16" height="15" rx="3" fill="url(#camGrad)"/>
    <path d="M17 4L24 1.5V13.5L17 11Z" fill="url(#camGrad)"/>
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 flex items-center px-4 md:px-10 xl:px-20 2xl:px-32"
      style={{ height: 64 }}
    >
      <a href="/" className="flex items-center gap-2 select-none">
        {/* Soldly */}
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 22,
          fontWeight: 400,
          color: '#6B2EFF',
          letterSpacing: '-0.5px',
          lineHeight: 1,
        }}>
          Soldly
        </span>

        {/* Divider */}
        <span style={{ width: 1, height: 20, background: '#6B2EFF', opacity: 0.2, display: 'inline-block', flexShrink: 0 }} />

        {/* Video icon */}
        <VideoIcon />

        {/* meet */}
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 17,
          fontWeight: 300,
          color: '#6B2EFF',
          opacity: 0.6,
          letterSpacing: '-0.5px',
          lineHeight: 1,
        }}>
          meet
        </span>
      </a>
    </header>
  );
};

export default Navbar;
