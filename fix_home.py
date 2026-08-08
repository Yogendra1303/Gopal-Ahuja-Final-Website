import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

replacement = """
        {/* Client Success / Testimonials */}
        <section className='w-full bg-[#F9FAFB] py-20 md:py-24 px-6 md:px-12 border-t border-gray-200'>
          <div className='max-w-7xl mx-auto'>
            
            {/* Section Header */}
            <div className='text-center max-w-2xl mx-auto mb-16'>
              <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-4 block'>
                Investor Success
              </span>
              <h2 className='text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-4'>
                Trusted by global funds and private wealth.
              </h2>
              <p className='text-gray-600 text-base md:text-lg'>
                Don't just take my word for it. Hear from the investors who have navigated Dubai's market with absolute precision.
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
              <button className='bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all shadow-md hover:shadow-xl flex items-center gap-3'>
                Discuss Your Strategy <span className='text-lg leading-none'>&rarr;</span>
              </button>
            </div>

          </div>
        </section>

        {/* F. The Inner Circle (Newsletter) */}"""

content = content.replace("        {/* F. The Inner Circle (Newsletter) */}", replacement)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
