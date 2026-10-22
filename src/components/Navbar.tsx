import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update this path to match your actual logo filename.
  const logoSrc = '/assets/aistudio/rare-logo.png';

  const navLinks: {
    id: PageRoute;
    fullLabel: string;
    shortLabel: string;
  }[] = [
      { id: 'home', fullLabel: 'Home', shortLabel: 'Home' },
      {
        id: 'philosophy',
        fullLabel: 'Our Philosophy',
        shortLabel: 'Philosophy',
      },
      {
        id: 'journal',
        fullLabel: 'The 32-Day Focus Journal',
        shortLabel: 'Journal',
      },
      { id: 'my-story', fullLabel: 'My Story', shortLabel: 'My Story' },
      {
        id: 'stories',
        fullLabel: 'The Journey Told by Them',
        shortLabel: 'Stories',
      },
      { id: 'faq', fullLabel: 'FAQ', shortLabel: 'FAQ' },
      { id: 'connect', fullLabel: 'Connect', shortLabel: 'Connect' },
    ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E9E3D8]/80 bg-[#F7F4ED]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 xl:px-8 2xl:px-12">

        {/* Brand: image logo + wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          aria-label="The Rare Club home"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] focus-visible:ring-offset-4"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
            <img
              src={logoSrc}
              alt=""
              className="h-full w-full object-contain"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </span>

          <span className="whitespace-nowrap font-cover text-[13px] font-bold uppercase tracking-[0.14em] text-[#292824] sm:text-base sm:tracking-[0.2em] lg:text-lg">
            THE <span className="text-[#C5A15A]">RARE</span>{' '}
            <span>CLUB</span>
          </span>
        </button>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 2xl:gap-6 lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;

            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative whitespace-nowrap py-2 text-[11px] font-medium tracking-wide transition-colors duration-200 2xl:text-[14px] ${isActive
                  ? 'text-[#292824]'
                  : 'text-[#292824]/65 hover:text-[#292824]'
                  }`}
              >
                <span className="2xl:hidden">{link.shortLabel}</span>
                <span className="hidden 2xl:inline">{link.fullLabel}</span>

                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-[#C5A15A] transition-transform duration-300 ${isActive
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Primary action + mobile menu toggle */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('journal')}
            className="group hidden items-center gap-2 rounded-lg bg-[#292824] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#3D3A34] hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] focus-visible:ring-offset-2 sm:inline-flex sm:px-4 sm:text-[11px]"
          >
            <span>Explore Journal</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#C5A15A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#292824] transition-colors hover:bg-[#E9E3D8]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet navigation drawer */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${mobileMenuOpen
          ? 'grid-rows-[1fr] opacity-100'
          : 'pointer-events-none grid-rows-[0fr] opacity-0'
          }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#E9E3D8] bg-[#F7F4ED] px-4 pb-5 pt-3 sm:px-6"
          >
            <div className="mx-auto flex max-w-2xl flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = currentPage === link.id;

                return (
                  <button
                    key={link.id}
                    type="button"
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    onClick={() => handleNavClick(link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm transition-colors duration-200 ${isActive
                      ? 'bg-[#E9E3D8]/75 font-semibold text-[#292824]'
                      : 'text-[#292824]/75 hover:bg-[#E9E3D8]/45 hover:text-[#292824]'
                      }`}
                    style={{
                      transitionDelay: mobileMenuOpen
                        ? `${index * 20}ms`
                        : '0ms',
                    }}
                  >
                    <span>{link.fullLabel}</span>

                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A15A]" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-[#292824]/35" />
                    )}
                  </button>
                );
              })}

              <button
                type="button"
                tabIndex={mobileMenuOpen ? 0 : -1}
                onClick={() => handleNavClick('journal')}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#292824] px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#3D3A34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] focus-visible:ring-offset-2"
              >
                Explore 32-Day Focus Journal
                <ArrowUpRight className="h-4 w-4 text-[#C5A15A]" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;