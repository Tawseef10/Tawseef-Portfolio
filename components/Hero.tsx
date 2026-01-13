import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_TITLES, WHATSAPP_LINK } from '../constants';
import MatrixRain from './MatrixRain';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Parallax Transforms - Refined for subtlety
  // Blob 1: Top Left (Blue) - Moves down slowly, fades, rotates slightly
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]); 
  const opacity1 = useTransform(scrollY, [0, 600], [1, 0]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 25]);
  const scale1 = useTransform(scrollY, [0, 1000], [1, 0.9]);

  // Blob 2: Bottom Right (Purple) - Moves up slowly against scroll, fades
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity2 = useTransform(scrollY, [0, 800], [1, 0.2]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -30]);
  const scale2 = useTransform(scrollY, [0, 1000], [1, 1.1]);

  // Glitch Timer Effect
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const triggerGlitch = () => {
      // Random delay between 5s and 12s
      const delay = Math.random() * 7000 + 5000;
      
      timeoutId = setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
        triggerGlitch();
      }, delay);
    };

    triggerGlitch();
    return () => clearTimeout(timeoutId);
  }, []);

  // Typing Effect
  useEffect(() => {
    const currentFullText = HERO_TITLES[textIndex];
    let delta = 60 - Math.random() * 30; 

    if (isDeleting) {
      delta = 25;
    } else if (displayText === currentFullText) {
      delta = 2000;
    } else if (displayText === '') {
      delta = 800;
    } else {
      if (Math.random() < 0.1 && displayText.length > 2) {
          delta += 200;
      }
    }

    const ticker = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % HERO_TITLES.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? currentFullText.substring(0, prev.length - 1) 
            : currentFullText.substring(0, prev.length + 1)
        );
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-dotvely-black selection:bg-dotvely-blue selection:text-white pt-20 pb-10 md:py-0">
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
        
        {/* Abstract Glow Blobs with Parallax */}
        <motion.div 
          style={{ y: y1, opacity: opacity1, rotate: rotate1, scale: scale1, x: -100 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-dotvely-blue/20 rounded-full blur-[80px] md:blur-[100px] transform-gpu" 
        />
        <motion.div 
          style={{ y: y2, opacity: opacity2, rotate: rotate2, scale: scale2, x: 100 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-900/20 rounded-full blur-[80px] md:blur-[120px] transform-gpu" 
        />

        {/* Code Rain Effect */}
        <MatrixRain />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto flex flex-col items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-4 md:mb-6"
        >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <p className="text-dotvely-blue font-mono tracking-widest text-xs md:text-sm uppercase">
            System Online // Initializing
            </p>
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight origin-center w-full break-words"
          animate={isGlitching ? {
            skewX: [0, 5, -5, 2, 0],
            x: [0, -2, 2, -1, 0],
            opacity: [1, 0.9, 1, 0.95, 1]
          } : {}}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          Tawseef Ahmad
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mt-2">
            Shaikh
          </span>
        </motion.h1>

        <div className="h-16 md:h-24 flex items-center justify-center mb-6 md:mb-8 w-full">
          <span className="text-lg sm:text-xl md:text-3xl font-mono text-gray-400 max-w-full truncate px-4">
            {'>'} {displayText}
            <span className="cursor-blink text-dotvely-blue inline-block ml-1 font-bold">_</span>
          </span>
        </div>

        {/* CTA Button */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent overflow-hidden rounded-full touch-manipulation"
        >
           <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-dotvely-blue to-purple-600 opacity-20 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
           <span className="absolute inset-0 w-full h-full border border-dotvely-blue/50 rounded-full"></span>
           <span className="relative flex items-center gap-2 text-white font-mono uppercase tracking-wider text-xs md:text-sm group-hover:font-bold transition-all">
             Initialize Protocol [Book Audit]
           </span>
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-dotvely-blue to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;