with open("src/components/MeetGopalAhuja.tsx", "w") as f:
    f.write("""import React from 'react';

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
          <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-4 block'>
            Meet Gopal Ahuja
          </span>
          <h2 className='text-black text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight'>
            Partner with a <span className='text-[#C8102E] italic font-serif font-normal'>sovereign</span> real estate strategist
          </h2>
          
          <div className='space-y-6 text-gray-700 text-lg leading-relaxed mb-10'>
            <p>
              Driving institutional capital growth through algorithmic underwriting, strategic land acquisition, and masterplan development advisory for global funds, sovereign entities, and tier-one developers.
            </p>
            <p>
              For private investors, Gopal curates ultra-prime residential assets and exclusive off-market trophy properties, blending deep spatial intelligence with bespoke wealth preservation strategies.
            </p>
            <p className='text-gray-500 text-base'>
              From high-yield corridor analysis to final transaction closing, gain the tactical foresight required to navigate the UAE's most competitive real estate hubs.
            </p>
          </div>

          {/* DUAL ACTION BUTTONS */}
          <div className='flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto'>
            <button 
              onClick={handleInstitutionalClick}
              className='w-full sm:w-auto bg-[#0D6323] hover:bg-[#0a4e1b] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all shadow-sm text-center'
            >
              Institutional Advisory
            </button>
            <button 
              onClick={handlePrivateWealthClick}
              className='w-full sm:w-auto bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all text-center'
            >
              Private Wealth Allocation
            </button>
          </div>

          {/* SOCIAL LINKS ROW */}
          <div className='flex items-center gap-3'>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='w-12 h-12 rounded bg-[#F9FAFB] border border-gray-200 flex items-center justify-center text-black hover:bg-[#0D6323] hover:text-white hover:border-[#0D6323] transition-colors'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer' className='w-12 h-12 rounded bg-[#F9FAFB] border border-gray-200 flex items-center justify-center text-black hover:bg-[#0D6323] hover:text-white hover:border-[#0D6323] transition-colors'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'/></svg>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer' className='w-12 h-12 rounded bg-[#F9FAFB] border border-gray-200 flex items-center justify-center text-black hover:bg-[#0D6323] hover:text-white hover:border-[#0D6323] transition-colors'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'><path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/></svg>
            </a>
            <a href='https://youtube.com' target='_blank' rel='noreferrer' className='w-12 h-12 rounded bg-[#F9FAFB] border border-gray-200 flex items-center justify-center text-black hover:bg-[#0D6323] hover:text-white hover:border-[#0D6323] transition-colors'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'><path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>
            </a>
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
            Master Sovereign Alignment & Property Advisory
          </span>
        </div>

      </div>
    </section>
  );
}
""")
