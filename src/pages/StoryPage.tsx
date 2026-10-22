import { ArrowRight, Youtube } from 'lucide-react';
import { PageRoute } from '../types';
import { FounderPortrait } from '../components/FounderPortrait';

interface StoryPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 lg:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.28em] font-medium text-[#C5A15A] animate-eyebrow">
          FOUNDER'S NOTE
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292824] leading-[1.08] text-balance animate-title">
          “In a distracted world,
          <span className="block italic text-[#C5A15A] font-light mt-1">
            be the one who can focus.”
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#292824]/75 font-normal max-w-2xl mx-auto animate-subtitle">
          A simple reflection from an Assistant Professor on why focusing is so hard today, and how The Rare Club was started.
        </p>
      </section>

      {/* 2. FOUNDER PORTRAIT & EMBEDDED VIDEO ROW */}
      <section className="px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Founder Portrait */}
          <div className="lg:col-span-5">
            <FounderPortrait aspectRatioClass="aspect-[4/5]" showCaption={true} />
          </div>

          {/* Embedded YouTube Video Feature */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#E9E3D8] bg-[#292824] shadow-md">
              <iframe
                src="https://www.youtube.com/embed/ouxj1yPmZkE"
                title="The Rare Club — Featured Video by Prashant D. Thakare"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[#292824]/70 px-1">
              <div className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-600" />
                <span className="font-medium text-[#292824]">Featured Video: The Rare Club</span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=ouxj1yPmZkE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A15A] hover:underline font-medium"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER'S AUTHENTIC ESSAY */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto">
        <article className="prose prose-stone max-w-none text-base sm:text-lg text-[#292824]/85 leading-relaxed space-y-8">
          {/* Paragraph 1: Experience as an Assistant Professor */}
          <p>
            For many years as an Assistant Professor (a college teacher), I have stood in front of classrooms full of bright, smart students. These are young students with big dreams, great ideas, and creative minds. But in recent years, I noticed a quiet, tiring problem making their school life harder.
          </p>

          <p>
            Students would come to class looking tired. They found it hard to stay focused on a single math equation, a book chapter, or a lecture for more than ten minutes. It was not because they were lazy. It was not because they lacked ambition. They were fighting an unfair battle: their growing brain was trying to focus while multi-billion dollar apps on their phones were designed to steal their attention and keep them hooked.
          </p>

          {/* Paragraph 2: Personal struggle during COVID */}
          <div className="p-8 rounded-3xl bg-white border border-[#E9E3D8] my-8 shadow-xs">
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#292824] mb-3">
              The Turning Point: COVID Lockdowns
            </h3>
            <p className="text-sm sm:text-base text-[#292824]/80 leading-relaxed mb-4">
              I did not just watch this happen to other people. During the COVID lockdowns, when all our classes and work moved behind glowing computer screens, I fell into the very same trap. Hours slipped away as I kept checking news, scrolling updates, and opening notifications without even thinking. At the end of every day, I felt completely drained and had finished none of my important work.
            </p>
            <p className="text-sm sm:text-base text-[#292824]/80 leading-relaxed">
              I soon learned that reading productivity books or waiting to "feel motivated" never works against a bad phone habit. I needed to change my whole approach.
            </p>
          </div>

          {/* Paragraph 3: How recording, planning and reviewing helped */}
          <p>
            I put away digital tracking apps and picked up a simple paper notebook. I made three clear, easy rules for myself:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-[#292824]/80">
            <li>
              <strong>Write it down:</strong> Whenever I felt the sudden urge to pick up my phone, I stopped and wrote down that urge in ink on paper instead of picking up the phone.
            </li>
            <li>
              <strong>Plan on paper first:</strong> Every morning, I wrote down my single most important study task in my notebook before touching any phone or computer screen.
            </li>
            <li>
              <strong>Review honestly:</strong> At the end of every day and every week, I checked my page without feeling guilty, just to see what distracted me and how to do better tomorrow.
            </li>
          </ul>

          {/* Key Quote Highlight */}
          <div className="p-8 my-8 rounded-2xl bg-[#292824] text-[#F7F4ED] text-center space-y-2">
            <div className="font-editorial text-2xl sm:text-3xl text-[#F7F4ED] italic">
              “Real change does not come from motivation alone. It comes from having a daily system.”
            </div>
          </div>

          {/* Paragraph 4: Developing the Journal in October 2025 */}
          <p>
            In <strong>October 2025</strong>, after testing this method on myself for months, I turned it into a real, physical workbook for students: <strong>The 32-Day Focus Journal</strong>.
          </p>

          <p>
            I chose 32 days not as a magical trick, but as a realistic time to practice a new habit every day. It has five simple steps—starting from noticing your phone habits, to setting clear morning rules, and building strong, quiet study hours.
          </p>

          {/* Paragraph 5: Why helping students reclaim attention matters */}
          <p>
            Why does this matter so much to me? Because your attention is the most valuable thing you own. Anything great you want to achieve in life—passing an important exam, solving a hard problem, learning a new subject, or building your dreams—needs your full focus. When you learn to protect your attention, you take control of your own future.
          </p>

          {/* Closing Statement */}
          <div className="pt-8 border-t border-[#E9E3D8] space-y-6">
            <div className="font-editorial text-2xl sm:text-3xl text-[#292824] italic font-medium">
              “Focus is a skill. Discipline is a choice. Becoming <span className="font-bold tracking-wide text-[#f6ce70]" style={{ color: '#f6ce70' }}>RARE</span> is a journey.”
            </div>

            {/* Formal Signature */}
            <div className="pt-4 space-y-1">
              <div className="font-cover text-lg font-bold text-[#292824]">
                Prashant D. Thakare
              </div>
              <div className="text-xs uppercase tracking-wider text-[#C5A15A] font-semibold">
                Assistant Professor | Founder, The Rare Club
              </div>
            </div>
          </div>
        </article>

        {/* Next step CTA */}
        <div className="mt-16 pt-8 border-t border-[#E9E3D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#292824]/70">
            Learn more about the curriculum inspired by this story.
          </div>
          <button
            onClick={() => onNavigate('journal')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] rounded-xl transition-all cursor-pointer"
          >
            <span>Explore The 32-Day Focus Journal</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A15A]" />
          </button>
        </div>
      </section>
    </div>
  );
};
