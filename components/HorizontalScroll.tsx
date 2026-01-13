import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Use React.Children.toArray to safely handle children and get length
  const childArray = React.Children.toArray(children);
  const total = childArray.length;

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Dynamic transform based on number of children
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(total - 1) * 85}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Mobile Layout: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-0 py-12 relative z-10">
        {childArray.map((child, idx) => (
          <div key={idx} className="w-full border-b border-gray-900/50 last:border-0">
            {child}
          </div>
        ))}
      </div>

      {/* Desktop Layout: Horizontal Scroll */}
      <section ref={targetRef} className="hidden md:block relative h-[450vh] bg-dotvely-black">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-24 px-24">
            {childArray.map((child, idx) => (
              <div key={idx} className="relative h-[80vh] w-[80vw] flex items-center justify-center rounded-3xl border border-gray-900 bg-dotvely-glass backdrop-blur-sm overflow-hidden">
                <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide p-8 flex items-center justify-center">
                    <div className="w-full max-w-6xl">
                        {child}
                    </div>
                </div>
                <div className="absolute bottom-6 right-8 font-display font-bold text-8xl text-gray-800/20 select-none z-0 pointer-events-none">
                    0{idx + 1}
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute bottom-12 left-24 right-24 h-[1px] bg-gray-900 z-20">
             <motion.div style={{ width: progressWidth }} className="h-full bg-dotvely-blue shadow-[0_0_10px_#0070f3]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScroll;