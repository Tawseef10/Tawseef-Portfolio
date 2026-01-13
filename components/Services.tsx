import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Target, ArrowRight, Code, Layers, Layout, ChevronRight, Loader2, Lock, CheckCircle2 } from 'lucide-react';
import { SectionId } from '../types';
import { WHATSAPP_LINK } from '../constants';

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [handshakeStage, setHandshakeStage] = useState<'idle' | 'connecting' | 'verifying' | 'granted'>('idle');

  const services = [
    {
      icon: Layout,
      title: "Hyper-Visual Design",
      desc: "UI that commands attention. Glassmorphism, WebGL, and micro-interactions that feel organic.",
      tags: ["Figma", "Spline", "Rive"]
    },
    {
      icon: Code,
      title: "Elite Engineering",
      desc: "React/Next.js architecture built for 99/100 Lighthouse scores. Zero bloat, pure performance.",
      tags: ["React", "TypeScript", "Node"]
    },
    {
      icon: Layers,
      title: "Motion Systems",
      desc: "Choreographed animations that guide user psychology and reduce perceived latency.",
      tags: ["GSAP", "Framer Motion"]
    }
  ];

  const clientCriteria = [
    "Seed to Series B Startups",
    "Luxury Fashion & Interiors",
    "High-Performance SaaS",
    "Visionaries Valuing Aesthetics"
  ];

  const handleInitiate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isModalOpen) return;
    
    setIsModalOpen(true);
    setHandshakeStage('connecting');

    // Sequence for handshake animation
    setTimeout(() => setHandshakeStage('verifying'), 1200);
    setTimeout(() => setHandshakeStage('granted'), 2400);
    setTimeout(() => {
        window.open(WHATSAPP_LINK, '_blank');
        setTimeout(() => {
            setIsModalOpen(false);
            setHandshakeStage('idle');
        }, 500);
    }, 3200);
  };

  return (
    <section id={SectionId.SERVICES} className="py-12 px-2 md:px-0 w-full max-w-6xl mx-auto relative z-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 border-b border-gray-800 pb-6 flex items-end justify-between"
      >
        <div>
           <div className="flex items-center gap-2 text-dotvely-blue mb-2">
             <Shield className="animate-pulse" size={18} />
             <span className="font-mono text-xs uppercase tracking-widest">System Modules // Available</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
             Service <span className="text-gray-500">Protocols</span>
           </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Services List */}
        <div className="lg:col-span-2 grid gap-4">
            {services.map((s, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-neutral-900/40 backdrop-blur-sm border border-gray-800 hover:border-dotvely-blue p-6 rounded-lg transition-all duration-300 overflow-hidden"
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-dotvely-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-6">
                        <div className="w-12 h-12 bg-black border border-gray-700 rounded-lg flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(0,112,243,0.3)] transition-shadow">
                            <s.icon className="text-white group-hover:text-dotvely-blue transition-colors" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                {s.title}
                                <ChevronRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-dotvely-blue" size={16} />
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                            <div className="flex gap-2">
                                {s.tags.map(t => (
                                    <span key={t} className="text-[10px] font-mono uppercase px-2 py-1 bg-black border border-gray-800 rounded text-gray-500 group-hover:text-dotvely-blue group-hover:border-dotvely-blue/30 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Right Col: Target Profile & CTA */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col h-full"
        >
            <div className="relative h-full bg-black border border-gray-800 rounded-lg p-6 flex flex-col justify-between overflow-hidden">
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,112,243,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,112,243,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <Target className="text-red-500 animate-pulse" size={20} />
                        <span className="font-mono text-xs text-red-500 uppercase tracking-widest">Target Lock // ICP</span>
                    </div>

                    <h4 className="text-white font-bold mb-4">Are you a fit?</h4>
                    <ul className="space-y-3">
                        {clientCriteria.map((c, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                                <div className="w-1.5 h-1.5 bg-dotvely-blue rounded-full" />
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative z-10 mt-8 pt-8 border-t border-gray-800">
                    <p className="text-xs text-gray-500 font-mono mb-4">
                        LIMITED_BANDWIDTH: Only 2 slots/month
                    </p>
                    
                    {/* Interactive Glitch Button */}
                    <motion.button 
                        onClick={handleInitiate}
                        className="group w-full relative overflow-hidden bg-dotvely-blue text-white p-4 rounded hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(0,112,243,0.3)]"
                        whileHover={{ 
                            skewX: [0, -5, 5, -2, 2, 0],
                            x: [0, 2, -2, 1, -1, 0],
                            transition: {
                                duration: 0.3,
                                repeat: Infinity,
                                repeatType: "mirror"
                            }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Corruption Overlays */}
                        <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:animate-[shimmer_1s_infinite] pointer-events-none" />
                        
                        <span className="relative z-10 flex items-center justify-between font-mono font-bold uppercase tracking-wider">
                            <span>Initiate Protocol</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Security Handshake Modal */}
      <AnimatePresence>
        {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                />
                
                {/* Modal Window */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, border: '1px solid rgba(0, 112, 243, 0)' }}
                    animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        borderColor: handshakeStage === 'granted' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(0, 112, 243, 0.5)'
                    }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative z-10 w-full max-w-md bg-black rounded-xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                    {/* CRT Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20" />
                    
                    <div className="flex flex-col items-center justify-center text-center space-y-8 relative z-30">
                        {/* Animated Icon Status */}
                        <div className="relative">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className={`absolute inset-0 blur-xl rounded-full opacity-40 ${
                                    handshakeStage === 'granted' ? 'bg-green-500' : 
                                    handshakeStage === 'verifying' ? 'bg-yellow-500' : 'bg-dotvely-blue'
                                }`} 
                            />
                            
                            <div className="relative w-20 h-20 bg-black border border-gray-800 rounded-full flex items-center justify-center shadow-2xl">
                                {handshakeStage === 'connecting' && (
                                    <Loader2 className="w-8 h-8 text-dotvely-blue animate-spin" />
                                )}
                                {handshakeStage === 'verifying' && (
                                    <Lock className="w-8 h-8 text-yellow-500 animate-pulse" />
                                )}
                                {handshakeStage === 'granted' && (
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                )}
                            </div>
                        </div>

                        {/* Status Text */}
                        <div className="space-y-2 font-mono">
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                                {handshakeStage === 'connecting' && <span className="animate-pulse">Establishing Link...</span>}
                                {handshakeStage === 'verifying' && <span className="text-yellow-500">Verifying Encryption...</span>}
                                {handshakeStage === 'granted' && <span className="text-green-500">Access Granted</span>}
                            </h3>
                            <div className="h-6">
                                <p className="text-xs text-gray-500">
                                    {handshakeStage === 'connecting' && 'Pinging secure servers [::1]'}
                                    {handshakeStage === 'verifying' && 'Handshake Protocol: RSA-4096'}
                                    {handshakeStage === 'granted' && 'Redirecting to secure channel...'}
                                </p>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div 
                                className={`h-full ${handshakeStage === 'granted' ? 'bg-green-500' : 'bg-dotvely-blue'}`}
                                initial={{ width: '0%' }}
                                animate={{ 
                                    width: handshakeStage === 'connecting' ? '30%' : 
                                           handshakeStage === 'verifying' ? '70%' : '100%' 
                                }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;