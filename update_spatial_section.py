with open('src/pages/Insights.tsx', 'r') as f:
    content = f.read()

old_section = """        {/* Spatial Intelligence Section */}
        <section className='w-full bg-[#FFFFFF] py-20 px-6 relative overflow-hidden border-t border-gray-100'>
          <div className='max-w-7xl mx-auto'>
            {/* SECTION HEADER */}
            <div className='text-center max-w-2xl mx-auto mb-16'>
              <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-3 block'>Spatial Intelligence</span>
              <h2 className='text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-4'>Macro-Market Allocation Map</h2>
              <p className='text-gray-600 text-base'>Real-time pricing matrices and build-up area (BUA) valuations across Dubai's tier-one master corridors.</p>
            </div>
        
            {/* FINANCIAL UNDERWRITING CALLOUT BAR */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16'>
              <div className='bg-[#FDF2F2] border border-red-100 p-6 rounded-lg'>
                <span className='text-[10px] text-[#C8102E] font-bold tracking-widest uppercase block mb-1'>Net Absolute Profit</span>
                <div className='text-3xl md:text-4xl font-extrabold text-black'>AED 326.14M</div>
              </div>
              <div className='bg-[#F9FAFB] border border-gray-200 p-6 rounded-lg'>
                <span className='text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-1'>Target ROI</span>
                <div className='text-3xl md:text-4xl font-extrabold text-black'>35.3%</div>
              </div>
            </div>
        
            {/* MAP CONTAINER & INTERACTIVE CORRIDOR TILES */}
            <div className='relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-[#F5F2EC] border border-gray-200 flex items-center justify-center p-8'>
              <div className='absolute inset-0 opacity-40 bg-[radial-gradient(#139039_1px,transparent_1px)] [background-size:16px_16px]'></div>
              <div className='relative z-10 text-center max-w-md bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/60'>
                <h3 className='text-black font-bold text-xl mb-2'>Interactive Dubai Spatial Grid</h3>
                <p className='text-gray-600 text-sm mb-6'>Select a master corridor above to review live BUA pricing and sovereign yield projections.</p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openContactDrawer'))} className='bg-[#0D6323] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded hover:bg-[#0a4e1b] transition-colors'>Request Zone Data</button>
              </div>
            </div>
          </div>
        </section>"""

new_section = """        {/* Spatial Intelligence Section */}
        <section className='w-full bg-[#FFFFFF] py-20 px-6 relative overflow-hidden border-t border-gray-100'>
          <div className='max-w-7xl mx-auto'>
            {/* SECTION HEADER */}
            <div className='text-center max-w-2xl mx-auto mb-10'>
              <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-3 block'>Spatial Intelligence</span>
              <h2 className='text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-4'>Macro-Market Allocation Map</h2>
              <p className='text-gray-600 text-base'>Select target UAE jurisdictions and master corridors to analyze live spatial liquidity and valuation matrices.</p>
            </div>
        
            {/* UAE CITY & AREA SELECTOR CONTROLS */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-12'>
              <select className='w-full sm:w-1/2 bg-[#F9FAFB] border border-gray-200 text-black px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#C8102E] transition-all'>
                <option value='dubai'>Dubai, UAE</option>
                <option value='abudhabi'>Abu Dhabi, UAE</option>
                <option value='sharjah'>Sharjah, UAE</option>
              </select>
              <select className='w-full sm:w-1/2 bg-[#F9FAFB] border border-gray-200 text-black px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#C8102E] transition-all'>
                <option value='palm'>Palm Jumeirah</option>
                <option value='downtown'>Downtown Dubai</option>
                <option value='marina'>Dubai Marina</option>
                <option value='hills'>Dubai Hills Estate</option>
                <option value='jvc'>Jumeirah Village Circle (JVC)</option>
              </select>
            </div>
        
            {/* REPLACED INSTITUTIONAL METRICS CARDS */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16'>
              <div className='bg-[#FDF2F2] border border-red-100 p-6 rounded-lg'>
                <span className='text-[10px] text-[#C8102E] font-bold tracking-widest uppercase block mb-1'>Median BUA Valuation</span>
                <div className='text-3xl md:text-4xl font-extrabold text-black'>AED 2,850 <span className='text-lg font-normal text-gray-500'>/ sq.ft.</span></div>
              </div>
              <div className='bg-[#F9FAFB] border border-gray-200 p-6 rounded-lg'>
                <span className='text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-1'>Net Corridor Yield</span>
                <div className='text-3xl md:text-4xl font-extrabold text-black'>6.85% <span className='text-lg font-normal text-gray-500'>Average</span></div>
              </div>
            </div>
        
            {/* MAP CONTAINER & INTERACTIVE CORRIDOR VIEW */}
            <div className='relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-[#F5F2EC] border border-gray-200 flex items-center justify-center p-8'>
              <div className='absolute inset-0 opacity-40 bg-[radial-gradient(#0D6323_1px,transparent_1px)] [background-size:16px_16px]'></div>
              <div className='relative z-10 text-center max-w-md bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/60'>
                <h3 className='text-black font-bold text-xl mb-2'>Active Corridor Matrix Loaded</h3>
                <p className='text-gray-600 text-sm mb-6'>Spatial mapping configured for selected UAE master community coordinates.</p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openContactDrawer'))} className='bg-[#0D6323] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded hover:bg-[#0a4e1b] transition-colors'>Request Full Underwriting PDF</button>
              </div>
            </div>
          </div>
        </section>"""

if old_section in content:
    content = content.replace(old_section, new_section)
    with open('src/pages/Insights.tsx', 'w') as f:
        f.write(content)
    print("Successfully replaced spatial intelligence section.")
else:
    print("Could not find the target section to replace.")
