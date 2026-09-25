import React from 'react';

export default function MeetGopalAhujaSection() {
  return (
    <section className='w-full bg-white py-16 sm:py-24 px-5 sm:px-12 border-t border-b border-gray-100 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center'>

        {/* LEFT COLUMN: EDITORIAL CONTENT */}
        <div className='lg:col-span-7 flex flex-col items-start text-left'>
          {/* Eyebrow */}
          <span
            className='text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 block text-[#C8102E]'
          >
            MEET YOUR TRUSTED ADVISOR IN DUBAI
          </span>

          {/* Main Headline */}
          <h2
            className='text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-[1.1] text-[#111827] text-balance'
          >
            Your Strategic Real Estate Advisor in Dubai.
          </h2>

          <div className='space-y-5 sm:space-y-6 mb-8 sm:mb-10 max-w-xl'>
            <p
              className='text-base sm:text-lg leading-relaxed font-normal text-[#4B5563]'
            >
              I help developers, family offices, and private investors make confident real estate decisions in Dubai. Whether you're acquiring development land, expanding your portfolio, or securing a luxury residence, I provide the local insight, strategic guidance, and trusted network to help you invest with clarity.
            </p>

            <p
              className='text-sm sm:text-base leading-relaxed font-normal text-[#6B7280]'
            >
              From the first conversation to the final transaction, I work alongside you to identify the right opportunities, reduce risk, and ensure every investment is backed by local expertise.
            </p>
          </div>

          {/* DUAL ACTION BUTTONS */}
          <div className='flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto'>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejc0Afplc4AzZaLNZ7OkZBEzh86VDRwTwB5D5krI0JdpXj8w/viewform"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className='w-full sm:w-auto bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 sm:py-3.5 rounded-full transition-all shadow-md hover:shadow-xl text-center inline-block'
            >
              For Developers & Funds
            </a>
            <a
              href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%27m%20interested%20in%20exploring%20real%20estate%20investment%20opportunities%20in%20Dubai.%20I%20would%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="nofollow noopener noreferrer"
              className='w-full sm:w-auto bg-transparent border border-gray-300 hover:border-black text-black hover:bg-black hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 sm:py-3.5 rounded-full transition-all text-center inline-block shadow-sm'
            >
              For Private Investors
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: STRUCTURED CINEMATIC PORTRAIT */}
        <div className='lg:col-span-5 flex flex-col items-center justify-center w-full px-0 sm:px-10 lg:px-0'>
          <div className='relative w-full max-w-sm aspect-[4/5] group mb-6'>
            {/* Offset Geometric Accent */}
            <div className='absolute inset-0 bg-[#0D6323] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-xl transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5'></div>

            {/* Main Image Container */}
            <div className='absolute inset-0 bg-gray-100 border border-gray-200 rounded-xl overflow-hidden shadow-xl z-10'>
              <img
                src='/assets/photo1.jpeg'
                alt='Gopal Ahuja - Real Estate Strategist'
                className='w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105'
              />
            </div>
          </div>

          <span className='text-[10px] sm:text-xs text-gray-400 font-medium tracking-widest uppercase mt-2 sm:mt-4 z-10'>
            Founder-Led Real Estate Advisory in Dubai
          </span>
        </div>

      </div>
    </section>
  );
}

