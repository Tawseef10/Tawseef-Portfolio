import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY_POINTS } from '../constants';
import { SectionId } from '../types';

const Philosophy: React.FC = () => {
  return (
    <section id={SectionId.PHILOSOPHY} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-8">
        {/* Left Column */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-white">
              Why <span className="text-dotvely-blue">Me?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              In a digital ocean of templates and mediocrity, I architect bespoke digital experiences. 
              Dotvely Studios isn't just about code; it's about translating your vision into a 
              high-performance reality that commands attention.
            </p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 grid gap-8">
          {PHILOSOPHY_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border-b border-gray-800 pb-8 hover:border-dotvely-blue transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-dotvely-blue transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-500 font-mono text-sm uppercase tracking-wide">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;