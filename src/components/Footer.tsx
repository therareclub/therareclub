import React from 'react';
import { Mail, Youtube, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types';
import { LogoEmblem } from './Logo';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#292824] text-[#F7F4ED] pt-20 pb-12 border-t border-[#3A3934]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3E3C36]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <LogoEmblem size={34} />
              <span className="font-cover text-xl font-bold tracking-[0.25em] text-[#F7F4ED] uppercase">
                THE <span className="text-[#f6ce70]" style={{ color: '#f6ce70' }}>RARE</span> CLUB
              </span>
            </div>

            <p className="font-editorial text-2xl text-[#E9E3D8] italic font-light tracking-wide">
              Where Discipline Becomes Identity.
            </p>

            <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#C5A15A]">
              <span>Discipline</span>
              <span className="text-[#C5A15A]/40">·</span>
              <span>Consistency</span>
              <span className="text-[#C5A15A]/40">·</span>
              <span>Control</span>
            </div>

            <p className="text-sm text-[#F7F4ED]/60 max-w-md leading-relaxed">
              In a world relentlessly competing for students' attention, we help young minds become intentional about how they use their time, build sustained focus, and develop lifelong self-discipline.
            </p>

            {/* Founder Note Credential */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-widest text-[#C5A15A] font-semibold mb-1">
                Founder & Lead Educator
              </div>
              <div className="text-sm font-medium text-[#F7F4ED]">
                Prashant D. Thakare
              </div>
              <div className="text-xs text-[#F7F4ED]/60">
                Assistant Professor | Founder, The Rare Club
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A15A]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-[#F7F4ED]/75">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('philosophy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The 32-Day Focus Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('my-story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  My Story (Founder's Note)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Journey Told by Them
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('connect')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Connect & Cohorts
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Channels Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A15A]">
              Connect & Reach
            </div>

            <p className="text-sm text-[#F7F4ED]/65 leading-relaxed">
              Have questions about the 32-Day Focus Journal, bulk institutional cohorts for colleges, or speaking sessions?
            </p>

            <div className="space-y-3">
              <a
                href="mailto:prashantkthakare@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#33312B] hover:bg-[#3D3A33] border border-[#48453D] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C5A15A]/15 text-[#C5A15A] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#F7F4ED]/50 font-medium">Direct Email</div>
                  <div className="text-xs font-medium text-[#F7F4ED] truncate">prashantkthakare@gmail.com</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F7F4ED]/40 group-hover:text-[#C5A15A] transition-colors" />
              </a>

              <a
                href="https://www.youtube.com/@JoinTheRareClub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#33312B] hover:bg-[#3D3A33] border border-[#48453D] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C5A15A]/15 text-[#C5A15A] flex items-center justify-center shrink-0">
                  <Youtube className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#F7F4ED]/50 font-medium">YouTube Channel</div>
                  <div className="text-xs font-medium text-[#F7F4ED] truncate">@JoinTheRareClub</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F7F4ED]/40 group-hover:text-[#C5A15A] transition-colors" />
              </a>

              <button
                onClick={() => handleNav('connect')}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#33312B] hover:bg-[#3D3A33] border border-[#48453D] transition-colors group cursor-pointer text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C5A15A]/15 text-[#C5A15A] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#F7F4ED]/50 font-medium">WhatsApp & Direct Inquiries</div>
                  <div className="text-xs font-medium text-[#F7F4ED] truncate">Get in Touch directly</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F7F4ED]/40 group-hover:text-[#C5A15A] transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4ED]/50">
          <div>
            © 2026 The Rare Club. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#C5A15A] font-medium">therareclub.co.in</span>
            <span aria-hidden="true">·</span>
            <span>Where Discipline Becomes Identity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
