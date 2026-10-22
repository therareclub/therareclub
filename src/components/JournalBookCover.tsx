


import React from 'react';


const homeBook = '/assets/aistudio/home-book-cover.png';

interface JournalBookCoverProps {
  className?: string;
  showUploadTrigger?: boolean;
}

export const JournalBookCover: React.FC<JournalBookCoverProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`relative group w-full mx-auto animate-journal-float journal-shadow-glow ${className}`}
    >
      <img
        src={homeBook}
        alt="The 32-Day Focus Journal Cover"
        className="block w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        draggable={false}
      />
    </div>
  );
};

export default JournalBookCover;


