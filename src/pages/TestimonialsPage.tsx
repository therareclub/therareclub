import React from 'react';
import { Quote, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { PageRoute, StudentStory } from '../types';
import { PlaceholderImage } from '../components/PlaceholderImage';

interface TestimonialsPageProps {
    onNavigate: (page: PageRoute) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
    // Pre-configured editable templates that respect the user's authentic story guidelines
    const stories: StudentStory[] = [
        {
            id: 'story-1',
            name: 'Vaidehi',
            category: 'MBA student, Nagpur',
            quote: '“What once felt impossible became my reality. My screen time dropped to just 1–2 hours a day!”',
            reflection:
                'I used to spend 10–11 hours a day on my screen, constantly procrastinating and struggling to manage my time. When I started the 32-Day Focus Journal, even the goals felt impossible to achieve. But its step-by-step approach, personal reflection questions, colouring activities, and daily challenges made the journey surprisingly engaging. By the second week, I could already feel the difference. Managing my tasks became easier, and my screen time dropped to just 1–2 hours a day! This journey taught me that even the hardest habits can change with the right system and consistency. What once felt impossible became my reality.',
            verifiedOutcome: 'Screen time dropped from 10–11 hours to 1–2 hours daily',
            imagePlaceholderText: 'Student Photo — Vaidehi (MBA student, Nagpur)',
            imageUrl: '/assets/aistudio/vaidehi.webp',
        },
        {
            id: 'story-2',
            name: 'Nikita',
            category: 'MBA Student, Pune University',
            quote: '“Tracking my useful hours has made me more aware of how I spend my time, and I’m motivated to keep improving every day!”',
            reflection:
                'I’ve been using the 32-Day Focus Journal for the past 8 days, and it’s already helping me improve my study time and reduce my screen time. Tracking my useful hours has made me more aware of how I spend my time, and I now feel that I’m making better use of my day. The best part is that I’m motivated to keep improving and increase my useful hours every day. This journey is helping me become more focused, disciplined, and intentional with my time. I’m excited to see how much more I can achieve by the end of 32 days! 😊🙌',
            verifiedOutcome: 'Increased study hours & reduced screen time in first 8 days',
            imagePlaceholderText: 'Student Photo — Nikita (MBA Student, Pune University)',
            imageUrl: '/assets/aistudio/nikita.webp',
        },
        {
            id: 'story-3',
            name: 'Neeraj P.',
            category: 'Businessman & Youtuber',
            quote: '“The 32-Day Focus Journal has become much more than a journal—it’s a way to stay disciplined and take ownership of my day.”',
            reflection:
                'For me, the 32-Day Focus Journal has become much more than a journal—it’s a way to stay disciplined and take ownership of my day. I’ve developed the habit of setting clear goals every morning and reviewing them at night. This simple routine helps me recognise where I did well, where I fell short, and what I can improve tomorrow. Over time, I’ve become more accountable to myself and more mindful of how I use my time. What I value most is that it doesn’t just help me plan my day; it helps me understand my own actions and grow through them.',
            verifiedOutcome: 'Morning goal setting & evening review habit built',
            imagePlaceholderText: 'Photo — Neeraj P. (Businessman & Youtuber)',
            imageUrl: '/assets/aistudio/niraj.webp',
        },
        {
            id: 'story-4',
            name: 'Vikrant Padole',
            category: 'NEET Aspirant, Nagpur',
            quote:
                '“Looking back, the most beautiful part is discovering a stronger, more self-aware version of myself. This journey has been truly worth it!”',
            reflection:
                'As a NEET repeater, I started using the 32-Day Focus Journal on a friend’s recommendation, thinking it would be just another to-do book. The first couple of days felt ordinary, but gradually, the experience changed. The challenges, gamification, streak system, and especially the creative bookmark kept me motivated to complete each task. The deeper activities helped me understand myself better, while tracking my time made me more aware of where my hours were going. I’ve also gained better control over my phone usage. Looking back, the most beautiful part is discovering a stronger, more self-aware version of myself. This journey has been truly worth it!',
            verifiedOutcome: 'Gained phone control & completed self-awareness challenges',
            imagePlaceholderText: 'Student Photo — Vikrant Padole (NEET Aspirant, Nagpur)',
            imageUrl: '/assets/aistudio/vikrant.webp',
        },
        {
            id: 'story-5',
            name: 'Shravani M.',
            category: '12th Std CBSE Student, Nagpur',
            quote:
                '“The 32-Day Focus Journal helped me reduce my screen time from around 7 hours to just 2.5 hours a day. But the biggest change was within me.”',
            reflection:
                'The 32-Day Focus Journal helped me reduce my screen time from around 7 hours to just 2.5 hours a day, mostly spent on purposeful activities. But the biggest change was within me. The deep questions helped me understand my thoughts, habits, and environment more clearly. One activity about family touched me so deeply that I actually cried and hugged my mom. ❤️ Reflecting honestly on my habits and the person I want to become gave me a new perspective on myself. I feel more positive, self-aware, and prepared to face life\'s uncertainties. I know challenges will continue to come, but this 32-day journey has given me something valuable: the clarity to face them with greater confidence.',
            verifiedOutcome: 'Screen time reduced from 7h to 2.5h & built self-awareness',
            imagePlaceholderText: 'Student Photo — Shravani M. (12th Std CBSE Student, Nagpur)',
            imageUrl: '/assets/aistudio/shravani.webp',
        },
        {
            id: 'story-6',
            name: 'Onkar D.',
            category: 'Sr. Data Consultant, Solapur',
            quote:
                '“The handwritten tracker and reflection exercises gave me a meaningful way to express myself and become more aware of my habits.”',
            reflection:
                'In today’s world of constant social media distractions and demanding routines, the 32-Day Focus Journal felt different from the moment I picked it up. I sensed it could help me get back on track, and that’s exactly what happened when I started following it sincerely. The handwritten tracker and reflection exercises gave me a meaningful way to express myself and become more aware of my habits. I struggled to maintain my streak during the first few days, but gradually, I began noticing improvements in my focus and commitment. I’m excited to see the stronger version of myself that emerges by the end of this journey. I genuinely recommend this challenge to anyone who feels distracted from their goals and wants to regain control of their time and attention. My journey is still in progress, and I look forward to sharing more!',
            verifiedOutcome: 'Regained control of time & built consistent focus streak',
            imagePlaceholderText: 'Photo — Onkar D. (Sr. Data Consultant, Solapur)',
            imageUrl: '/assets/aistudio/onkar.webp',
        },
    ];

    return (
        <div className="space-y-20 lg:space-y-32 pb-24">
            {/* 1. EDITORIAL HEADER */}
            <section className="pt-12 sm:pt-20 lg:pt-24 px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-6">
                <div className="text-xs uppercase tracking-[0.28em] font-medium text-[#C5A15A] animate-eyebrow">
                    STUDENT REFLECTIONS
                </div>

                <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292824] leading-[1.08] text-balance animate-title">
                    The Journey
                    <span className="block italic text-[#C5A15A] font-light mt-1">
                        Told by Them.
                    </span>
                </h1>

                <p className="text-base sm:text-lg text-[#292824]/75 font-normal max-w-2xl mx-auto leading-relaxed animate-subtitle">
                    Honest stories of friction, awareness, and breakthrough from students who committed to the 32-day practice.
                </p>

                {/* Authenticity Pledge notice */}
                <div className="max-w-2xl mx-auto p-4 rounded-xl bg-white/80 border border-[#E9E3D8] text-xs text-[#292824]/70 flex items-center gap-3 text-left">
                    <Info className="w-4 h-4 text-[#C5A15A] shrink-0" />
                    <span>
                        <strong>Authenticity Note:</strong> The Rare Club shares genuine student reflections. All cards below support verified names, categories, and direct photo uploads as student cohorts graduate from the 32-day curriculum.
                    </span>
                </div>
            </section>

            {/* 2. TESTIMONIAL GALLERY */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-white rounded-3xl border border-[#E9E3D8] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:border-[#C5A15A]/40 transition-colors"
                        >
                            <div className="space-y-4">
                                {/* Photo: Real image if available, else placeholder */}
                                {story.imageUrl ? (
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E9E3D8] bg-[#FAF8F5] shadow-xs">
                                        <img
                                            src={story.imageUrl}
                                            alt={story.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <PlaceholderImage
                                        label={story.imagePlaceholderText}
                                        sublabel="Upload real student photo preview"
                                        aspectRatioClass="aspect-[4/3]"
                                        className="p-3"
                                    />
                                )}

                                <div className="pt-2">
                                    <div className="font-cover text-base font-bold text-[#292824]">
                                        {story.name}
                                    </div>
                                    <div className="text-xs text-[#C5A15A] font-medium">
                                        {story.category}
                                    </div>
                                </div>

                                <div className="font-editorial text-lg text-[#292824] italic leading-snug">
                                    {story.quote}
                                </div>

                                <p className="text-xs sm:text-sm text-[#292824]/75 leading-relaxed">
                                    {story.reflection}
                                </p>
                            </div>

                            {/* Verified Outcome Badge */}
                            {story.verifiedOutcome && (
                                <div className="pt-4 border-t border-[#E9E3D8] flex items-start gap-2 text-[11px] text-[#292824]/80">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15A] shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-[#292824]">Milestone:</strong> {story.verifiedOutcome}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. SHARE YOUR STORY CALLOUT */}
            <section className="px-6 lg:px-12 max-w-4xl mx-auto text-center space-y-6">
                <div className="p-8 sm:p-12 rounded-3xl bg-[#292824] text-[#F7F4ED] space-y-5">
                    <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
                        Student Community
                    </div>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#F7F4ED]">
                        Have you completed the 32-day streak?
                    </h3>
                    <p className="text-sm text-[#F7F4ED]/70 max-w-xl mx-auto leading-relaxed">
                        We celebrate every student who took ownership of their attention. Submit your reflection, milestones, and feedback to be featured in The Rare Club gallery.
                    </p>
                    <div className="pt-2">
                        <button
                            onClick={() => onNavigate('connect')}
                            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#C5A15A] hover:bg-[#B39049] rounded-xl transition-all cursor-pointer"
                        >
                            <span>Submit Your Journey Reflection</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
