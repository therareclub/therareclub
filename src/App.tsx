import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { JournalPage } from './pages/JournalPage';
import { StoryPage } from './pages/StoryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';
import { ConnectPage } from './pages/ConnectPage';
import { Compass } from 'lucide-react';

export default function App() {
  // Parse route from either pathname or hash
  const getInitialRoute = (): PageRoute => {
    // Check hash first (e.g. #journal or #/journal)
    const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
    if (isValidRoute(hash)) return hash as PageRoute;

    // Check pathname (e.g. /journal)
    const path = window.location.pathname.replace(/^\//, '').trim().toLowerCase();
    if (isValidRoute(path)) return path as PageRoute;

    return 'home';
  };

  const isValidRoute = (str: string): boolean => {
    return [
      'home',
      'philosophy',
      'journal',
      'my-story',
      'stories',
      'faq',
      'connect',
    ].includes(str);
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute);

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    
    // Update browser URL history without reload
    try {
      window.history.pushState({ page }, '', targetPath);
    } catch {
      window.location.hash = page === 'home' ? '' : page;
    }
  };

  // Render the current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'philosophy':
        return <PhilosophyPage onNavigate={navigateTo} />;
      case 'journal':
        return <JournalPage onNavigate={navigateTo} />;
      case 'my-story':
        return <StoryPage onNavigate={navigateTo} />;
      case 'stories':
        return <TestimonialsPage onNavigate={navigateTo} />;
      case 'faq':
        return <FaqPage onNavigate={navigateTo} />;
      case 'connect':
        return <ConnectPage onNavigate={navigateTo} />;
      default:
        return (
          <div className="py-32 px-6 max-w-lg mx-auto text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-[#E9E3D8] text-[#C5A15A] flex items-center justify-center mx-auto">
              <Compass className="w-7 h-7" />
            </div>
            <h2 className="font-editorial text-4xl text-[#292824]">
              Page Not Found
            </h2>
            <p className="text-sm text-[#292824]/70">
              The page you are looking for does not exist or has moved.
            </p>
            <button
              onClick={() => navigateTo('home')}
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#292824] rounded-xl hover:bg-[#3D3A34] transition-all cursor-pointer"
            >
              Return to Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#292824] selection:bg-[#C5A15A]/20">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
