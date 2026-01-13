import React, { useLayoutEffect } from 'react';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import BentoGrid from './components/BentoGrid';
import DeploymentLog from './components/DeploymentLog';
import ProfileCard from './components/ProfileCard';
import TerminalContact from './components/TerminalContact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  // Force scroll to top on mount/refresh
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-dotvely-black min-h-screen text-gray-100 selection:bg-dotvely-blue selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Intro Section */}
      <div className="relative z-20">
        <Hero />
        <TechMarquee />
      </div>
      
      <div className="relative z-10">
         {/* Global background glow for content sections */}
         <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
         </div>

         {/* Vertical Scroll Content Flow */}
         <div className="flex flex-col relative z-10 space-y-12 md:space-y-24 pb-24">
            <Philosophy />
            <Services />
            <BentoGrid />
            <DeploymentLog />
            <ProfileCard />
         </div>

         {/* Contact Section */}
         <div className="relative z-20 bg-dotvely-black">
             <TerminalContact />
             <Footer />
         </div>
      </div>
    </main>
  );
};

export default App;