"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { YieldChart } from '@/components/YieldChart';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { articles } from '@/data/articleData';

const tiers = [
  { name: "Type 1 (Ultra-Luxury)", baseNsa: 1200 },
  { name: "Type 2 (Premium)", baseNsa: 750 },
  { name: "Type 3 (Affordable)", baseNsa: 472.50 }
];


const marketData: Record<string, { emirate: string; bua: string; yield: string; growth: string }> = {
  'Palm Jumeirah': { emirate: 'Dubai, UAE', bua: 'AED 8,070', yield: '5.8%', growth: '+9.4%' },
  'Downtown Dubai': { emirate: 'Dubai, UAE', bua: 'AED 2,996', yield: '6.2%', growth: '+7.1%' },
  'Dubai Marina': { emirate: 'Dubai, UAE', bua: 'AED 2,625', yield: '7.1%', growth: '+6.5%' },
  'Dubai Hills Estate': { emirate: 'Dubai, UAE', bua: 'AED 2,896', yield: '6.5%', growth: '+8.2%' },
  'Jumeirah Village Circle (JVC)': { emirate: 'Dubai, UAE', bua: 'AED 1,510', yield: '7.8%', growth: '+10.2%' },
  'Saadiyat Island': { emirate: 'Abu Dhabi, UAE', bua: 'AED 3,400', yield: '6.0%', growth: '+8.0%' }
};

export default function Insights() {
  const [selectedArea, setSelectedArea] = useState('Palm Jumeirah');
  const currentData = marketData[selectedArea];

  const [tierIndex, setTierIndex] = useState(2);
  const [landPrice, setLandPrice] = useState(340);
  const [isTierMenuOpen, setIsTierMenuOpen] = useState(false);
  const [lhsIndex, setLhsIndex] = useState(0);
  const [rhsIndex, setRhsIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Split articles for the two carousels
  const midPoint = Math.ceil(articles.length / 2);
  const lhsArticles = articles.length > 0 ? articles.slice(0, midPoint) : [];
  const rhsArticles = articles.length > 1 ? articles.slice(midPoint) : (articles.length === 1 ? articles : []);


  const currentTier = tiers[tierIndex];
  const baseNsa = currentTier.baseNsa;
  const hardCost = baseNsa + landPrice;
  const gdv = hardCost * 1.54; 
  const softCost = gdv * 0.09; 
  const tdc = hardCost + softCost;
  const profit = gdv - tdc;
  const roi = (profit / tdc) * 100;

  const formatCurrency = (val: number) => "AED " + val.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});

  // Dynamic Bar Widths
  const landPct = (landPrice / tdc) * 100;
  const hardPct = (baseNsa / tdc) * 100;
  const softPct = (softCost / tdc) * 100;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Market Insights & Forecasting',
    description: 'Expert research, market trends, and financial modeling for Dubai real estate investments.',
    url: 'https://www.gopalahuja.com/insights'
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header activeRoute="insights" />
      <div className="relative z-10">
        {/* Page Header */}
        <section className="relative w-full max-w-7xl mx-auto pt-40 px-6 md:px-12 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-2 border-[#C8102E] pl-6 mb-6">
              <span className="font-sans text-[#C8102E] text-[10px] md:text-[11px] font-semibold tracking-[0.3em] uppercase block">Intelligence // 02 — Data & Analytics</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-gray-900 max-w-4xl border-l-2 border-transparent pl-6 leading-[1.1] mb-6">
              Market Insights & Forecasting.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl border-l-2 border-transparent pl-6 leading-relaxed mb-4">
              Institutional-grade research for private capital. Explore our latest market yields, development economics, and structural trends shaping the next cycle of ultra-luxury and premium real estate across Dubai and the broader GCC.
            </p>
            <p className="text-base text-gray-500 font-light max-w-3xl border-l-2 border-transparent pl-6 leading-relaxed">
              From evaluating the historical performance of prime waterfront assets on Palm Jumeirah and Jumeirah Bay Island to forecasting capital inflow vectors, our insights provide a definitive edge. Understand the underlying metrics — price-to-rent ratios, development margins, and sovereign wealth allocations — that separate speculative noise from sustained value creation.
            </p>
          </motion.div>
        </section>

        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 relative z-10 flex flex-col lg:flex-row gap-6 "
        >
          {/* LHS Carousel Container */}
          <div className="w-full lg:w-2/3 flex flex-col relative h-full">
            <div className="flex-1 relative overflow-x-hidden bg-white border border-gray-200 group hover:border-gray-200 transition-colors min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lhsIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex-1 p-8 md:p-12 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-sans text-[#C8102E] text-[10px] tracking-widest uppercase mb-4 block">{lhsArticles[lhsIndex].tag || 'Market Insight'}</span>
                    <h3 className="text-2xl md:text-3xl text-black font-extrabold mb-4 leading-tight">{lhsArticles[lhsIndex].title}</h3>
                    <p className="text-gray-500 text-sm md:text-base max-w-3xl mb-8">
                      {lhsArticles[lhsIndex].description}
                    </p>
                    
                    <div className="aspect-[21/9] w-full mb-12 overflow-hidden bg-white relative border border-gray-200">
                       {lhsArticles[lhsIndex].image ? (
                         <img src={lhsArticles[lhsIndex].image} alt={lhsArticles[lhsIndex].title} className="w-full h-full object-cover" />
                       ) : (
                         <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                       )}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-200">
                    <a href={`/insights/${lhsArticles[lhsIndex].slug}`} className="font-sans text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase hover:text-red-700 transition-colors">
                      READ FULL ARTICLE &rarr;
                    </a>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setLhsIndex(prev => (prev === 0 ? lhsArticles.length - 1 : prev - 1))}
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-red-700 hover:border-[#C8102E] transition-colors"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button 
                        onClick={() => setLhsIndex(prev => (prev === lhsArticles.length - 1 ? 0 : prev + 1))}
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-red-700 hover:border-[#C8102E] transition-colors"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RHS Carousel Container */}
          <div className="w-full lg:w-1/3 flex flex-col relative h-full">
            <div className="flex-1 relative overflow-x-hidden bg-white border border-gray-200 group hover:border-gray-200 transition-colors min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={rhsIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex-1 p-8 md:p-12 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-sans text-[#C8102E] text-[10px] tracking-[0.3em] uppercase mb-6 block">{rhsArticles[rhsIndex].tag || 'Market Insight'}</span>
                    
                    {rhsArticles[rhsIndex].image ? (
                      <div className="aspect-[4/3] w-full mb-6 overflow-hidden bg-white relative border border-gray-200">
                         <img src={rhsArticles[rhsIndex].image} alt={rhsArticles[rhsIndex].title} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] w-full mb-6 bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                        No Image
                      </div>
                    )}
                    
                    <h3 className="text-xl text-black font-extrabold mb-4 leading-tight">{rhsArticles[rhsIndex].title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {rhsArticles[rhsIndex].description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-200">
                    <a href={`/insights/${rhsArticles[rhsIndex].slug}`} className="font-sans text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase hover:text-red-700 transition-colors">
                      READ FULL ARTICLE &rarr;
                    </a>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setRhsIndex(prev => (prev === 0 ? rhsArticles.length - 1 : prev - 1))}
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-red-700 hover:border-[#C8102E] transition-colors"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button 
                        onClick={() => setRhsIndex(prev => (prev === rhsArticles.length - 1 ? 0 : prev + 1))}
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-red-700 hover:border-[#C8102E] transition-colors"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Research Library Section (PDFs) */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-black font-extrabold mb-6 tracking-tight">
              Research Library
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-4xl leading-relaxed">
              Explore research, strategic analysis, and practical frameworks covering investment trends, development strategy, and land acquisition across Dubai's real estate market.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: "RESEARCH",
                title: "Investment Intelligence",
                desc: "Research exploring global capital flows, investor behaviour, emerging market trends, and the factors shaping long-term investment opportunities across Dubai's real estate market.",
                pdfUrl: "/assets/The Rise of Chinese Capital.pdf",
                filename: "Chinese_Capital_in_Dubai_Real_Estate.pdf"
              },
              {
                category: "FRAMEWORK",
                title: "Development Insights",
                desc: "Strategic frameworks covering procurement, governance, contractor selection, project execution, and development best practices for real estate projects.",
                pdfUrl: "/assets/Contractor Selection Framework.pdf",
                filename: "Dubai_Contractor_Procurement_and_Governance.pdf"
              },
              {
                category: "ANALYSIS",
                title: "Acquisition Strategy",
                desc: "Analytical frameworks for land evaluation, due diligence, zoning considerations, pricing benchmarks, and structured investment decision-making.",
                pdfUrl: "/assets/Land Due Diligence.pdf",
                filename: "Dubai_Plot_Options_Data_Analysis.pdf"
              }
            ].map((report, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-200 p-8 md:p-10 flex flex-col justify-between min-h-[360px] rounded-none group hover:border-[#C8102E] transition-colors shadow-sm"
              >
                <div>
                  <span className="font-sans text-[#C8102E] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                    {report.category}
                  </span>
                  <h3 className="text-2xl md:text-[26px] text-black font-extrabold mb-4 leading-snug">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                    {report.desc}
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    const event = new CustomEvent('openLeadCapture', { 
                      detail: { 
                        title: report.title, 
                        description: 'Enter your email address below to download this exclusive research report.',
                        intent: `Download Report: ${report.title}`,
                        fileUrl: report.pdfUrl,
                        filename: report.filename,
                        isNewsletter: false
                      } 
                    });
                    window.dispatchEvent(event);
                  }}
                  className="inline-flex items-center gap-2 font-sans text-[#C8102E] text-xs font-bold tracking-[0.2em] uppercase hover:text-red-700 transition-colors mt-auto w-max cursor-pointer"
                >
                  Explore Research &rarr;
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Advanced Underwriting Engine */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32 flex flex-col xl:flex-row gap-16 relative z-10">
          
          {/* A. Left Column (The Brief) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full xl:w-5/12"
          >
            <h2 className="text-4xl text-black font-extrabold tracking-tight uppercase mb-6">Real-Time Underwriting Engine</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Evaluate absolute capital potential through our algorithmic forecasting engine, integrating dynamic build costs and current GCC yield curves.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <span className="font-sans text-[#C8102E] text-sm">01</span>
                <div>
                  <h4 className="text-black font-extrabold mb-2 uppercase tracking-wide text-sm">Asset Class Selection</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Establish base build costs by defining the target development tier.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-sans text-[#C8102E] text-sm">02</span>
                <div>
                  <h4 className="text-black font-extrabold mb-2 uppercase tracking-wide text-sm">Land Economics</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Input target acquisition parameters to generate structural feasibility.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-sans text-[#C8102E] text-sm">03</span>
                <div>
                  <h4 className="text-black font-extrabold mb-2 uppercase tracking-wide text-sm">Yield Execution</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Extract projected absolute profit margins and development ROI.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* B. Right Column (The High-End Terminal UI) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full xl:w-7/12"
          >
            <div className="bg-white border-t-2 border-[#C8102E] border-x border-b border-gray-200 relative overflow-x-hidden rounded-none">
              {/* System Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center rounded-none">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-none animate-pulse" />
                  <span className="font-sans text-gray-900 text-[10px] tracking-widest uppercase">Engine Online</span>
                </div>
                <span className="font-sans text-gray-500 text-[10px] tracking-widest uppercase">Model v2.4</span>
              </div>

              {/* Interactive Input Zone */}
              <div className="p-5 md:p-8 pb-4 md:pb-4">
                {/* Asset Tier Selector */}
                <div className="mb-8 relative">
                  <label className="font-sans text-gray-500 text-[10px] tracking-widest uppercase mb-3 block">01 // Select Asset Tier</label>
                  <button 
                    onClick={() => setIsTierMenuOpen(!isTierMenuOpen)}
                    className="w-full bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-gray-200 transition-colors rounded-none"
                  >
                    <span className="text-black font-extrabold text-sm">{currentTier.name} - Base AED {currentTier.baseNsa.toFixed(2)}/sq.ft</span>
                    <span className="text-gray-500">&darr;</span>
                  </button>
                  <AnimatePresence>
                    {isTierMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-2 z-20 shadow-2xl"
                      >
                        {tiers.map((tier, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setTierIndex(idx);
                              setIsTierMenuOpen(false);
                            }}
                            className={`w-full text-left p-4 text-sm font-bold transition-colors hover:bg-gray-50 ${tierIndex === idx ? 'text-[#C8102E]' : 'text-gray-500 hover:text-red-700'}`}
                          >
                            {tier.name} - Base AED {tier.baseNsa.toFixed(2)}/sq.ft
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tactical Stepper (Land Price) */}
                <div className="mb-8">
                  <label className="font-sans text-gray-500 text-[10px] tracking-widest uppercase mb-3 block">02 // Target Land Price (AED/SQ.FT)</label>
                  <div className="flex items-center bg-white border border-gray-200 p-2 rounded-none">
                    <button 
                      onClick={() => setLandPrice(p => Math.max(0, p - 10))}
                      className="w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-500 hover:text-red-700 hover:bg-gray-100 transition-colors text-lg border border-gray-200 rounded-none"
                    >&minus;</button>
                    <div className="flex-1 text-center">
                      <span className="font-sans text-4xl text-gray-900 tracking-tight">{landPrice}</span>
                    </div>
                    <button 
                      onClick={() => setLandPrice(p => p + 10)}
                      className="w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-500 hover:text-red-700 hover:bg-gray-100 transition-colors text-lg border border-gray-200 rounded-none"
                    >&#43;</button>
                  </div>
                </div>

                {/* Visual Data Bar (Cost Breakdown) */}
                <div className="mb-6">
                  <div className="flex justify-between font-sans text-[9px] text-gray-500 uppercase tracking-widest mb-2">
                    <span>Land</span>
                    <span>Hard Cost</span>
                    <span>Soft Cost</span>
                  </div>
                  <div className="w-full h-2 flex gap-1">
                    <div className="h-full bg-[#C8102E] transition-all duration-300 rounded-none" style={{ width: `${landPct}%` }} />
                    <div className="h-full bg-zinc-600 transition-all duration-300 rounded-none" style={{ width: `${hardPct}%` }} />
                    <div className="h-full bg-zinc-800 transition-all duration-300 rounded-none" style={{ width: `${softPct}%` }} />
                  </div>
                </div>
              </div>

              {/* The Financial Ledger */}
              <div className="bg-white p-5 md:p-8 border-t border-gray-200 rounded-none">
                <div className="flex justify-between items-end border-b border-dashed border-gray-200 py-3">
                  <span className="text-gray-500 text-sm">Base Construction (NSA)</span>
                  <span className="font-sans text-gray-900 text-sm">{formatCurrency(baseNsa)}</span>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-gray-200 py-3">
                  <span className="text-gray-500 text-sm">Total Hard Costs</span>
                  <span className="font-sans text-gray-900 text-sm">{formatCurrency(hardCost)}</span>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-gray-200 py-3">
                  <span className="text-gray-500 text-sm">Target Selling Price (GDV)</span>
                  <span className="font-sans text-gray-900 text-sm">{formatCurrency(gdv)}</span>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-gray-200 py-3">
                  <span className="text-gray-500 text-sm">Total Development Cost</span>
                  <span className="font-sans text-[#C8102E] text-sm">{formatCurrency(tdc)}</span>
                </div>

                {/* The Yield Matrix (Massive Reveal) */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
                  <div className="bg-[#C8102E]/10 border border-[#C8102E]/30 p-6 flex flex-col rounded-none">
                    <span className="font-sans text-[#C8102E] text-[9px] tracking-[0.2em] uppercase mb-2">Net Absolute Profit</span>
                    <span className="font-sans text-[#C8102E] text-2xl md:text-3xl tracking-tight">
                      <AnimatedNumber value={profit} prefix="AED " fractionDigits={2} />
                    </span>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-6 flex flex-col rounded-none">
                    <span className="font-sans text-gray-500 text-[9px] tracking-[0.2em] uppercase mb-2">Target ROI</span>
                    <span className="font-sans text-gray-900 text-2xl md:text-3xl tracking-tight">
                      <AnimatedNumber value={roi} suffix="%" fractionDigits={1} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* Spatial Intelligence Section */}
        <section className='w-full bg-[#FFFFFF] py-20 md:py-28 px-6 relative overflow-hidden border-t border-gray-100'>
          <div className='max-w-7xl mx-auto'>
            {/* SECTION HEADER */}
            <div className='text-center max-w-3xl mx-auto mb-14'>
              <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-3 block'>Spatial Intelligence</span>
              <h2 className='text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-5'>Macro-Market Allocation Map</h2>
              <p className='text-gray-600 text-base md:text-lg leading-relaxed'>Explore Dubai's investment landscape through an interactive intelligence map. Select a district to compare pricing, rental yields, capital appreciation, and market performance.</p>
            </div>

            {/* INTERACTIVE MAP + METRICS LAYOUT */}
            <div className='flex flex-col xl:flex-row gap-8 items-stretch'>

              {/* LEFT: Interactive SVG Map */}
              <div className='w-full xl:w-3/5 relative'>
                <div className='relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F8FAF9] to-[#EEF2F0] border border-gray-200 shadow-lg'>
                  {/* Grid overlay */}
                  <div className='absolute inset-0 opacity-20 bg-[radial-gradient(#0D6323_0.5px,transparent_0.5px)] [background-size:20px_20px]' />

                  <svg viewBox="0 0 600 500" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
                    {/* Dubai district zones as interactive regions */}
                    {Object.keys(marketData).map((area, i) => {
                      const isActive = selectedArea === area;
                      const zones: Record<string, { path: string; labelX: number; labelY: number }> = {
                        'Palm Jumeirah': { path: 'M80,220 L130,180 L180,190 L190,240 L170,280 L120,290 L70,260 Z', labelX: 130, labelY: 240 },
                        'Downtown Dubai': { path: 'M260,180 L330,160 L370,200 L360,260 L300,280 L250,240 Z', labelX: 310, labelY: 220 },
                        'Dubai Marina': { path: 'M100,310 L170,290 L210,320 L200,370 L150,390 L90,360 Z', labelX: 150, labelY: 340 },
                        'Dubai Hills Estate': { path: 'M340,280 L420,260 L460,310 L440,360 L370,370 L330,330 Z', labelX: 395, labelY: 320 },
                        'Jumeirah Village Circle (JVC)': { path: 'M220,330 L290,310 L330,350 L310,400 L250,410 L210,380 Z', labelX: 270, labelY: 365 },
                        'Saadiyat Island': { path: 'M440,120 L520,100 L560,150 L540,210 L470,220 L430,180 Z', labelX: 495, labelY: 160 }
                      };
                      const zone = zones[area];
                      if (!zone) return null;

                      return (
                        <g key={area} className="cursor-pointer" onClick={() => setSelectedArea(area)}>
                          <motion.path
                            d={zone.path}
                            fill={isActive ? '#0D6323' : '#E5E7EB'}
                            stroke={isActive ? '#0D6323' : '#9CA3AF'}
                            strokeWidth={isActive ? 2.5 : 1}
                            initial={false}
                            animate={{
                              fill: isActive ? '#0D6323' : '#E5E7EB',
                              scale: isActive ? 1.02 : 1,
                            }}
                            whileHover={{ fill: isActive ? '#0D6323' : '#C8102E20', stroke: '#C8102E', strokeWidth: 2 }}
                            transition={{ duration: 0.3 }}
                            className="origin-center"
                          />
                          <text
                            x={zone.labelX}
                            y={zone.labelY - 8}
                            textAnchor="middle"
                            className={`text-[10px] font-bold uppercase tracking-wide pointer-events-none select-none ${isActive ? 'fill-white' : 'fill-gray-600'}`}
                          >
                            {area.length > 18 ? area.substring(0, 16) + '…' : area}
                          </text>
                          <text
                            x={zone.labelX}
                            y={zone.labelY + 8}
                            textAnchor="middle"
                            className={`text-[9px] pointer-events-none select-none ${isActive ? 'fill-white/80' : 'fill-gray-400'}`}
                          >
                            {marketData[area].bua}
                          </text>
                          {isActive && (
                            <motion.circle
                              cx={zone.labelX}
                              cy={zone.labelY - 20}
                              r="4"
                              fill="#C8102E"
                              initial={{ scale: 0 }}
                              animate={{ scale: [1, 1.4, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* Map title */}
                    <text x="300" y="470" textAnchor="middle" className="fill-gray-400 text-[10px] font-bold uppercase tracking-widest select-none">Dubai Investment Corridors</text>

                    {/* Compass indicator */}
                    <g transform="translate(540, 440)">
                      <circle r="18" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                      <text textAnchor="middle" y="5" className="fill-gray-600 text-[11px] font-bold select-none">N</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* RIGHT: Active District Intelligence Panel */}
              <div className='w-full xl:w-2/5 flex flex-col gap-5'>

                {/* District name & selector */}
                <div className='relative'>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className='w-full appearance-none bg-white border-2 border-gray-200 text-black px-5 py-4 pr-12 text-base rounded-xl focus:outline-none focus:border-[#0D6323] transition-all cursor-pointer font-bold tracking-tight'
                  >
                    {Object.keys(marketData).map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' />
                </div>

                {/* Emirate badge */}
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-[#0D6323]' />
                  <span className='text-xs text-gray-500 font-medium tracking-wide uppercase'>{currentData.emirate}</span>
                </div>

                {/* Primary Metric: BUA Valuation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`bua-${selectedArea}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='bg-gradient-to-br from-[#0D6323] to-[#0a5520] p-8 rounded-xl text-white shadow-lg'
                  >
                    <span className='text-[10px] font-bold tracking-widest uppercase text-white/70 mb-2 block'>Median BUA Valuation</span>
                    <div className='text-4xl md:text-5xl font-extrabold tracking-tight mb-1'>{currentData.bua}</div>
                    <span className='text-sm text-white/60'>per sq. ft.</span>
                  </motion.div>
                </AnimatePresence>

                {/* Secondary Metrics Grid */}
                <div className='grid grid-cols-2 gap-4'>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`yield-${selectedArea}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className='bg-white border border-gray-200 p-6 rounded-xl shadow-sm'
                    >
                      <span className='text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-2'>Net Rental Yield</span>
                      <div className='text-3xl font-extrabold text-black'>{currentData.yield}</div>
                    </motion.div>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`growth-${selectedArea}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className='bg-white border border-gray-200 p-6 rounded-xl shadow-sm'
                    >
                      <span className='text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-2'>Capital Growth (YoY)</span>
                      <div className='text-3xl font-extrabold text-[#0D6323]'>{currentData.growth}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%20have%20been%20reading%20your%20market%20research%20and%20would%20like%20to%20discuss%20investment%20opportunities%20in%20Dubai."
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className='w-full bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto'
                >
                  Discuss This Market &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

