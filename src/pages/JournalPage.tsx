import React, { useState } from 'react';
import { Check, ArrowRight, Layers, Award, Sparkles, Calendar, BookOpen, Clock, Bookmark, Image as ImageIcon } from 'lucide-react';
import { PageRoute } from '../types';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { JournalBookCover } from '../components/JournalBookCover';
import { MultiPhotoGallerySection, GallerySectionConfig } from '../components/MultiPhotoGallerySection';

interface JournalPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onNavigate }) => {
  const [activeStageTab, setActiveStageTab] = useState<number>(1);
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>('all');

  const gallerySections: GallerySectionConfig[] = [
    {
      id: 'daily-audit',
      tag: 'Interior Page Spread',
      title: 'Interior Page: Daily Audit',
      subtitle: 'Daily Attention Tracking & Morning Boundary Spread',
      description:
        'The core analog engine of the 32-day rhythm. Every day provides dedicated space to define your single most critical study objective, track unbroken focus blocks, log distraction urges in ink to dissipate their psychological grip, and complete an evening shutdown reflection.',
      specs: [
        '100 GSM high-opacity warm cream paper (fountain pen & gel pen bleed-proof)',
        'Structured morning boundary checklist: Phone-free morning buffer before study',
        'Distraction friction logger that transforms reactive impulse into objective awareness',
        'Numbered 32-day countdown streak tracker at top margin',
      ],
      aspectRatioClass: 'aspect-[3/4]',
    },
    {
      id: 'weekly-reset',
      tag: 'Interior Page Spread',
      title: 'Interior Page: Weekly Reset',
      subtitle: 'Four-Day Stage Retrospective & Habit Calibration',
      description:
        'Positioned at the conclusion of every stage, the Weekly Reset spread gives students structured space to tally deep focus hours, diagnose environmental friction patterns, review wins, and calibrate study habits before stepping into the next challenge.',
      specs: [
        'Stage retrospective table and weekly focus hours calculation matrix',
        'Trigger breakdown log: identify which apps, environments, and times caused friction',
        'Readiness self-assessment checklist before graduating to the subsequent stage',
        'Intentional continuation commitments for the upcoming 7 days',
      ],
      aspectRatioClass: 'aspect-[3/4]',
    },
    {
      id: 'activities',
      tag: 'Guided Exercises',
      title: '8 Behavioural Activities',
      subtitle: 'Step-by-Step Habit Remodeling Worksheets',
      description:
        'Eight structured, hands-on activities distributed throughout the journal. Each activity helps students systematically remodel their study environment—from establishing physical phone boundaries to creating study sanctuaries and conducting digital friction audits.',
      specs: [
        'Activity 01 & 02: Mapping Digital Friction and Defining Study Focus Blocks',
        'Activity 03 & 04: The Physical Study Sanctuary & The Paper Buffer Technique',
        'Activity 05 & 06: Impulse Diffusion & Monk Mode Deep Work Architecture',
        'Activity 07 & 08: Distraction Defense Protocols & The 6-Month Continuation Blueprint',
      ],
      aspectRatioClass: 'aspect-[4/3]',
    },
    {
      id: 'badges',
      tag: 'Milestone Rewards',
      title: 'Physical Milestone Badges',
      subtitle: 'Embossed Achievement Stamps & Identity Markers',
      description:
        'Tangible reinforcement that anchors discipline into identity. Upon completing each of the five stages (Reboot, Rhythm, Resilience, Monk Mode, and The Rare Identity), students unlock and stamp physical milestone badges into their journal record.',
      specs: [
        '5 custom-designed physical milestone seals (Metallic Gold & Deep Navy)',
        'Stage validation gates anchored at Days 8, 16, 24, and 32',
        'Tangible dopamine reward replacing empty digital notification pings',
        'Permanent physical proof of cognitive discipline and self-mastery',
      ],
      aspectRatioClass: 'aspect-[4/3]',
    },
    {
      id: 'bookmark',
      tag: 'Companion Tool',
      title: 'Interactive Focus Bookmark',
      subtitle: 'Tactile Daily Rulecard & Quick-Reference Companion',
      description:
        'A custom heavy-stock companion bookmark that stays with you across all 32 days. Features emergency distraction diffusion protocols, core rules of The Rare Club, and an interactive day-by-day progress tracking slider.',
      specs: [
        '400 GSM heavy linen cardstock with gold foiled edges & ribbon',
        'Emergency Impulse Protocol printed on front: "Breathe 3x, Write Urge, Return"',
        'Stage ruler and 32-day checkpoint progress tracker printed on reverse',
        'Sits open flat inside your current daily audit spread beside textbooks',
      ],
      aspectRatioClass: 'aspect-[3/4]',
    },
  ];

  const stages = [
    {
      num: '01',
      id: 1,
      name: 'REBOOT MODE',
      theme: 'Awareness',
      days: 'Day 01–07',
      objective: 'Observe screen time, identify distractions and recognise triggers without judgment.',
      coreHabit: 'Daily Distraction Audit & Trigger Logging',
      badge: 'Awareness Badge (Day 8 Milestone)',
      activityFocus: 'Activity 1 & 2: Mapping Digital Friction and Defining Focus Blocks',
      color: '#78866B', // sage
      bgColor: 'bg-[#78866B]/10',
      borderColor: 'border-[#78866B]/30',
    },
    {
      num: '02',
      id: 2,
      name: 'FOCUS MODE',
      theme: 'Control',
      days: 'Day 08–14',
      objective: 'Practise a morning phone boundary and distraction-free focus sessions.',
      coreHabit: '60-Minute Morning Phone Boundary',
      badge: 'Control Badge (Day 16 Milestone)',
      activityFocus: 'Activity 3 & 4: Physical Sanctuary Setup & The Paper Buffer',
      color: '#C5A15A', // gold
      bgColor: 'bg-[#C5A15A]/10',
      borderColor: 'border-[#C5A15A]/40',
    },
    {
      num: '03',
      id: 3,
      name: 'DEEP MODE',
      theme: 'Strength',
      days: 'Day 15–21',
      objective: 'Gradually extend focused work and strengthen sustained attention.',
      coreHabit: '90-Minute Uninterrupted Deep Work Blocks',
      badge: 'Strength Badge (Day 24 Milestone)',
      activityFocus: 'Activity 5 & 6: Attention Residue Shield & Priority Ranking',
      color: '#647B8C', // pale blue
      bgColor: 'bg-[#647B8C]/10',
      borderColor: 'border-[#647B8C]/30',
    },
    {
      num: '04',
      id: 4,
      name: 'MONK MODE',
      theme: 'Discipline',
      days: 'Day 22–28',
      objective: 'Follow planned priorities, protect focused time and practise phone-free meals.',
      coreHabit: 'Phone-Free Meals & Friction-Shielded Evenings',
      badge: 'Discipline Badge (Day 28 Milestone)',
      activityFocus: 'Activity 7: High-Stakes Friction Testing & Impulse Defusal',
      color: '#8E6E53', // bronze warm
      bgColor: 'bg-[#8E6E53]/10',
      borderColor: 'border-[#8E6E53]/30',
    },
    {
      num: '05',
      id: 5,
      name: 'FINAL STREAK',
      theme: 'Mastery',
      days: 'Day 29–32',
      objective: 'Bring the practices together, complete final challenges and create a continuation plan.',
      coreHabit: 'Holistic Attention Mastery & 32-Day Synthesis',
      badge: 'Rare Club Mastery Emblem (Day 32 Completion)',
      activityFocus: 'Activity 8: The Long-Term Continuation Plan & Identity Seal',
      color: '#292824', // ink
      bgColor: 'bg-[#292824]/10',
      borderColor: 'border-[#292824]/40',
    },
  ];

  return (
    <div className="space-y-24 lg:space-y-36 pb-24">
      {/* 1. HERO PRODUCT HEADER */}
      <section className="pt-12 sm:pt-20 lg:pt-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="text-xs uppercase tracking-[0.28em] font-medium text-[#C5A15A] animate-eyebrow">
            THE 32-DAY FOCUS JOURNAL
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292824] leading-[1.08] text-balance animate-title">
            32 days.
            <span className="block italic text-[#C5A15A] font-light mt-1">
              One stronger you.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#292824]/75 font-normal animate-subtitle">
            Five stages. One journey. A stronger you.
          </p>
        </div>

        {/* 2. LARGE PRODUCT PHOTOGRAPHY & SPREADS RESERVED AREA */}
        <div className="mt-16 max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#E9E3D8] shadow-xs">
            {/* Main Physical Journal Image Slot */}
            <div className="lg:col-span-7 flex justify-center">
              <JournalBookCover />
            </div>

            {/* Interior Pages Grid */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A15A]">
                Tactile Design
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#292824] leading-snug">
                Crafted for intentional daily hand-writing.
              </h2>
              <p className="text-sm text-[#292824]/70 leading-relaxed">
                Designed to rest open flat beside your textbooks. High-opacity, thick paper that resists fountain pen bleeding, uncluttered minimal grids, and a soothing warm cream palette that rests tired eyes.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveGalleryTab('daily-audit');
                    document.getElementById('journal-gallery-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#E9E3D8] hover:border-[#C5A15A] text-left transition-all cursor-pointer group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-wider uppercase font-bold text-[#C5A15A]">Daily Page</span>
                    <ImageIcon className="w-4 h-4 text-[#C5A15A]" />
                  </div>
                  <div>
                    <div className="font-cover text-xs font-bold text-[#292824] group-hover:text-[#C5A15A] transition-colors">
                      Daily Audit
                    </div>
                    <div className="text-[11px] text-[#292824]/60">
                      Multi-Photo Upload
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold text-[#292824] underline decoration-[#C5A15A] decoration-2 underline-offset-2">
                    Open & Upload →
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveGalleryTab('weekly-reset');
                    document.getElementById('journal-gallery-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#E9E3D8] hover:border-[#C5A15A] text-left transition-all cursor-pointer group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-wider uppercase font-bold text-[#C5A15A]">Checkpoint</span>
                    <Calendar className="w-4 h-4 text-[#C5A15A]" />
                  </div>
                  <div>
                    <div className="font-cover text-xs font-bold text-[#292824] group-hover:text-[#C5A15A] transition-colors">
                      Weekly Reset
                    </div>
                    <div className="text-[11px] text-[#292824]/60">
                      Multi-Photo Upload
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold text-[#292824] underline decoration-[#C5A15A] decoration-2 underline-offset-2">
                    Open & Upload →
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL SPREADS & COMPONENTS MULTI-PHOTO GALLERIES */}
      <section id="journal-gallery-section" className="px-6 lg:px-12 max-w-7xl mx-auto space-y-10 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A] animate-eyebrow">
            TACTILE ELEMENTS & MULTI-PHOTO GALLERIES
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#292824] animate-title">
            Physical Spreads, Activities & Tools
          </h2>
          <p className="text-sm sm:text-base text-[#292824]/75 animate-subtitle">
            Upload multiple photos, layout scans, and detail shots for each section. All images are compressed client-side and saved permanently in IndexedDB.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#E9E3D8]/60 rounded-2xl max-w-5xl mx-auto border border-[#E9E3D8]">
          <button
            type="button"
            onClick={() => setActiveGalleryTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
              activeGalleryTab === 'all'
                ? 'bg-[#292824] text-white shadow-xs'
                : 'text-[#292824]/70 hover:text-[#292824] hover:bg-white/60'
            }`}
          >
            All Elements ({gallerySections.length})
          </button>
          {gallerySections.map((sec) => {
            const isSelected = activeGalleryTab === sec.id;
            const shortName = sec.title
              .replace('Interior Page: ', '')
              .replace('8 Behavioural ', '')
              .replace('Physical ', '')
              .replace('Focus ', '');
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveGalleryTab(sec.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#292824] text-white shadow-xs'
                    : 'text-[#292824]/70 hover:text-[#292824] hover:bg-white/60'
                }`}
              >
                {shortName}
              </button>
            );
          })}
        </div>

        {/* Render Multi-Photo Sections */}
        <div className="space-y-8">
          {gallerySections
            .filter((sec) => activeGalleryTab === 'all' || activeGalleryTab === sec.id)
            .map((config) => (
              <MultiPhotoGallerySection key={config.id} config={config} />
            ))}
        </div>
      </section>

      {/* 3. THE FIVE CONNECTED STAGES */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
            The Curriculum
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#292824]">
            Five Progressive Stages
          </h2>
          <p className="text-sm text-[#292824]/70">
            Awareness → Control → Strength → Discipline → Mastery.
          </p>
        </div>

        {/* Desktop Stage Selector */}
        <div className="hidden lg:grid grid-cols-5 gap-3 p-2 bg-[#E9E3D8]/50 rounded-2xl border border-[#E9E3D8]">
          {stages.map((stage) => {
            const isSelected = activeStageTab === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageTab(stage.id)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white shadow-xs border border-[#C5A15A]/40'
                    : 'hover:bg-white/60 text-[#292824]/70'
                }`}
              >
                <div className="text-[11px] font-semibold text-[#C5A15A] uppercase tracking-wider mb-1">
                  {stage.num} · {stage.days}
                </div>
                <div className="font-cover text-sm font-bold text-[#292824] truncate">
                  {stage.name}
                </div>
                <div className="text-xs text-[#292824]/60 font-medium">
                  {stage.theme}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel (Interactive Showcase) */}
        {(() => {
          const currentStage = stages.find((s) => s.id === activeStageTab) || stages[0];
          return (
            <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#E9E3D8] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#C5A15A]">
                      STAGE {currentStage.num}
                    </span>
                    <span className="text-[#C5A15A]/40">·</span>
                    <span className="text-xs font-semibold text-[#292824]/70 uppercase tracking-wider">
                      {currentStage.days}
                    </span>
                  </div>

                  <h3 className="font-cover text-2xl sm:text-4xl font-bold text-[#292824] tracking-tight">
                    {currentStage.name} — <span className="font-editorial italic font-normal text-[#C5A15A]">{currentStage.theme}</span>
                  </h3>

                  <p className="text-base sm:text-lg text-[#292824]/85 leading-relaxed">
                    {currentStage.objective}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] space-y-1">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A15A]">
                        Core Habit Shift
                      </div>
                      <div className="font-medium text-[#292824]">
                        {currentStage.coreHabit}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] space-y-1">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A15A]">
                        Milestone Reward
                      </div>
                      <div className="font-medium text-[#292824]">
                        {currentStage.badge}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-dashed border-[#C5A15A]/40 text-xs text-[#292824]/80 flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#292824]">Stage Exercise: </strong>
                      {currentStage.activityFocus}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="p-6 rounded-2xl bg-[#F7F4ED] border border-[#E9E3D8] text-center space-y-4">
                    <div className="w-16 h-16 rounded-full mx-auto bg-white border border-[#C5A15A]/40 flex items-center justify-center text-[#C5A15A] shadow-xs">
                      <Award className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest font-semibold text-[#C5A15A]">
                        Stage {currentStage.num} Milestone
                      </div>
                      <div className="font-cover text-base font-bold text-[#292824] mt-1">
                        {currentStage.theme} Level
                      </div>
                    </div>
                    <p className="text-xs text-[#292824]/60 leading-relaxed">
                      Complete all 7 daily accountability spreads in this level to earn the {currentStage.theme} certification marker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Mobile All Stages List View */}
        <div className="lg:hidden space-y-4">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`p-6 rounded-2xl bg-white border ${stage.borderColor} space-y-3`}
            >
              <div className="flex items-center justify-between text-xs text-[#C5A15A] font-semibold">
                <span>STAGE {stage.num}</span>
                <span>{stage.days}</span>
              </div>
              <h4 className="font-cover text-lg font-bold text-[#292824]">
                {stage.name} — <span className="font-editorial italic font-normal text-[#C5A15A]">{stage.theme}</span>
              </h4>
              <p className="text-xs text-[#292824]/75 leading-relaxed">
                {stage.objective}
              </p>
              <div className="pt-2 text-[11px] text-[#292824]/60">
                <strong>Milestone:</strong> {stage.badge}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOUR KEY JOURNAL SYSTEM HIGHLIGHTS */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#292824] text-[#F7F4ED] space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
              Built-In Framework
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F4ED]">
              Structured for Consistency
            </h2>
            <p className="text-sm text-[#F7F4ED]/70 leading-relaxed">
              Every spread in the 32-Day Focus Journal serves an explicit pedagogical purpose, removing guesswork and keeping students accountable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#292824] border border-[#C5A15A]/40 flex items-center justify-center text-[#C5A15A]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-cover text-sm font-bold text-[#F7F4ED] uppercase tracking-wide">
                8 Guided Activities
              </h4>
              <p className="text-xs text-[#F7F4ED]/65 leading-relaxed">
                One guided behavioural exercise every four days to audit habits, redesign your study desk, and test your resistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#292824] border border-[#C5A15A]/40 flex items-center justify-center text-[#C5A15A]">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-cover text-sm font-bold text-[#F7F4ED] uppercase tracking-wide">
                Weekly Reset Spreads
              </h4>
              <p className="text-xs text-[#F7F4ED]/65 leading-relaxed">
                A dedicated weekly reflection page to analyze your high-friction hours, celebrate wins, and calibrate for the next 7 days.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#292824] border border-[#C5A15A]/40 flex items-center justify-center text-[#C5A15A]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-cover text-sm font-bold text-[#F7F4ED] uppercase tracking-wide">
                Weekly Badges
              </h4>
              <p className="text-xs text-[#F7F4ED]/65 leading-relaxed">
                Tangible tracking badges integrated on paper to reward sustained streaks and keep psychological momentum alive.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#33312B] border border-[#444139] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#292824] border border-[#C5A15A]/40 flex items-center justify-center text-[#C5A15A]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-cover text-sm font-bold text-[#F7F4ED] uppercase tracking-wide">
                Completion Milestones
              </h4>
              <p className="text-xs text-[#F7F4ED]/65 leading-relaxed">
                Visual progress gates after Days 8, 16, 24, and 32 marking your evolution from awareness to full attention ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CORE QUOTE & ACTION */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto text-center space-y-8">
        <div className="w-16 h-0.5 bg-[#C5A15A] mx-auto" />
        
        <blockquote className="font-editorial text-2xl sm:text-4xl text-[#292824] font-normal leading-relaxed italic text-balance">
          “The goal isn't to escape technology.
          <span className="block not-italic font-semibold text-[#292824] mt-2">
            It's to become the one who controls their attention.”
          </span>
        </blockquote>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('connect')}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Inquire About the Journal</span>
            <ArrowRight className="w-4 h-4 text-[#C5A15A]" />
          </button>

          <button
            onClick={() => onNavigate('my-story')}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#292824] bg-white hover:bg-[#F7F4ED] border border-[#E9E3D8] hover:border-[#C5A15A] rounded-xl transition-all cursor-pointer"
          >
            Read the Founder's Story
          </button>
        </div>
      </section>
    </div>
  );
};
