import { motion } from 'motion/react';
import { data } from '../data';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="bg-[#0D6323] w-full pt-32 pb-20 px-6 flex flex-col items-center text-center relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
          }
        }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="bg-white text-[#0D6323] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 inline-flex items-center gap-2 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[#C8102E]" />
          GLOBAL REAL ESTATE ADVISORY
        </motion.div>
        
        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Launch Your Next Development in the UAE.
        </motion.h1>
        
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          We provide international builders with the local data, zoning expertise, and strategic guidance to execute flawlessly in Dubai.
        </motion.p>
        
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button onClick={onContactClick} className="bg-[#C8102E] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2">
            PLAN YOUR EXPANSION &rarr;
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0D6323] transition-colors">
            Explore Deployment Metrics
          </button>
        </motion.div>
        
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="w-full max-w-6xl mx-auto relative aspect-[16/9] md:aspect-[2.39/1] bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <img src={data.hero.backgroundImageUrl || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop"} alt="Dubai Skyline" className="w-full h-full object-cover opacity-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
