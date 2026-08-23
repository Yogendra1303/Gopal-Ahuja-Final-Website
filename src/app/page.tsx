"use client";
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MarketIntelligence } from '@/components/MarketIntelligence';
import { ScrollExpansionVideo } from '@/components/ui/scroll-expansion-video';
import MeetGopalAhujaSection from '@/components/MeetGopalAhuja';
import ExpertiseServicesSection from '@/components/ExpertiseServicesSection';
import { HeroMeshWrapper } from '@/components/ui/hero-section-with-smooth-bg-shader';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      <Header activeRoute="home" />

      <div className="relative z-10">
        {/* B. The Premium Hero Section */}
        <HeroMeshWrapper>
          {/* Pill Badge */}
          <span className='bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5 flex items-center gap-2 shadow-lg border border-slate-700/50'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#C8102E]'></span>
            Global Real Estate Advisory
          </span>

          {/* Unified, Premium Headline */}
          <h1 className='w-full flex flex-col items-center justify-center text-center mb-4 gap-2'>
            <span className='text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-950 drop-shadow-xs'>
              Dubai Real Estate <span className='text-[115%] inline-block'>Investment</span>
            </span>
            <span className='text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 drop-shadow-xs'>
              & Strategic Advisory.
            </span>
          </h1>

          {/* Protected Subheadline */}
          <p className='text-slate-900 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6 font-semibold text-center'>
            I help global investors make confident real estate decisions in Dubai through local expertise, strategic guidance, and trusted execution.
          </p>

          {/* CTA Button */}
          <a 
            href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%20would%20like%20to%20discuss%20expanding%20my%20real%20estate%20investments%20in%20Dubai.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className='group bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all shadow-[0_10px_25px_-5px_rgba(200,16,46,0.4)] hover:shadow-xl flex items-center gap-2 cursor-pointer'
          >
            Plan Your Expansion <span className='group-hover:translate-x-1 transition-transform duration-200'>&rarr;</span>
          </a>
        </HeroMeshWrapper>
        
        <ScrollExpansionVideo />

        {/* C. The Ticker (Continuous Marquee) */}
        <div className="w-full py-8 border-y border-gray-200 bg-[#FFFFFF] overflow-hidden flex">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap min-w-max"
          >
            <div className="flex gap-16 px-8 text-xl font-sans text-gray-900 uppercase tracking-[0.4em] font-medium">
              <span>EMAAR</span><span className="text-[#C8102E]">•</span><span>NAKHEEL</span><span className="text-[#C8102E]">•</span><span>DAMAC</span><span className="text-[#C8102E]">•</span><span>SOBHA</span><span className="text-[#C8102E]">•</span><span>ALDAR</span>
              <span>EMAAR</span><span className="text-[#C8102E]">•</span><span>NAKHEEL</span><span className="text-[#C8102E]">•</span><span>DAMAC</span><span className="text-[#C8102E]">•</span><span>SOBHA</span><span className="text-[#C8102E]">•</span><span>ALDAR</span>
              <span>EMAAR</span><span className="text-[#C8102E]">•</span><span>NAKHEEL</span><span className="text-[#C8102E]">•</span><span>DAMAC</span><span className="text-[#C8102E]">•</span><span>SOBHA</span><span className="text-[#C8102E]">•</span><span>ALDAR</span>
            </div>
          </motion.div>
        </div>

        <MeetGopalAhujaSection />
        <ExpertiseServicesSection />

        {/* D. Track Record (Glass Gallery) */}
        <section id="portfolio" className="w-full bg-[#FFFFFF] py-20 md:py-24 border-b border-gray-100 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 bg-[#F9FAFB] border border-gray-200 rounded-xl"
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl text-black font-extrabold tracking-tight mb-4">Featured Engagements</h2>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
                  A selection of strategic advisory engagements that demonstrate how I help investors, developers, and private clients navigate complex real estate decisions across Dubai.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card 1 */}
                <a href="/case-study/dubai-2026-strategic-market-entry" className="group cursor-pointer block">
                  <div className="w-full aspect-[16/10] bg-gray-50 border border-gray-200 rounded-lg mb-6 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop" alt="Strategic Market Entry for an International Development Fund" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl text-black font-extrabold mb-3 leading-snug">Strategic Market Entry for an International Development Fund</h3>
                  <span className="text-[#C8102E] text-xs font-bold tracking-widest uppercase hover:text-[#a60d24] transition-colors">VIEW ENGAGEMENT &rarr;</span>
                </a>
                
                {/* Card 2 */}
                <a href="/case-study/waterfront-portfolio-strategy" className="group cursor-pointer block">
                  <div className="w-full aspect-[16/10] bg-gray-50 border border-gray-200 rounded-lg mb-6 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2940&auto=format&fit=crop" alt="Waterfront Portfolio Strategy" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl text-black font-extrabold mb-3 leading-snug">Waterfront Portfolio Strategy: Structuring an Ultra-Luxury Allocation</h3>
                  <span className="text-[#C8102E] text-xs font-bold tracking-widest uppercase hover:text-[#a60d24] transition-colors">VIEW ENGAGEMENT &rarr;</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* E. Market Reports (Fan Carousel) */}
        <MarketIntelligence />


        {/* Client Success / Testimonials */}
        <section className='w-full bg-[#F9FAFB] py-20 md:py-24 px-6 md:px-12 border-t border-gray-200'>
          <div className='max-w-7xl mx-auto'>
            
            {/* Section Header */}
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-4 block'>
                CLIENT TESTIMONIALS
              </span>
              <h2 className='text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-6'>
                Trusted by Investors Who Value Expertise.
              </h2>
              <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                Hear directly from investors, developers, and business leaders who have experienced my advisory approach and trusted me to guide their real estate decisions in Dubai.
              </p>
            </div>

            {/* Testimonial Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
              
              {/* Card 1: Institutional/Developer */}
              <div className='bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative'>
                <span className='text-[#C8102E] text-6xl font-serif leading-none absolute top-6 left-8 opacity-80'>“</span>
                <p className='text-gray-700 text-base leading-relaxed mt-8 mb-8 relative z-10'>
                  Gopal’s data-driven approach entirely changed how we acquire land. His underwriting models are the sharpest we've seen in the region. Flawless execution from start to finish.
                </p>
                <div className='border-t border-gray-100 pt-4'>
                  <p className='text-black font-bold text-sm'>Managing Director</p>
                  <p className='text-gray-500 text-xs uppercase tracking-wider'>Global Development Fund</p>
                </div>
              </div>

              {/* Card 2: Private Wealth */}
              <div className='bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative'>
                <span className='text-[#C8102E] text-6xl font-serif leading-none absolute top-6 left-8 opacity-80'>“</span>
                <p className='text-gray-700 text-base leading-relaxed mt-8 mb-8 relative z-10'>
                  Finding an off-market luxury property is hard; finding an advisor who genuinely protects your wealth is harder. Gopal delivered on both with total discretion.
                </p>
                <div className='border-t border-gray-100 pt-4'>
                  <p className='text-black font-bold text-sm'>Private Investor</p>
                  <p className='text-gray-500 text-xs uppercase tracking-wider'>London, UK</p>
                </div>
              </div>

              {/* Card 3: Yield/ROI */}
              <div className='bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative'>
                <span className='text-[#C8102E] text-6xl font-serif leading-none absolute top-6 left-8 opacity-80'>“</span>
                <p className='text-gray-700 text-base leading-relaxed mt-8 mb-8 relative z-10'>
                  His foresight on the waterfront corridors yielded returns well beyond our initial projections. He doesn't just sell properties; he builds long-term strategy.
                </p>
                <div className='border-t border-gray-100 pt-4'>
                  <p className='text-black font-bold text-sm'>Portfolio Manager</p>
                  <p className='text-gray-500 text-xs uppercase tracking-wider'>European Family Office</p>
                </div>
              </div>

            </div>

            {/* High-Intent Conversion CTA */}
            <div className='flex justify-center'>
              <a 
                href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%20would%20like%20to%20discuss%20my%20investment%20strategy%20and%20understand%20how%20you%20can%20help%20me%20invest%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className='bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all shadow-md hover:shadow-xl flex items-center gap-3'
              >
                Discuss Your Strategy <span className='text-lg leading-none'>&rarr;</span>
              </a>
            </div>

          </div>
        </section>

        {/* F. The Inner Circle (Newsletter) */}
        <section className="w-full bg-[#FFFFFF] py-20 md:py-24 px-6 md:px-12 text-center relative border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="font-sans text-[#C8102E] text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase mb-6 block">PRIVATE INVESTOR BRIEFING</span>
            <h2 className="text-4xl md:text-5xl text-black font-extrabold mb-4 tracking-[-0.02em] leading-[1.1]">Exclusive Insights. Delivered Monthly.</h2>
            <p className="text-gray-500 font-light text-base md:text-lg mb-10 tracking-[0.02em] max-w-2xl md:max-w-3xl mx-auto">Join a community of investors receiving curated market intelligence, off-market opportunities, and strategic analysis before they're widely available.</p>
            
            <div className="flex flex-col sm:flex-row w-full max-w-lg mx-auto mt-10 bg-white border border-gray-200 p-0 rounded-none relative z-10 focus-within:border-[#C8102E] transition-colors">
              <input type="email" placeholder="Enter your email address" className="flex-1 bg-white text-gray-900 px-6 py-4 outline-none font-sans text-xs md:text-sm font-medium tracking-normal placeholder:text-gray-400 rounded-none border-none" />
              <button className="bg-[#C8102E] text-white px-8 py-4 font-bold uppercase tracking-[0.2em] hover:bg-red-700 transition-colors duration-300 rounded-none">Join Now</button>
            </div>
          </motion.div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
