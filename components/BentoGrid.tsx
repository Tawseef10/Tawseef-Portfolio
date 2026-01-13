import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { SectionId } from '../types';

const BentoGrid: React.FC = () => {
  return (
    <section id={SectionId.WORK} className="py-24 px-4 md:px-12 w-full max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-800 pb-6 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 text-dotvely-blue mb-2">
             <Cpu className="animate-pulse" size={18} />
             <span className="font-mono text-xs uppercase tracking-widest">System Protocols // Active</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Deployed <span className="text-gray-500">Systems</span>
          </h2>
        </div>
        <div className="hidden md:block text-right">
             <p className="font-mono text-xs text-gray-500">SECURE_CONNECTION: ENCRYPTED</p>
             <p className="font-mono text-xs text-dotvely-blue">LATENCY: 4ms</p>
        </div>
      </motion.div>

      {/* Tech Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[650px]">
        {PROJECTS.map((project, idx) => {
          // First item takes 2x2 space on desktop, others take 1x1
          const isLarge = idx === 0;
          
          return (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative bg-black border border-gray-900 rounded-sm overflow-hidden block
                ${isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}
                /* Enforce height on mobile since absolute children have no height */
                h-[400px] md:h-auto
              `}
            >
                {/* Techy Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-800 group-hover:border-dotvely-blue transition-colors z-20" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-800 group-hover:border-dotvely-blue transition-colors z-20" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-800 group-hover:border-dotvely-blue transition-colors z-20" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-800 group-hover:border-dotvely-blue transition-colors z-20" />

                {/* Animated Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,112,243,0.05)_51%,transparent_52%)] bg-[length:100%_8px] pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* HUD Overlay Content */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                    {/* Top HUD */}
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                             <span className="font-mono text-[10px] text-dotvely-blue uppercase tracking-widest">
                                 PRJ_ID: 0{project.id}
                             </span>
                             <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                                 SEC_LEVEL: MAX
                             </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                             {project.live && (
                                 <div className="flex items-center gap-2 bg-black/50 backdrop-blur border border-gray-800 px-2 py-1 rounded-full">
                                     <span className="relative flex h-2 w-2">
                                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                     </span>
                                     <span className="font-mono text-[10px] text-green-500 uppercase">Online</span>
                                 </div>
                             )}
                             <div className="bg-dotvely-blue text-white p-2 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 md:-translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                 <ArrowUpRight size={16} />
                             </div>
                        </div>
                    </div>

                    {/* Bottom HUD */}
                    <div>
                        <h3 className={`font-display font-bold text-white mb-2 leading-none group-hover:text-dotvely-blue transition-colors duration-300
                            ${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl'}
                        `}>
                            {project.title}
                        </h3>
                        <p className={`text-gray-400 font-mono text-sm mb-4 border-l-2 border-gray-800 pl-4
                            ${isLarge ? 'w-full md:w-2/3' : 'line-clamp-2'}
                        `}>
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-400 border border-gray-800 bg-black/50">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-dotvely-blue/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default BentoGrid;