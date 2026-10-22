
import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export interface GallerySectionConfig {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  aspectRatioClass?: string;
  accentColor?: string;
}

interface MultiPhotoGallerySectionProps {
  config: GallerySectionConfig;
  className?: string;
}

// Static gallery images.
// Place these files in public/assets/aistudio/gallery/.
const STATIC_GALLERY_IMAGES: Record<string, string[]> = {
  'daily-audit': [
    '/assets/aistudio/interior/interior-one.png',
    '/assets/aistudio/interior/interior-two.png',
  ],
  'weekly-reset': [
    '/assets/aistudio/weekly/weekly-one.png',
    '/assets/aistudio/weekly/weekly-two.png',
  ],
  activities: [
    '/assets/aistudio/behavioural/one.png',
    '/assets/aistudio/behavioural/two.png',
    '/assets/aistudio/behavioural/three.png',
    '/assets/aistudio/behavioural/four.png',
  ],
  badges: [
    '/assets/aistudio/badges/gold-one.webp',
    '/assets/aistudio/badges/silver-two.webp',
    '/assets/aistudio/badges/bronze-three.webp',

  ],
  bookmark: [
    '/assets/aistudio/bookmark/bookmark.png',
  ],
};

export const MultiPhotoGallerySection: React.FC<
  MultiPhotoGallerySectionProps
> = ({ config, className = '' }) => {
  const images = STATIC_GALLERY_IMAGES[config.id] ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState<
    'next' | 'prev' | null
  >(null);

  const activePhoto = images[activeIndex] ?? null;

  const handleFlipNext = () => {
    if (images.length <= 1 || isFlipping) return;

    setIsFlipping('next');

    window.setTimeout(() => {
      setActiveIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

      window.setTimeout(() => setIsFlipping(null), 250);
    }, 120);
  };

  const handleFlipPrev = () => {
    if (images.length <= 1 || isFlipping) return;

    setIsFlipping('prev');

    window.setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );

      window.setTimeout(() => setIsFlipping(null), 250);
    }, 120);
  };

  return (
    <div
      className={`bg-white rounded-3xl border border-[#E9E3D8] overflow-hidden shadow-xs hover:border-[#C5A15A]/40 transition-all ${className}`}
    >
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Static Image Gallery */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {activePhoto ? (
              <div className="relative group rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E9E3D8] shadow-sm">
                <div
                  className={`relative w-full ${config.aspectRatioClass || 'aspect-[4/3]'
                    } flex items-center justify-center overflow-hidden transition-all duration-300 ${isFlipping === 'next'
                      ? 'animate-book-flip-next'
                      : isFlipping === 'prev'
                        ? 'animate-book-flip-prev'
                        : ''
                    }`}
                  style={{ perspective: '1400px' }}
                >
                  <img
                    src={activePhoto}
                    alt={`${config.title} - page ${activeIndex + 1}`}
                    className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  {/* Page-edge shadow */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/10 via-black/3 to-transparent pointer-events-none" />

                  {/* Top image controls */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <span className="px-2.5 py-1 text-[11px] font-semibold text-white bg-[#292824]/85 backdrop-blur-xs rounded-lg">
                      Page {activeIndex + 1} of {images.length}
                    </span>

                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      className="p-1.5 text-white bg-[#292824]/85 hover:bg-[#292824] rounded-lg cursor-pointer transition-colors"
                      title="Enlarge photo"
                      aria-label="Enlarge photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A15A]" />
                    </button>
                  </div>

                  {/* Next page */}
                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={handleFlipNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pl-3.5 pr-2.5 sm:pl-4 sm:pr-3 py-3 sm:py-3.5 rounded-l-2xl bg-[#292824]/92 hover:bg-[#292824] text-[#F7F4ED] border-y border-l border-[#C5A15A]/70 hover:border-[#f6ce70] shadow-[0_8px_25px_-4px_rgba(0,0,0,0.4)] backdrop-blur-md flex items-center gap-2 group/flip cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                      title="Flip to next page"
                      aria-label="Flip to next page"
                    >
                      <div className="text-left hidden sm:block">
                        <div className="text-[9px] uppercase tracking-[0.22em] text-[#f6ce70] font-bold">
                          FLIP PAGE
                        </div>
                        <div className="text-[11px] text-[#F7F4ED]/80 font-medium whitespace-nowrap">
                          Page {((activeIndex + 1) % images.length) + 1} of {images.length}
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-[#3D3A34] border border-[#C5A15A]/60 flex items-center justify-center text-[#f6ce70] group-hover/flip:bg-[#C5A15A] group-hover/flip:text-[#292824] transition-colors shrink-0">
                        <ChevronRight className="w-4 h-4 group-hover/flip:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  )}

                  {/* Previous page */}
                  {images.length > 1 && activeIndex > 0 && (
                    <button
                      type="button"
                      onClick={handleFlipPrev}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pr-3.5 pl-2.5 sm:pr-4 sm:pl-3 py-3 sm:py-3.5 rounded-r-2xl bg-[#292824]/92 hover:bg-[#292824] text-[#F7F4ED] border-y border-r border-[#C5A15A]/70 hover:border-[#f6ce70] shadow-[0_8px_25px_-4px_rgba(0,0,0,0.4)] backdrop-blur-md flex items-center gap-2 group/prev cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                      title="Flip to previous page"
                      aria-label="Flip to previous page"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#3D3A34] border border-[#C5A15A]/60 flex items-center justify-center text-[#f6ce70] group-hover/prev:bg-[#C5A15A] group-hover/prev:text-[#292824] transition-colors shrink-0">
                        <ChevronLeft className="w-4 h-4 group-hover/prev:-translate-x-0.5 transition-transform" />
                      </div>

                      <div className="text-left hidden sm:block">
                        <div className="text-[9px] uppercase tracking-[0.22em] text-[#f6ce70] font-bold">
                          PREV PAGE
                        </div>
                        <div className="text-[11px] text-[#F7F4ED]/80 font-medium whitespace-nowrap">
                          Page {activeIndex} of {images.length}
                        </div>
                      </div>
                    </button>
                  )}

                  {/* Page indicator */}
                  {images.length > 1 && (
                    <div className="absolute bottom-2.5 inset-x-0 flex justify-center items-center pointer-events-none z-10">
                      <div className="px-3 py-1 rounded-full bg-[#292824]/85 backdrop-blur-xs border border-[#C5A15A]/35 text-[10px] text-white/90 flex items-center gap-1.5 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f6ce70] animate-pulse" />
                        <span>
                          Page {activeIndex + 1} of {images.length}
                        </span>
                        <span className="text-[#C5A15A]/60">·</span>
                        <span className="text-[#f6ce70]">
                          Click right tab to flip
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                className={`relative w-full ${config.aspectRatioClass || 'aspect-[4/3]'
                  } rounded-2xl border border-[#E9E3D8] bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A] shadow-xs mb-3">
                  <Layers className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div className="font-cover text-sm font-bold text-[#292824] mb-1">
                  {config.title}
                </div>
                <p className="text-xs text-[#292824]/65 max-w-xs">
                  No static images configured for this section.
                </p>
              </div>
            )}

            {/* Static image thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {images.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View page ${idx + 1}`}
                    aria-pressed={activeIndex === idx}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${activeIndex === idx
                      ? 'border-[#C5A15A] shadow-sm scale-105'
                      : 'border-[#E9E3D8] opacity-75 hover:opacity-100 hover:border-[#C5A15A]/40'
                      }`}
                  >
                    <img
                      src={img}
                      alt={`${config.title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Editorial Content & Physical Specifications */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#C5A15A]">
                {config.tag}
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#292824] leading-snug">
              {config.title}
            </h3>

            <p className="text-xs uppercase tracking-wider text-[#C5A15A] font-semibold">
              {config.subtitle}
            </p>

            <p className="text-sm text-[#292824]/75 leading-relaxed">
              {config.description}
            </p>

            {/* Specifications */}
            <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#E9E3D8] space-y-2.5">
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#292824] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C5A15A]" />
                <span>Physical Specifications & Details</span>
              </div>

              <ul className="space-y-1.5">
                {config.specs.map((spec, index) => (
                  <li
                    key={index}
                    className="text-xs text-[#292824]/80 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15A] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Static gallery status */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#292824] bg-[#F7F4ED] border border-[#E9E3D8] rounded-xl">
                <Layers className="w-3.5 h-3.5 text-[#C5A15A]" />
                {images.length} {images.length === 1 ? 'Page' : 'Pages'}
              </span>
              <span className="text-xs text-[#292824]/60 font-medium">
                Static gallery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#C5A15A] cursor-pointer"
              aria-label="Close enlarged image"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activePhoto}
              alt={config.title}
              className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl"
            />

            <div className="pt-3 text-center text-xs text-white/80 font-medium">
              {config.title} · Page {activeIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiPhotoGallerySection;
