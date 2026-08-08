import { motion } from 'motion/react';
import { data } from '../data';

export function Ticker() {
  const items = [...data.partnersTicker, ...data.partnersTicker, ...data.partnersTicker];

  return (
    <section className="py-12 border-b border-gray-200 overflow-hidden bg-white">
      <div className="relative w-full flex items-center">
        {/* Gradients for fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
          className="flex items-center gap-16 whitespace-nowrap px-8"
        >
          {items.map((partner, idx) => (
            <span
              key={idx}
              className="text-gray-900 font-sans font-bold text-3xl tracking-[0.2em] uppercase"
            >
              {partner} {idx !== items.length - 1 && <span className="ml-16 text-[#C8102E]">•</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
