import re

# 1. Revert Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    home_content = f.read()

home_content = home_content.replace("Deploy Capital in", "Launch Your Next")
home_content = home_content.replace("Dubai.", "Development in the UAE.")
home_content = home_content.replace("className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2'", "className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2'")

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home_content)

# 2. Revert MeetGopalAhuja.tsx
meet_content = """import React from 'react';
import { TextShimmer } from './ui/text-shimmer';

export default function MeetGopalAhujaSection() {
  const handleInstitutionalClick = () => {
    window.dispatchEvent(new CustomEvent('openContactDrawer', { detail: { mode: 'institutional' } }));
  };

  const handlePrivateWealthClick = () => {
    window.dispatchEvent(new CustomEvent('openContactDrawer', { detail: { mode: 'private' } }));
  };

  return (
    <section className='w-full bg-white py-24 px-6 md:px-12 border-t border-b border-gray-100 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
        
        {/* LEFT COLUMN: EDITORIAL CONTENT */}
        <div className='lg:col-span-7 flex flex-col items-start text-left'>
          {/* Eyebrow: Base color is Action Red, Shimmer is a softer faded pink/red */}
          <TextShimmer 
            as='span' 
            duration={3} 
            className='text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 block [--base-color:#C8102E] [--base-gradient-color:#ff8a9f]'
          >
            Meet Your Partner in Dubai
          </TextShimmer>

          {/* Main Headline: Base color is Dark Charcoal, Shimmer is Action Red */}
          <TextShimmer 
            as='h2' 
            duration={3} 
            className='text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] [--base-color:#111827] [--base-gradient-color:#C8102E]'
          >
            Work with a trusted Dubai real estate partner.
          </TextShimmer>
          
          <div className='space-y-6 mb-10 max-w-lg'>
            {/* Paragraph 1: Base color is Gray, Shimmer is Action Red */}
            <TextShimmer 
              as='p' 
              duration={3} 
              className='text-lg leading-relaxed font-normal [--base-color:#4B5563] [--base-gradient-color:#C8102E]'
            >
              My focus is simple: to help you make highly profitable real estate decisions in the UAE. Whether you are an institutional fund acquiring land for a masterplan development or a private investor looking for a luxury home, I bring you exclusive access and data-driven insights.
            </TextShimmer>

            {/* Paragraph 2: Base color is Lighter Gray, Shimmer is Action Red */}
            <TextShimmer 
              as='p' 
              duration={3} 
              className='text-base leading-relaxed font-normal [--base-color:#6B7280] [--base-gradient-color:#C8102E]'
            >
              From our first conversation to the final handover, I provide the exact market intelligence and end-to-end support you need to win in Dubai’s most competitive neighborhoods.
            </TextShimmer>
          </div>

          {/* DUAL ACTION BUTTONS */}
          <div className='flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto'>
            <button 
              onClick={handleInstitutionalClick}
              className='w-full sm:w-auto bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all shadow-sm text-center'
            >
              For Developers & Funds
            </button>
            <button 
              onClick={handlePrivateWealthClick}
              className='w-full sm:w-auto bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all text-center'
            >
              For Private Investors
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: STRUCTURED CINEMATIC PORTRAIT */}
        <div className='lg:col-span-5 flex flex-col items-center justify-center w-full px-4 sm:px-10 lg:px-0'>
          <div className='relative w-full max-w-sm aspect-[4/5] group mb-6'>
            {/* Offset Geometric Accent */}
            <div className='absolute inset-0 bg-[#0D6323] translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6'></div>
            
            {/* Main Image Container */}
            <div className='absolute inset-0 bg-gray-100 border border-gray-200 rounded-sm overflow-hidden shadow-xl z-10'>
              <img 
                src='/assets/gopal-ahuja-portrait.jpg' 
                alt='Gopal Ahuja - Real Estate Strategist'
                className='w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105'
              />
            </div>
          </div>
          
          <span className='text-xs text-gray-400 font-medium tracking-widest uppercase mt-4 z-10'>
            Founder-Led Real Estate Advisory in Dubai
          </span>
        </div>

      </div>
    </section>
  );
}
"""

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(meet_content)

