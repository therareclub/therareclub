import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textClassName?: string;
}

export const LogoEmblem: React.FC<{ size?: number | string; className?: string }> = ({
  size = 36,
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      aria-label="The Rare Club Emblem"
    >
      {/* Outer gold-rimmed dark disc */}
      <circle cx="250" cy="250" r="238" fill="#222425" stroke="#E6C36E" strokeWidth="12" />
      {/* Subtle inner concentric ring */}
      <circle
        cx="250"
        cy="250"
        r="210"
        fill="none"
        stroke="#E6C36E"
        strokeWidth="2.5"
        strokeOpacity="0.4"
      />
      {/* Golden upward zenith arrow */}
      <path d="M 250 174 L 313 298 Q 250 276 187 298 Z" fill="#E6C36E" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 36,
  showText = true,
  textClassName = '',
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoEmblem size={size} />
      {showText && (
        <span
          className={`font-cover font-bold tracking-[0.22em] text-[#292824] uppercase whitespace-nowrap ${textClassName}`}
        >
          THE <span className="text-[#f6ce70]" style={{ color: '#f6ce70' }}>RARE</span> CLUB
        </span>
      )}
    </div>
  );
};
