import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { SectionId } from '../types';

const TerminalContact: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to Dotvely Secure Terminal v1.0.4', 'Please authenticate to proceed.']);
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const command = input.trim();
    setHistory(prev => [...prev, `> ${command}`]);
    setInput('');
    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      setHistory(prev => [...prev, `Identifying user: ${command}...`]);
      
      setTimeout(() => {
        setHistory(prev => [...prev, 'Identity confirmed.', 'Initializing secure handshake with WhatsApp Protocol...']);
        
        setTimeout(() => {
          setHistory(prev => [...prev, 'ACCESS GRANTED. Redirecting...']);
          window.open(WHATSAPP_LINK, '_blank');
          setIsProcessing(false);
          // Keep focus
          setTimeout(() => inputRef.current?.focus(), 100);
        }, 800);
      }, 800);
    }, 600);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 px-6 flex flex-col items-center justify-center relative">
        <div className="mb-12 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Start a Project</h2>
            <p className="text-gray-500">Enter the matrix to connect.</p>
        </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl bg-black border border-gray-800 rounded-lg shadow-2xl shadow-dotvely-blue/10 overflow-hidden font-mono text-sm md:text-base cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="bg-gray-900/50 border-b border-gray-800 p-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-gray-500 text-xs flex items-center gap-1">
            <Terminal size={12} />
            guest@dotvely-hq:~
          </div>
          <div className="w-8" /> 
        </div>

        {/* Terminal Body */}
        <div 
            ref={scrollRef}
            className="p-6 h-64 overflow-y-auto space-y-2 text-gray-300 scroll-smooth relative"
        >
          {history.map((line, i) => (
            <div key={i} className={`${line.startsWith('>') ? 'text-white' : 'text-dotvely-blue/80'}`}>
              {line}
            </div>
          ))}
          
          <div className="flex items-center gap-2 mt-2 relative">
             <span className="text-green-500 flex-shrink-0">{'>'}</span>
             
             {/* Visual Input Simulation */}
             <div className="flex-1 relative flex items-center flex-wrap">
                 {/* Render text */}
                 <span className="text-white break-all">
                    {input}
                 </span>
                 
                 {/* Blinking Block Cursor */}
                 {!isProcessing && (
                     <span className="cursor-blink inline-block w-2.5 h-4 md:h-5 bg-green-500 ml-[1px] shadow-[0_0_8px_rgba(34,197,94,0.6)] align-middle" />
                 )}

                 {/* Placeholder */}
                 {input.length === 0 && !isProcessing && (
                     <span className="absolute left-0 text-gray-700 pointer-events-none">
                         Enter your name...
                     </span>
                 )}
                 {isProcessing && input.length === 0 && (
                     <span className="absolute left-0 text-gray-700 pointer-events-none">
                         Processing...
                     </span>
                 )}
             </div>

             {/* Hidden Real Input */}
             <form onSubmit={handleSubmit} className="absolute inset-0 w-full h-full opacity-0">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isProcessing}
                    className="w-full h-full cursor-text"
                    autoFocus
                    autoComplete="off"
                />
                <button type="submit" className="hidden" />
             </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalContact;