import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for the trailing cursor (The Reticle)
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Global hover detection using event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target or its parents are interactive
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-hover'); // Allow manual override

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot - Moves Instantly with Pulse and Shrink */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-dotvely-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 0.5 : [1, 1.5, 1], // Shrink on hover/click, Pulse otherwise
        }}
        transition={{
          scale: {
             repeat: (isHovering || isClicking) ? 0 : Infinity,
             duration: (isHovering || isClicking) ? 0.2 : 1.5,
             ease: "easeInOut"
          }
        }}
      />

      {/* Secondary Reticle - Follows with Physics */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center border-dotvely-blue"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 24,
          height: isHovering ? 60 : 24,
          borderColor: isHovering ? 'rgba(0, 112, 243, 0.5)' : 'rgba(0, 112, 243, 0.3)',
          borderWidth: isHovering ? 1 : 2,
          rotate: isHovering ? 90 : 0,
          scale: isClicking ? 0.8 : 1,
          backgroundColor: isHovering ? 'rgba(0, 112, 243, 0.05)' : 'transparent',
        }}
        transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
            rotate: { duration: 0.5 }
        }}
      >
        {/* Decorative Corners for "Reticle" look when not hovering */}
        <AnimatePresence>
            {!isHovering && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full relative"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-dotvely-blue/80" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-dotvely-blue/80" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[1px] bg-dotvely-blue/80" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-[1px] bg-dotvely-blue/80" />
            </motion.div>
            )}
        </AnimatePresence>

        {/* Brackets for Hover State */}
        <AnimatePresence>
            {isHovering && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="w-full h-full relative"
                >
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-dotvely-blue" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-dotvely-blue" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-dotvely-blue" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-dotvely-blue" />
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;