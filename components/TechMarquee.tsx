import React from 'react';
import { TECH_STACK } from '../constants';

const TechMarquee: React.FC = () => {
  return (
    <div className="w-full py-12 bg-dotvely-black border-y border-dotvely-glassBorder relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dotvely-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dotvely-black to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee gap-16 items-center">
        {/* Tripled to ensure smooth infinite loop */}
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-500 hover:text-dotvely-blue transition-colors duration-300 group cursor-default">
            <tech.icon className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,112,243,0.8)] transition-all" />
            <span className="font-display font-bold text-xl uppercase tracking-wider">{tech.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;