
import React from 'react';
import { LogoEmblem } from './Logo';

interface FounderPortraitProps {
  className?: string;
  aspectRatioClass?: string;
  showCaption?: boolean;
}

const founderImage = '/assets/aistudio/founder-profile.png';

export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  className = '',
  aspectRatioClass = 'aspect-[3/4.2]',
  showCaption = true,
}) => {
  return (
    <div
      className={`relative group w-full max-w-sm sm:max-w-md mx-auto ${className}`}
    >
      {/* Editorial Luxury Frame Container */}
      <div
        className={`relative w-full ${aspectRatioClass} rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C5A15A]/40 shadow-xl flex flex-col items-center justify-between text-center`}
      >
        {/* Static Founder Photograph */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={founderImage}
            alt="Prashant D. Thakare — Founder, The Rare Club"
            className="w-full h-full object-cover object-top filter drop-shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Subtle Luxury Gold Grain & Vignette */}
          <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-black/5 pointer-events-none" />

          {/* Fine Gold Inner Border */}
          <div className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border border-[#C5A15A]/25 pointer-events-none" />

          {/* Editorial Gradient Scrim */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#292824]/85 via-[#292824]/40 to-transparent pointer-events-none" />

          {/* Founder Information Plaque */}
          <div className="absolute bottom-4 inset-x-4 text-left pointer-events-none z-10 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-[0.26em] text-[#ECC876] uppercase font-bold">
                FOUNDER & EDUCATOR
              </div>

              <div className="font-editorial text-xl sm:text-2xl text-white font-normal leading-tight drop-shadow-md">
                Prashant D. Thakare
              </div>

              <div className="text-[11px] text-[#F7F4ED]/80 font-light">
                Assistant Professor · The Rare Club
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#292824]/80 border border-[#C5A15A]/60 flex items-center justify-center shrink-0">
              <LogoEmblem size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Founder Caption */}
      {showCaption && (
        <div className="pt-4 text-center space-y-1">
          <div className="font-cover text-base font-bold text-[#292824]">
            Prashant D. Thakare
          </div>

          <div className="text-xs uppercase tracking-wider text-[#C5A15A] font-medium">
            Assistant Professor | Founder, The Rare Club
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderPortrait;
