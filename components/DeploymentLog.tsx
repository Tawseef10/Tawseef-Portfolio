import React from 'react';
import { motion } from 'framer-motion';
import { CASE_LOGS } from '../constants';
import { SectionId, CaseLog } from '../types';
import { Activity, ArrowRight, Terminal, Cpu, Zap, BarChart3, Lock, CheckCircle2 } from 'lucide-react';

const DeploymentLog: React.FC = () => {
  return (
    <section id={SectionId.LOGS} className="py-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 border-b border-gray-800 pb-8 gap-8">
        <div>
           <motion.div 
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 text-dotvely-blue mb-2"
           >
             <Activity className="animate-pulse" size={18} />
             <span className="font-mono text-xs uppercase tracking-widest">System Performance Logs</span>
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-display font-bold text-white"
           >
             Impact <span className="text-gray-700">Report</span>
           </motion.h2>
        </div>
        
        {/* Abstract System Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full lg:w-auto">
            <StatItem icon={Zap} label="AVG_SPEEDUP" value="300%" delay={0.1} />
            <StatItem icon={Lock} label="SECURITY" value="MAX" delay={0.2} />
            <StatItem icon={Cpu} label="OPTIMIZATIONS" value="42+" delay={0.3} />
            <StatItem icon={Activity} label="SYS_UPTIME" value="99.9%" delay={0.4} />
        </div>
      </div>

      {/* Grid of Holographic Logs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {CASE_LOGS.map((log, idx) => (
           <LogCard key={log.id} log={log} index={idx} />
        ))}
      </div>
    </section>
  );
};

const StatItem: React.FC<{ icon: any, label: string, value: string, delay: number }> = ({ icon: Icon, label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col gap-1"
    >
        <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Icon size={12} />
            <span className="font-mono text-[10px] uppercase tracking-wider">{label}</span>
        </div>
        <span className="font-display font-bold text-2xl md:text-3xl text-white">{value}</span>
    </motion.div>
);

const LogCard: React.FC<{ log: CaseLog, index: number }> = ({ log, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-full"
        >
            {/* Holographic Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-dotvely-blue to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition duration-500" />
            
            <div className="relative h-full bg-black border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group-hover:border-gray-700 transition-colors duration-300">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />
                
                {/* Top Section */}
                <div className="relative z-10 mb-8">
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-mono text-xs text-dotvely-blue bg-dotvely-blue/10 px-2 py-1 rounded border border-dotvely-blue/20">
                            {log.id}
                        </span>
                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wide
                            ${log.status === 'OPTIMIZED' ? 'border-green-500/30 text-green-500 bg-green-500/10' : 
                              log.status === 'SCALED' ? 'border-purple-500/30 text-purple-500 bg-purple-500/10' : 
                              'border-blue-500/30 text-blue-500 bg-blue-500/10'}
                        `}>
                            <span className="relative flex h-1.5 w-1.5">
                              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                  log.status === 'OPTIMIZED' ? 'bg-green-400' : 
                                  log.status === 'SCALED' ? 'bg-purple-400' : 'bg-blue-400'
                              }`}></span>
                              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                                  log.status === 'OPTIMIZED' ? 'bg-green-500' : 
                                  log.status === 'SCALED' ? 'bg-purple-500' : 'bg-blue-500'
                              }`}></span>
                            </span>
                            {log.status}
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-dotvely-blue transition-colors">{log.client}</h3>
                    <p className="text-sm text-gray-500 font-mono uppercase tracking-wide">{log.type}</p>
                </div>

                {/* Middle: Problem -> Solution Visualization */}
                <div className="relative z-10 space-y-4 mb-8">
                    {/* The Issue */}
                    <div className="relative pl-4 border-l border-red-500/30">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-black border border-red-500 rounded-full" />
                        <p className="text-[10px] text-red-400 font-mono uppercase mb-1">Detected Issue</p>
                        <p className="text-gray-400 text-sm leading-snug">{log.issue}</p>
                    </div>

                    {/* The Fix */}
                    <div className="relative pl-4 border-l border-dotvely-blue/30">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-black border border-dotvely-blue rounded-full" />
                        <p className="text-[10px] text-dotvely-blue font-mono uppercase mb-1">Executed Protocol</p>
                        <p className="text-gray-300 text-sm leading-snug">{log.solution}</p>
                    </div>
                </div>

                {/* Bottom: Impact */}
                <div className="relative z-10 pt-6 border-t border-gray-800">
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart3 size={14} className="text-gray-500" />
                        <span className="text-xs font-mono text-gray-500 uppercase">Measurable Impact</span>
                    </div>
                    <div className="text-lg text-white font-medium flex items-center gap-3">
                         <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-dotvely-blue group-hover:to-purple-400 transition-all">
                             {log.impact.split(' ')[0]}
                         </span>
                         <span className="text-sm text-gray-400 leading-tight">
                             {log.impact.split(' ').slice(1).join(' ')}
                         </span>
                    </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                    <Terminal size={40} className="text-dotvely-blue" />
                </div>
            </div>
        </motion.div>
    );
};

export default DeploymentLog;