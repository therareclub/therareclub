import { ArrowRight, Compass, Target, LineChart, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { LogoEmblem } from '../components/Logo';
import { FounderPortrait } from '../components/FounderPortrait';
import { JournalBookCover } from '../components/JournalBookCover';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 lg:space-y-36 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12 lg:pt-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {/* Eyebrow: unboxed text with typographic separator (no pills) */}
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-medium text-[#C5A15A] animate-eyebrow">
            THE <span className="text-[#f6ce70] font-bold" style={{ color: '#f6ce70' }}>RARE</span> CLUB <span className="text-[#C5A15A]/40 mx-2">·</span> 32-DAY FOCUS JOURNAL
          </div>

          {/* Main Headline with deliberate line breaks */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292824] leading-[1.08] tracking-tight text-balance animate-title">
            When distraction is everywhere,
            <span className="block italic text-[#C5A15A] font-light mt-1 sm:mt-2">
              make your FOCUS a SUPERPOWER.
            </span>
          </h1>

          {/* Supporting line */}
          <p className="text-base sm:text-lg text-[#292824]/75 font-normal tracking-wide max-w-xl mx-auto pt-2 animate-subtitle">
            Build focus. Own your time. Become the rare one.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed">
            <button
              onClick={() => onNavigate('journal')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] active:scale-[0.99] rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Explore the Journal</span>
              <ArrowRight className="w-4 h-4 text-[#C5A15A] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('philosophy')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#292824] bg-white hover:bg-[#F7F4ED] border border-[#E9E3D8] hover:border-[#C5A15A] rounded-xl transition-all cursor-pointer"
            >
              Discover Our Philosophy
            </button>
          </div>

          {/* 3 Concise Benefits: Clean metadata with typographic separation */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-10 text-xs sm:text-sm text-[#292824]/80 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              <span>Understand your distractions.</span>
            </div>
            <span className="hidden sm:inline text-[#C5A15A]/40" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              <span>Practise focused work.</span>
            </div>
            <span className="hidden sm:inline text-[#C5A15A]/40" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15A]" />
              <span>Track your progress.</span>
            </div>
          </div>
        </div>

        {/* HERO PRODUCT SHOWCASE AREA */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/70 border border-[#E9E3D8] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Physical Journal Cover */}
              <div className="lg:col-span-7 flex justify-center">
                <JournalBookCover />
              </div>

              {/* Product Essence Story */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A15A]">
                  Physical Sanctuary
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#292824] leading-snug">
                  An analog tool designed for a digital storm.
                </h2>
                <p className="text-sm text-[#292824]/70 leading-relaxed">
                  Screen-based productivity tools often bring their own distractions. The 32-Day Focus Journal is a tangible, physical system built to create friction between you and unconscious impulse.
                </p>

                <div className="space-y-3.5 pt-2 text-xs text-[#292824]/85">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E9E3D8] text-[#292824] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-semibold">
                      01
                    </div>
                    <span>No notifications, battery drain, or popups to break your momentum.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E9E3D8] text-[#292824] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-semibold">
                      02
                    </div>
                    <span>32 daily guided tracking sheets with weekly reflection checkpoints.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E9E3D8] text-[#292824] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-semibold">
                      03
                    </div>
                    <span>Eight hands-on behavioural exercises to remodel study environments.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('journal')}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#292824] hover:text-[#C5A15A] transition-colors cursor-pointer"
                  >
                    <span>View all 5 stages of the journal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE FOUNDATIONAL PILLARS */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
            Core Framework
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#292824]">
            Discipline · Consistency · Control
          </h2>
          <p className="text-sm text-[#292824]/70">
            A guided behavioural progression rooted in deliberate practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/80 border border-[#E9E3D8] space-y-4 hover:border-[#C5A15A]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A]">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A15A]">
              Pillar 01
            </div>
            <h3 className="font-editorial text-2xl text-[#292824]">
              Discipline
            </h3>
            <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
              Moving past fleeting bursts of motivation. Real discipline is structural: creating an environment where deep work is natural and impulses are recognized before they hijack your time.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/80 border border-[#E9E3D8] space-y-4 hover:border-[#C5A15A]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A]">
              <LineChart className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A15A]">
              Pillar 02
            </div>
            <h3 className="font-editorial text-2xl text-[#292824]">
              Consistency
            </h3>
            <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
              Thirty-two consecutive days of gentle, honest accounting. Small daily daily boundary wins build psychological momentum far more reliably than extreme, unsustainable digital detoxes.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/80 border border-[#E9E3D8] space-y-4 hover:border-[#C5A15A]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A]">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A15A]">
              Pillar 03
            </div>
            <h3 className="font-editorial text-2xl text-[#292824]">
              Control
            </h3>
            <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
              The goal is never to abandon modern technology, but to reclaim agency over it. You dictate when the device serves your studies, rather than letting algorithms dictate your day.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FIVE-STAGE JOURNEY PREVIEW */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#292824] text-[#F7F4ED] relative overflow-hidden">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
              The 32-Day Journey
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F4ED] font-normal">
              Five stages. One journey. A stronger you.
            </h2>
            <p className="text-sm text-[#F7F4ED]/70 leading-relaxed">
              The journal is structured as five progressive levels, ensuring you never feel overwhelmed on Day 1 while building profound mastery by Day 32.
            </p>
          </div>

          {/* Connected Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
            {/* Stage 1 */}
            <div className="p-5 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#C5A15A] font-semibold">
                  <span>STAGE 01</span>
                  <span>DAY 01–07</span>
                </div>
                <h4 className="font-cover text-base font-bold text-[#F7F4ED] tracking-wide">
                  REBOOT MODE
                </h4>
                <div className="text-xs uppercase tracking-wider text-[#C5A15A]/80 font-medium">
                  Awareness
                </div>
                <p className="text-xs text-[#F7F4ED]/65 leading-relaxed pt-1">
                  Observe screen time, identify distractions and recognise triggers without judgment.
                </p>
              </div>
              <div className="pt-3 border-t border-[#444139] text-[11px] text-[#C5A15A]">
                Baseline Audit
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-5 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#C5A15A] font-semibold">
                  <span>STAGE 02</span>
                  <span>DAY 08–14</span>
                </div>
                <h4 className="font-cover text-base font-bold text-[#F7F4ED] tracking-wide">
                  FOCUS MODE
                </h4>
                <div className="text-xs uppercase tracking-wider text-[#C5A15A]/80 font-medium">
                  Control
                </div>
                <p className="text-xs text-[#F7F4ED]/65 leading-relaxed pt-1">
                  Practise a morning phone boundary and distraction-free focus sessions.
                </p>
              </div>
              <div className="pt-3 border-t border-[#444139] text-[11px] text-[#C5A15A]">
                First Milestone Badge
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-5 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#C5A15A] font-semibold">
                  <span>STAGE 03</span>
                  <span>DAY 15–21</span>
                </div>
                <h4 className="font-cover text-base font-bold text-[#F7F4ED] tracking-wide">
                  DEEP MODE
                </h4>
                <div className="text-xs uppercase tracking-wider text-[#C5A15A]/80 font-medium">
                  Strength
                </div>
                <p className="text-xs text-[#F7F4ED]/65 leading-relaxed pt-1">
                  Gradually extend focused work and strengthen sustained attention.
                </p>
              </div>
              <div className="pt-3 border-t border-[#444139] text-[11px] text-[#C5A15A]">
                Deep Work Blocks
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-5 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#C5A15A] font-semibold">
                  <span>STAGE 04</span>
                  <span>DAY 22–28</span>
                </div>
                <h4 className="font-cover text-base font-bold text-[#F7F4ED] tracking-wide">
                  MONK MODE
                </h4>
                <div className="text-xs uppercase tracking-wider text-[#C5A15A]/80 font-medium">
                  Discipline
                </div>
                <p className="text-xs text-[#F7F4ED]/65 leading-relaxed pt-1">
                  Follow planned priorities, protect focused time and practise phone-free meals.
                </p>
              </div>
              <div className="pt-3 border-t border-[#444139] text-[11px] text-[#C5A15A]">
                Intentional Friction
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-5 rounded-2xl bg-[#33312B] border border-[#C5A15A]/40 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#C5A15A] font-semibold">
                  <span>STAGE 05</span>
                  <span>DAY 29–32</span>
                </div>
                <h4 className="font-cover text-base font-bold text-[#F7F4ED] tracking-wide">
                  FINAL STREAK
                </h4>
                <div className="text-xs uppercase tracking-wider text-[#C5A15A] font-medium">
                  Mastery
                </div>
                <p className="text-xs text-[#F7F4ED]/65 leading-relaxed pt-1">
                  Bring the practices together, complete final challenges and create a continuation plan.
                </p>
              </div>
              <div className="pt-3 border-t border-[#444139] text-[11px] text-[#C5A15A] font-medium">
                The Rare Identity
              </div>
            </div>
          </div>

          {/* Progress Arrow indicator */}
          <div className="mt-8 pt-6 border-t border-[#444139] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#C5A15A] font-medium tracking-wide">
              <span>Awareness</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Control</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Strength</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Discipline</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Mastery</span>
            </div>

            <button
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-white hover:text-[#C5A15A] transition-colors cursor-pointer"
            >
              <span>Explore Stage Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. GENUINE TESTIMONIALS PREVIEW */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
              Authentic Voices
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#292824]">
              The Journey Told by Them
            </h2>
            <p className="text-sm text-[#292824]/70 max-w-xl">
              Real reflections from students who replaced passive scrolling with intentional focus and self-discipline.
            </p>
          </div>

          <button
            onClick={() => onNavigate('stories')}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#292824] hover:text-[#C5A15A] transition-colors cursor-pointer"
          >
            <span>Read all student stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#E9E3D8] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#C5A15A]/40 transition-colors">
            <div className="space-y-4">
              <div className="font-editorial text-2xl text-[#C5A15A] italic">“</div>
              <div className="text-sm text-[#292824]/85 leading-relaxed italic space-y-2.5">
                <p>
                  “I used to spend 10–11 hours a day on my screen, constantly procrastinating and struggling to manage my time. When I started the 32-Day Focus Journal, even the goals felt impossible to achieve. But its step-by-step approach, personal reflection questions, colouring activities, and daily challenges made the journey surprisingly engaging.
                </p>
                <p>
                  By the second week, I could already feel the difference. Managing my tasks became easier, and my screen time dropped to just 1–2 hours a day!
                </p>
                <p>
                  This journey taught me that even the hardest habits can change with the right system and consistency. What once felt impossible became my reality.”
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E9E3D8] flex items-center gap-3">
              <img
                src="/assets/aistudio/vaidehi.webp"
                alt="Vaidehi"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A15A]/50 shadow-xs shrink-0"
              />
              <div>
                <div className="text-xs font-bold text-[#292824]">Vaidehi</div>
                <div className="text-[11px] text-[#292824]/60">MBA student, Nagpur</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E9E3D8] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#C5A15A]/40 transition-colors">
            <div className="space-y-4">
              <div className="font-editorial text-2xl text-[#C5A15A] italic">“</div>
              <div className="text-sm text-[#292824]/85 leading-relaxed italic space-y-2.5">
                <p>
                  “I’ve been using the 32-Day Focus Journal for the past 8 days, and it’s already helping me improve my study time and reduce my screen time.
                </p>
                <p>
                  Tracking my useful hours has made me more aware of how I spend my time, and I now feel that I’m making better use of my day. The best part is that I’m motivated to keep improving and increase my useful hours every day.
                </p>
                <p>
                  This journey is helping me become more focused, disciplined, and intentional with my time. I’m excited to see how much more I can achieve by the end of 32 days! 😊🙌”
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E9E3D8] flex items-center gap-3">
              <img
                src="/assets/aistudio/nikita.webp"
                alt="Nikita"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A15A]/50 shadow-xs shrink-0"
              />
              <div>
                <div className="text-xs font-bold text-[#292824]">Nikita</div>
                <div className="text-[11px] text-[#292824]/60">MBA Student, Pune University</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E9E3D8] space-y-6 flex flex-col justify-between shadow-xs hover:border-[#C5A15A]/40 transition-colors">
            <div className="space-y-4">
              <div className="font-editorial text-2xl text-[#C5A15A] italic">“</div>
              <div className="text-sm text-[#292824]/85 leading-relaxed italic space-y-2.5">
                <p>
                  “For me, the 32-Day Focus Journal has become much more than a journal—it’s a way to stay disciplined and take ownership of my day. I’ve developed the habit of setting clear goals every morning and reviewing them at night. This simple routine helps me recognise where I did well, where I fell short, and what I can improve tomorrow.
                </p>
                <p>
                  Over time, I’ve become more accountable to myself and more mindful of how I use my time. What I value most is that it doesn’t just help me plan my day; it helps me understand my own actions and grow through them.”
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E9E3D8] flex items-center gap-3">
              <img
                src="/assets/aistudio/niraj.webp"
                alt="Neeraj P."
                className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A15A]/50 shadow-xs shrink-0"
              />
              <div>
                <div className="text-xs font-bold text-[#292824]">Neeraj P.</div>
                <div className="text-[11px] text-[#292824]/60">Businessman & Youtuber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHORT FOUNDER-STORY PREVIEW */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-[#E9E3D8] p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Founder Photo */}
            <div className="lg:col-span-5">
              <FounderPortrait aspectRatioClass="aspect-[4/5]" showCaption={false} />
            </div>

            {/* Founder Note Story */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
                Founder's Perspective
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#292824] leading-tight">
                “In a distracted world, be the one who can focus.”
              </h2>
              <div className="space-y-4 text-sm text-[#292824]/75 leading-relaxed">
                <p>
                  As an Assistant Professor, I stand before bright, ambitious students every day. Over recent years, I watched a silent crisis unfold: students didn't lack intellect or drive—they were simply exhausted from fighting an asymmetric war for their attention against pocket-sized supercomputers.
                </p>
                <p>
                  During the COVID lockdowns, I experienced that same friction firsthand. Endless screen loops fractured my own days until I returned to paper: recording my impulses, restructuring my environment, and building a 32-day rhythm. That personal journey became the foundation of The Rare Club in October 2025.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] text-xs sm:text-sm font-medium text-[#292824] italic">
                “Lasting change needs more than motivation. It needs a system.”
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-cover text-sm font-bold text-[#292824]">
                    Prashant D. Thakare
                  </div>
                  <div className="text-xs text-[#292824]/60">
                    Assistant Professor | Founder, The Rare Club
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('my-story')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#292824] bg-white border border-[#E9E3D8] hover:border-[#C5A15A] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A15A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <LogoEmblem size={44} />
        </div>
        <h2 className="font-editorial text-4xl sm:text-6xl text-[#292824] leading-tight text-balance">
          Ready to become the one who controls their attention?
        </h2>
        <p className="text-sm sm:text-base text-[#292824]/70 max-w-xl mx-auto leading-relaxed">
          Join students, educators, and cohorts taking back their time, rebuilding sustained discipline, and becoming truly rare.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('journal')}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore The 32-Day Journal</span>
            <ArrowRight className="w-4 h-4 text-[#C5A15A]" />
          </button>

          <button
            onClick={() => onNavigate('connect')}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#292824] bg-white hover:bg-[#F7F4ED] border border-[#E9E3D8] hover:border-[#C5A15A] rounded-xl transition-all cursor-pointer"
          >
            Connect With Us
          </button>
        </div>
      </section>
    </div>
  );
};
