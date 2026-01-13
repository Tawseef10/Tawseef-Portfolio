import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, MapPin, Calendar, Award, Fingerprint, ScanLine } from 'lucide-react';
import { SectionId } from '../types';

const ProfileCard: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 px-6 flex justify-center items-center w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl group perspective-1000"
      >
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-dotvely-blue/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Card Chassis */}
        <div className="relative bg-[#0A0A0A] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
          
          {/* Top Security Bar */}
          <div className="h-14 bg-[#0F0F0F] border-b border-gray-800 flex items-center justify-between px-6 md:px-8">
             <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse z-10 relative" />
                    <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="font-mono text-[10px] md:text-xs text-red-500 tracking-[0.2em] uppercase">
                    Classified // Level 5 Clearance
                </span>
             </div>
             <div className="flex items-center gap-2 text-gray-600 font-mono text-xs">
                <span>ID: 884-TX</span>
                <Fingerprint size={16} />
             </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[500px]">
             
             {/* Left Column: Visual Identity */}
             <div className="md:w-5/12 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col items-center justify-center relative bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100">
                <div className="absolute inset-0 bg-dotvely-blue/5 mix-blend-overlay" />
                
                {/* Avatar Scanner Frame */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8 group-hover:scale-105 transition-transform duration-700">
                    {/* Rotating Rings */}
                    <div className="absolute inset-0 border border-gray-700 rounded-full opacity-50" />
                    <div className="absolute inset-[-10px] border border-gray-800 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-[-20px] border border-gray-800/50 rounded-full border-dotted animate-[spin_15s_linear_infinite_reverse]" />
                    
                    {/* Image Container */}
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-dotvely-blue/30 relative z-10 bg-black">
                         {/* Placeholder Avatar / Silhouette */}
                         <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
                            <User size={80} className="text-gray-600" />
                         </div>
                         
                         {/* Scan Line */}
                         <motion.div 
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[2px] bg-dotvely-blue/80 shadow-[0_0_20px_#0070f3] z-20"
                         />
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dotvely-blue/10 to-transparent z-10" />
                    </div>

                    {/* Hud Markers */}
                    <ScanLine className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dotvely-blue/50" size={24} />
                </div>
                
                <div className="font-mono text-center z-10">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight">
                        Tawseef Ahmad
                    </h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-dotvely-blue/30 bg-dotvely-blue/5">
                        <Terminal size={12} className="text-dotvely-blue" />
                        <span className="text-dotvely-blue text-[10px] tracking-widest uppercase font-bold">
                            System Architect
                        </span>
                    </div>
                </div>
             </div>

             {/* Right Column: Data Dossier */}
             <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-between bg-black/50">
                <div className="space-y-8">
                    {/* Header Text */}
                    <div className="relative">
                        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-dotvely-blue/50 to-transparent hidden md:block" />
                        <p className="font-mono text-xs text-gray-500 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gray-700 rounded-sm" />
                            SUBJECT_BIO_DATA
                        </p>
                        <p className="text-xl md:text-2xl text-gray-200 font-display leading-relaxed">
                            "I engineer <span className="text-dotvely-blue font-bold">digital dominance</span>. 
                            While others use templates, I write the code that breaks them. 
                            At 17, I'm defining the new standard for web luxury."
                        </p>
                    </div>

                    {/* Data Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <StatBox 
                            icon={Calendar} 
                            label="Operational Age" 
                            value="17 Years" 
                            sub="Gen-Z Native"
                        />
                        <StatBox 
                            icon={Award} 
                            label="Education Protocol" 
                            value="SOSE Alumni" 
                            sub="Specialized Excellence"
                        />
                        <StatBox 
                            icon={MapPin} 
                            label="Base of Operations" 
                            value="New Delhi, IN" 
                            sub="UTC+05:30"
                        />
                        <StatBox 
                            icon={Terminal} 
                            label="Core Competency" 
                            value="Full Stack" 
                            sub="React / Node / WebGL"
                        />
                    </div>
                </div>

                {/* Footer Status */}
                <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between">
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className={`w-1 h-3 rounded-sm ${i <= 4 ? 'bg-dotvely-blue' : 'bg-gray-800'}`} />
                        ))}
                     </div>
                     <span className="font-mono text-[10px] text-gray-600 uppercase">
                         System Status: Nominal
                     </span>
                </div>
             </div>
          </div>
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white/10 rounded-tl-xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/10 rounded-br-xl pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

interface StatBoxProps {
    icon: React.ElementType;
    label: string;
    value: string;
    sub: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon: Icon, label, value, sub }) => (
  <div className="group flex items-start gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800/50 hover:border-dotvely-blue/40 hover:bg-gray-900/80 transition-all duration-300">
     <div className="p-2 bg-black rounded border border-gray-800 group-hover:border-dotvely-blue/50 transition-colors">
        <Icon size={18} className="text-gray-400 group-hover:text-dotvely-blue transition-colors" />
     </div>
     <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-1">{label}</p>
        <p className="text-base text-white font-bold font-display">{value}</p>
        <p className="text-[10px] text-gray-600 font-mono mt-0.5 group-hover:text-dotvely-blue/70 transition-colors">{sub}</p>
     </div>
  </div>
);

export default ProfileCard;