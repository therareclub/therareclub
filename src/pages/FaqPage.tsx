import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle, ShieldAlert } from 'lucide-react';
import { PageRoute, FaqItem } from '../types';

interface FaqPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What is the 32-Day Focus Journal?',
      answer:
        'The 32-Day Focus Journal is a structured physical, analog reflection system created specifically for students facing digital distraction. Over 32 days divided into five progressive stages, the journal guides you through identifying habitual phone triggers, establishing physical study sanctuaries, executing deep work blocks, and cultivating sustainable self-discipline without relying solely on fragile willpower.',
    },
    {
      id: 'faq-2',
      question: 'Who is this journal designed for?',
      answer:
        'It is primarily designed for high school students, college undergraduates, graduate students, and competitive exam aspirants (such as engineering, medical, civil services, and law candidates) who find their study hours continually fragmented by smartphones, endless notifications, and digital fatigue. It is also actively used by young professionals and educators who want to rebuild sustained cognitive depth.',
    },
    {
      id: 'faq-3',
      question: 'Do I need to stop using my phone completely?',
      answer:
        'No. The Rare Club does not advocate for extreme or impractical digital detoxes. Technology and digital tools are essential for modern study and communication. The journal is designed to eliminate unconscious, automatic reach—ensuring you use your phone with conscious intent rather than letting algorithms dictate your study schedule.',
    },
    {
      id: 'faq-4',
      question: 'How much time do I need every day?',
      answer:
        'Only 10 to 15 minutes per day: approximately 5 to 7 minutes in the morning to review your daily priorities and set your morning boundaries, and 5 to 7 minutes in the evening to log your focus blocks, note distractions, and complete your daily check-in. The guided exercises every four days take an additional 15 minutes of thoughtful reflection.',
    },
    {
      id: 'faq-5',
      question: 'What are the five levels of the journal?',
      answer:
        'The journal is organized across five pedagogical stages:\n\n1. Reboot Mode — Awareness (Days 1–7): Observing screen time and noticing triggers without self-criticism.\n2. Focus Mode — Control (Days 8–14): Introducing a morning phone boundary and distraction-free study blocks.\n3. Deep Mode — Strength (Days 15–21): Expanding sustained focus duration and eliminating attention residue.\n4. Monk Mode — Discipline (Days 22–28): Protecting priority blocks and practicing phone-free meals.\n5. Final Streak — Mastery (Days 29–32): Integrating habits and designing a long-term continuation plan.',
    },
    {
      id: 'faq-6',
      question: 'Is it just another study planner?',
      answer:
        'No. Traditional study planners merely ask you to write down your timetable or to-do lists, assuming that writing a schedule automatically gives you the discipline to follow it. The 32-Day Focus Journal is a behavioural intervention: it tracks the emotional and environmental friction that causes plans to fail, incorporates deliberate habit-formation exercises, and trains impulse control directly on paper.',
    },
    {
      id: 'faq-7',
      question: 'What if I miss a day or break my streak?',
      answer:
        'Breaking a streak is a normal part of the learning curve, not a failure. The journal emphasizes reflection over perfection. If you miss a day or encounter high distraction, the journal includes a gentle reset framework: you simply record what environmental trigger caused the disruption, calibrate your friction, and resume on the very next page without starting over from Day 1.',
    },
    {
      id: 'faq-8',
      question: 'How does the journal help improve focus?',
      answer:
        'By providing a physical, offline anchor away from digital notifications. Writing by hand slows down thought processes, enhancing metacognition (awareness of one’s own mental habits). By externalizing distractions in ink and designing your desk environment to create physical distance from devices, your cognitive load is preserved for high-value academic learning.',
    },
    {
      id: 'faq-9',
      question: 'How can parents support their child during the 32 days?',
      answer:
        'Parents can support by respecting the student’s daily focus blocks, helping maintain device-free zones in the home (such as family dinner tables), and encouraging the reflection process without policing or grading the journal entries. The journal belongs entirely to the student as their private space for self-honesty and growth.',
    },
    {
      id: 'faq-10',
      question: 'What can I expect after completing 32 days?',
      answer:
        'Students typically experience significantly reduced anxiety around notifications, the ability to sit through 90+ minute deep study blocks without compulsive phone reach, calmer mornings, and a tangible sense of self-trust. Stage 05 equips you with a customized Long-Term Continuation Plan so you retain these focus systems for future academic semesters.',
    },
    {
      id: 'faq-11',
      question: 'Is the 32-Day Focus Journal a psychological or mental health treatment?',
      answer:
        'No. The 32-Day Focus Journal is a self-guided educational, productivity, and habits reflection tool designed for students. It is pedagogical in nature and is not a substitute for clinical psychological counseling, psychiatric evaluation, or mental health treatment. If you or someone you know is experiencing clinical distress, depression, severe anxiety, or behavioral addiction, please consult a qualified mental health healthcare professional.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-20 lg:space-y-32 pb-24">
      {/* 1. HEADER */}
      <section className="pt-12 sm:pt-20 lg:pt-24 px-6 lg:px-12 max-w-4xl mx-auto text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.28em] font-medium text-[#C5A15A] animate-eyebrow">
          QUESTIONS & CLARIFICATIONS
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292824] leading-[1.08] text-balance animate-title">
          Frequently Asked
          <span className="block italic text-[#C5A15A] font-light mt-1">
            Questions.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#292824]/75 font-normal max-w-2xl mx-auto leading-relaxed animate-subtitle">
          Everything you need to know about the 32-Day Focus Journal, the philosophy behind it, and how to get the most from the curriculum.
        </p>
      </section>

      {/* 2. ACCORDION (strictly 1 open at a time, accessible keyboard controls) */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const isMedical = faq.id === 'faq-11';

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C5A15A]/60 shadow-sm'
                    : 'bg-white/70 border-[#E9E3D8] hover:border-[#C5A15A]/30'
                } ${isMedical && isOpen ? 'bg-amber-50/20 border-amber-300' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A15A]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-xs font-semibold text-[#C5A15A] font-cover shrink-0">
                      {(index + 1).toString().padStart(2, '0')}.
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-[#292824] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-[#E9E3D8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#292824] text-white border-transparent' : 'text-[#292824] bg-[#F7F4ED]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-[#E9E3D8]/60 text-sm sm:text-base text-[#292824]/80 leading-relaxed space-y-4"
                  >
                    {isMedical && (
                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <strong>Important Medical Notice:</strong> Please review the official disclaimer below.
                        </div>
                      </div>
                    )}

                    <div className="whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS CTA */}
      <section className="px-6 lg:px-12 max-w-3xl mx-auto text-center space-y-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F4ED] border border-[#E9E3D8] space-y-4">
          <div className="w-12 h-12 rounded-full mx-auto bg-white border border-[#C5A15A]/40 flex items-center justify-center text-[#C5A15A]">
            <HelpCircle className="w-6 h-6 stroke-[1.5]" />
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#292824]">
            Have an institutional or cohort question?
          </h3>
          <p className="text-xs sm:text-sm text-[#292824]/70 max-w-md mx-auto leading-relaxed">
            Reach out directly for college workshop inquiries, bulk student journal orders, or faculty presentations.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('connect')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] rounded-xl transition-all cursor-pointer"
            >
              <span>Connect With Founder & Team</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A15A]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
