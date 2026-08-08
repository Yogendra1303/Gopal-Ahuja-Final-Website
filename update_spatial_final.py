import re

with open('src/pages/Insights.tsx', 'r') as f:
    content = f.read()

# Add marketData constant
market_data_str = """
const marketData: Record<string, { emirate: string; bua: string; yield: string; growth: string }> = {
  'Palm Jumeirah': { emirate: 'Dubai, UAE', bua: 'AED 8,070', yield: '5.8%', growth: '+9.4%' },
  'Downtown Dubai': { emirate: 'Dubai, UAE', bua: 'AED 2,996', yield: '6.2%', growth: '+7.1%' },
  'Dubai Marina': { emirate: 'Dubai, UAE', bua: 'AED 2,625', yield: '7.1%', growth: '+6.5%' },
  'Dubai Hills Estate': { emirate: 'Dubai, UAE', bua: 'AED 2,896', yield: '6.5%', growth: '+8.2%' },
  'Jumeirah Village Circle (JVC)': { emirate: 'Dubai, UAE', bua: 'AED 1,510', yield: '7.8%', growth: '+10.2%' },
  'Saadiyat Island': { emirate: 'Abu Dhabi, UAE', bua: 'AED 3,400', yield: '6.0%', growth: '+8.0%' }
};
"""

if "const marketData" not in content:
    content = content.replace("export function Insights() {", market_data_str + "\nexport function Insights() {")


# Replace ChevronDown in imports if not present
if "ChevronDown" not in content:
    content = content.replace("ChevronRight } from 'lucide-react';", "ChevronRight, ChevronDown } from 'lucide-react';")

# Replace component start to include selectedArea state
if "const [selectedArea" not in content:
    content = content.replace("export function Insights() {", "export function Insights() {\n  const [selectedArea, setSelectedArea] = useState('Palm Jumeirah');\n  const currentData = marketData[selectedArea];\n")

old_section = """        {/* Spatial Intelligence Section */}
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

new_section = """        {/* Spatial Intelligence Section */}
        <section className='w-full bg-[#FFFFFF] py-20 px-6 relative overflow-hidden border-t border-gray-100'>
          <div className='max-w-7xl mx-auto'>
            {/* SECTION HEADER */}
            <div className='text-center max-w-2xl mx-auto mb-10'>
              <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-3 block'>Spatial Intelligence</span>
              <h2 className='text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-4'>Macro-Market Allocation Map</h2>
              <p className='text-gray-600 text-base'>Select target UAE jurisdictions and master corridors to analyze live spatial liquidity and valuation matrices.</p>
            </div>
        
            {/* CUSTOM DROPDOWN SELECTOR BAR */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12'>
              <div className='relative w-full sm:w-1/2'>
                <select 
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className='w-full appearance-none bg-[#F9FAFB] border border-gray-200 text-black px-4 py-3.5 pr-10 text-sm rounded-sm focus:outline-none focus:border-[#C8102E] transition-all cursor-pointer font-medium'
                >
                  {Object.keys(marketData).map((area) => (
                    <option key={area} value={area}>{area} ({marketData[area].emirate})</option>
                  ))}
                </select>
                <ChevronDown className='absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none' />
              </div>
            </div>
        
            {/* CENTERED FOCAL METRICS GRID */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16'>
              {/* Secondary Metric 1 */}
              <div className='bg-[#F9FAFB] border border-gray-200 p-6 rounded-lg flex flex-col justify-between shadow-sm'>
                <span className='text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-1'>Net Rental Yield</span>
                <div className='text-3xl font-extrabold text-black'>{currentData.yield}</div>
              </div>
        
              {/* PRIMARY CENTERED FOCAL CARD (MEDIAN BUA) */}
              <div className='bg-[#FDF2F2] border-2 border-red-200 p-8 rounded-xl flex flex-col justify-between shadow-md text-center transform md:-translate-y-2'>
                <span className='text-xs text-[#C8102E] font-extrabold tracking-widest uppercase block mb-1'>Median BUA Valuation — {selectedArea}</span>
                <div className='text-4xl md:text-5xl font-extrabold text-black my-2'>{currentData.bua} <span className='text-base font-normal text-gray-500'>/ sq.ft.</span></div>
                <span className='text-[11px] text-gray-500'>Live Index Matrix Updated Q3 2026</span>
              </div>
        
              {/* Secondary Metric 2 */}
              <div className='bg-[#F9FAFB] border border-gray-200 p-6 rounded-lg flex flex-col justify-between shadow-sm'>
                <span className='text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-1'>Capital Growth (YoY)</span>
                <div className='text-3xl font-extrabold text-black'>{currentData.growth}</div>
              </div>
            </div>
        
            {/* MAP CONTAINER & INTERACTIVE CORRIDOR VIEW */}
            <div className='relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-[#F5F2EC] border border-gray-200 flex items-center justify-center p-8'>
              <div className='absolute inset-0 opacity-40 bg-[radial-gradient(#0D6323_1px,transparent_1px)] [background-size:16px_16px]'></div>
              <div className='relative z-10 text-center max-w-md bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/60'>
                <h3 className='text-black font-bold text-xl mb-2'>{selectedArea} Corridor Loaded</h3>
                <p className='text-gray-600 text-sm mb-6'>Spatial liquidity and valuation matrix active for {currentData.emirate}.</p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openContactDrawer'))} className='bg-[#0D6323] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded hover:bg-[#0a4e1b] transition-colors'>Request Full Underwriting PDF</button>
              </div>
            </div>
          </div>
        </section>"""

if old_section in content:
    content = content.replace(old_section, new_section)
    with open('src/pages/Insights.tsx', 'w') as f:
        f.write(content)
    print("Success: Final state-driven section added.")
else:
    print("Failed to find target block")

