import React from 'react';

const Snowfall: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-60 animate-fall"
          style={{
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            top: -20 + 'px',
            left: Math.random() * 100 + 'vw',
            animationDuration: Math.random() * 10 + 5 + 's',
            animationDelay: Math.random() * 5 + 's',
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-20px) translateX(0px) rotate(0deg); opacity: 0.8; }
          100% { transform: translateY(100vh) translateX(20px) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default Snowfall;