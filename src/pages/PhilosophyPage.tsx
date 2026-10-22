import React from 'react';
import { ArrowRight, Eye, Shield, Compass, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface PhilosophyPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 lg:space-y-36 pb-24">
      {/* 1. EDITORIAL HERO */}
      <section className="pt-12 sm:pt-20 lg:pt-24 px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.28em] font-medium text-[#C5A15A] animate-eyebrow">
          OUR PHILOSOPHY
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292824] leading-[1.1] text-balance animate-title">
          “You don't lack ambition.
          <span className="block italic text-[#C5A15A] font-light mt-1">
            You're fighting for your attention.”
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#292824]/75 font-normal leading-relaxed max-w-3xl mx-auto pt-2 animate-subtitle">
          Modern students are capable of extraordinary intellectual work. But when the environment encourages constant distraction, protecting attention becomes harder. Awareness is the first step towards reclaiming your time.
        </p>

        {/* Brand Principles Display */}
        <div className="pt-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-white border border-[#E9E3D8] text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#292824] uppercase shadow-xs">
            <span>Discipline</span>
            <span className="text-[#C5A15A]">·</span>
            <span>Consistency</span>
            <span className="text-[#C5A15A]">·</span>
            <span>Control</span>
          </div>
        </div>
      </section>

      {/* 2. THREE EDITORIAL CHAPTERS */}
      <section className="px-6 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* CHAPTER 01 */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#E9E3D8] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A15A]">
                CHAPTER 01 — THE DISTRACTION
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#292824]">
                The Friction of Unconscious Reach
              </h3>
              <p className="text-xs text-[#292824]/60">
                Understanding the mechanics of modern interruption.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#292824]/80 leading-relaxed">
              <p>
                When a difficult study problem appears or a moment of boredom sets in, your hand unconsciously reaches for your phone. It happens without deliberate consent. Notifications, algorithmic feeds, and endless refresh loops take advantage of this momentary discomfort.
              </p>
              
              {/* Cue -> Routine -> Outcome explanation box */}
              <div className="p-6 rounded-2xl bg-[#F7F4ED] border border-[#E9E3D8] space-y-4">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#292824]">
                  The Unconscious Loop
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-[#E9E3D8]">
                    <div className="font-bold text-[#C5A15A] mb-1">01. CUE</div>
                    <div className="text-[#292824]/75">Boredom, difficult homework task, ping, or fatigue.</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#E9E3D8]">
                    <div className="font-bold text-[#C5A15A] mb-1">02. ROUTINE</div>
                    <div className="text-[#292824]/75">Unconscious reach, screen unlock, scrolling feed.</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#E9E3D8]">
                    <div className="font-bold text-[#C5A15A] mb-1">03. OUTCOME</div>
                    <div className="text-[#292824]/75">Temporary relief followed by lost time and guilt.</div>
                  </div>
                </div>
                <p className="text-xs text-[#292824]/70 pt-1">
                  The solution isn't self-loathing. The solution is practical friction: keeping phones in another room, recording impulses in ink without self-judgment, and noticing the urge before taking action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER 02 */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#E9E3D8] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A15A]">
                CHAPTER 02 — THE DECISION
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#292824]">
                Shift from Willpower to Environment Design
              </h3>
              <p className="text-xs text-[#292824]/60">
                Why relying solely on motivation is a losing battle.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#292824]/80 leading-relaxed">
              <p>
                Willpower is a finite cognitive resource that depletes as your study day progresses. If you must actively resist looking at an illuminated screen lying right beside your textbook every ten seconds, your cognitive reserves burn out before you solve complex academic problems.
              </p>

              <div className="p-6 rounded-2xl bg-[#F7F4ED] border border-[#E9E3D8] space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#292824]">
                  The Power of Physical Planning
                </div>
                <p className="text-xs sm:text-sm text-[#292824]/75 leading-relaxed">
                  When you plan on paper, your workspace becomes an intentional sanctuary. By modifying your physical desk—placing your phone out of arm's reach and defining explicit focus blocks before opening any device—focused work becomes significantly easier to initiate and protect.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER 03 */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#E9E3D8] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A15A]">
                CHAPTER 03 — THE DISCIPLINE
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#292824]">
                Where Discipline Becomes Identity
              </h3>
              <p className="text-xs text-[#292824]/60">
                Transforming deliberate practice into genuine character.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#292824]/80 leading-relaxed">
              <p>
                True transformation doesn't happen through extreme weekend purges. It happens through small, repeated actions verified day after day. As you log your hours, reflect on slip-ups without self-criticism, and keep daily agreements with yourself, your perception of your own capability evolves.
              </p>

              {/* IDENTITY STATEMENT CALLOUT */}
              <div className="p-8 rounded-2xl bg-[#292824] text-[#F7F4ED] text-center space-y-3 shadow-md">
                <div className="text-xs uppercase tracking-[0.25em] text-[#C5A15A] font-semibold">
                  The Core Identity Statement
                </div>
                <div className="font-editorial text-2xl sm:text-3xl text-white italic font-normal">
                  “I am someone who takes ownership of my attention.”
                </div>
                <p className="text-xs text-[#F7F4ED]/60 max-w-md mx-auto">
                  When this identity solidifies, discipline ceases to feel like constant punishment; it becomes self-respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GROUNDED IN BEHAVIOURAL SCIENCE */}
      <section className="px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#E9E3D8]/50 border border-[#E9E3D8] space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
              Scientific Foundation
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#292824]">
              Grounded in Behavioural Science
            </h2>
            <p className="text-sm sm:text-base text-[#292824]/75 leading-relaxed">
              We base our guidance strictly on validated behavioural principles, avoiding hype, quick-fix claims, or pseudo-scientific guarantees. The 32-day timeline is designed as a guided deliberate practice period, giving students enough time to encounter, analyze, and rebuild their study environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E9E3D8] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] flex items-center justify-center text-[#C5A15A]">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-base text-[#292824]">
                Task-Switching Costs
              </h4>
              <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
                Cognitive research demonstrates that glancing at a phone for just five seconds leaves an "attention residue" that impairs deep problem-solving for many minutes afterward. Protecting uninterrupted blocks preserves cognitive bandwidth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9E3D8] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] flex items-center justify-center text-[#C5A15A]">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-base text-[#292824]">
                Habit Cues & Context Architecture
              </h4>
              <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
                Behaviors are heavily bound to environmental cues. By designating a dedicated physical study station free from device clutter, your nervous system associates that space directly with focused cognitive output.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9E3D8] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] flex items-center justify-center text-[#C5A15A]">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-base text-[#292824]">
                Environmental Friction
              </h4>
              <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
                Increasing the physical distance between you and a distraction by just ten steps or placing devices behind a closed drawer introduces the critical micro-second delay needed for conscious impulse inhibition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9E3D8] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] flex items-center justify-center text-[#C5A15A]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-base text-[#292824]">
                Reflective Metacognition
              </h4>
              <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
                Reviewing daily progress in writing encourages metacognition—the ability to monitor and regulate one's own learning processes. You become an active researcher of your own attention rather than a passive victim of distraction.
              </p>
            </div>
          </div>

          {/* Honest Scientific Boundaries Note */}
          <div className="p-4 rounded-xl bg-white/70 border border-[#E9E3D8] text-xs text-[#292824]/65">
            <strong>Scientific Note:</strong> The Rare Club does not make speculative claims regarding guaranteed permanent habit formation or neurological cures. Habit formation timelines vary widely based on individual contexts and task complexity. 32 days represents a structured pedagogical curriculum designed for deliberate practice.
          </div>
        </div>
      </section>

      {/* 4. VISUAL CTA LEADING TO JOURNAL */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto text-center space-y-6">
        <h3 className="font-editorial text-3xl sm:text-5xl text-[#292824]">
          Turn philosophy into daily practice.
        </h3>
        <p className="text-sm text-[#292824]/70 max-w-xl mx-auto leading-relaxed">
          The 32-Day Focus Journal translates these behavioural principles into a tangible, physical roadmap designed for students.
        </p>
        <div>
          <button
            onClick={() => onNavigate('journal')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <span>Explore The 32-Day Focus Journal</span>
            <ArrowRight className="w-4 h-4 text-[#C5A15A]" />
          </button>
        </div>
      </section>
    </div>
  );
};
