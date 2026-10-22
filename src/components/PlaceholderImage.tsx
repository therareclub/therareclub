import React, { useState, useRef } from 'react';
import { Image as ImageIcon, Upload, X } from 'lucide-react';

interface PlaceholderImageProps {
  label: string;
  sublabel?: string;
  aspectRatioClass?: string;
  defaultImageUrl?: string;
  allowLocalUpload?: boolean;
  className?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  label,
  sublabel = 'Placeholder · Ready for your real photograph',
  aspectRatioClass = 'aspect-[4/5]',
  defaultImageUrl,
  allowLocalUpload = true,
  className = '',
}) => {
  const [customImage, setCustomImage] = useState<string | null>(defaultImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div
      className={`relative w-full ${aspectRatioClass} rounded-2xl overflow-hidden border border-[#C5A15A]/30 bg-[#292824]/[0.03] shadow-xs flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:border-[#C5A15A]/60 ${className}`}
    >
      {customImage ? (
        <div className="relative w-full h-full">
          <img
            src={customImage}
            alt={label}
            className="w-full h-full object-cover rounded-xl"
            referrerPolicy="no-referrer"
          />
          {allowLocalUpload && (
            <button
              onClick={handleClear}
              type="button"
              className="absolute top-3 right-3 p-1.5 bg-[#292824]/80 text-white rounded-full hover:bg-[#292824] transition-colors"
              title="Remove preview image"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center max-w-sm">
          {/* Subtle architectural emblem */}
          <div className="w-14 h-14 rounded-full bg-[#E9E3D8]/60 border border-[#C5A15A]/40 flex items-center justify-center mb-4 text-[#C5A15A]">
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C5A15A] mb-1">
            Reserved Asset Space
          </span>
          <h4 className="text-base font-semibold text-[#292824] tracking-tight mb-2">
            {label}
          </h4>
          <p className="text-xs text-[#292824]/60 leading-relaxed mb-5">
            {sublabel}
          </p>

          {allowLocalUpload && (
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#292824] bg-white border border-[#E9E3D8] rounded-lg shadow-xs hover:bg-[#F7F4ED] hover:border-[#C5A15A] transition-all cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5 text-[#C5A15A]" />
                Preview Local Photo
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
