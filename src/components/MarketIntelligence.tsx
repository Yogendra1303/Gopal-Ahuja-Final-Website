import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videoBriefs = [
  {
    id: 1,
    title: "Why Downtown Dubai Still Outperforms",
    label: "MARKET INSIGHTS",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop",
    video: "/assets/AG1.MOV"
  },
  {
    id: 2,
    title: "How Off-Plan Investments Create Wealth",
    label: "INVESTMENT GUIDE",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2940&auto=format&fit=crop",
    video: "/assets/AG2.MOV"
  },
  {
    id: 3,
    title: "Inside a Luxury Waterfront Residence",
    label: "PROPERTY TOUR",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop",
    video: "/assets/AG3.MOV"
  },
  {
    id: 4,
    title: "What Every Investor Should Know Before Buying",
    label: "EXPERT ANALYSIS",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    video: "/assets/vi1.mp4"
  },
  {
    id: 5,
    title: "The Truth About Dubai Developers",
    label: "DEVELOPER REVIEW",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=2940&auto=format&fit=crop",
    video: "/assets/AG5.mp4"
  },
  {
    id: 6,
    title: "Inside Business Bay's Next Growth Phase",
    label: "AREA ANALYSIS",
    image: "https://images.unsplash.com/photo-1546412414-8035e1776c92?q=80&w=2940&auto=format&fit=crop",
    video: "/assets/AG6.MOV"
  },
  {
    id: 7,
    title: "Should You Buy Land in Dubai?",
    label: "LAND INSIGHTS",
    image: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?q=80&w=2940&auto=format&fit=crop",
    video: "/assets/AG7.mp4"
  }
];

const reports = [
  { 
    label: "MARKET INTELLIGENCE",
    title: "Chinese Capital in Dubai", 
    desc: "Explore how mainland Chinese investment is reshaping Dubai's real estate market, what investors are buying, and why this capital shift is creating long-term opportunities.",
    pdfUrl: "/assets/The Rise of Chinese Capital.pdf",
    filename: "Chinese_Capital_in_Dubai_Real_Estate.pdf"
  },
  { 
    label: "MARKET ENTRY PLAYBOOK",
    title: "Contractor Procurement Playbook", 
    desc: "Learn how experienced developers evaluate, select, and govern construction partners to reduce execution risk and protect project returns.",
    pdfUrl: "/assets/Contractor Selection Framework.pdf",
    filename: "Dubai_Contractor_Procurement_and_Governance.pdf"
  },
  { 
    label: "LAND ACQUISITION ANALYSIS",
    title: "Land Acquisition Framework", 
    desc: "A practical framework for evaluating development plots, validating critical data, and making confident land acquisition decisions.",
    pdfUrl: "/assets/Land Due Diligence.pdf",
    filename: "Dubai_Plot_Options_Data_Analysis.pdf"
  }
];

export function MarketIntelligence() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const nextSlide = () => {
    setPlayingId(null);
    setActiveIndex((prev) => (prev + 1) % videoBriefs.length);
  };

  const prevSlide = () => {
    setPlayingId(null);
    setActiveIndex((prev) => (prev - 1 + videoBriefs.length) % videoBriefs.length);
  };

  return (
    <>
      <section id="insights" className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-5 sm:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center md:text-left">
          <h2 className="text-black font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-6 text-balance">Market Insights</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed text-balance mx-auto md:mx-0">
            Explore proprietary research, market intelligence, and strategic analysis designed to help investors and developers make informed decisions in Dubai's real estate market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reports.map((report, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-8 md:p-10 rounded-md hover:border-[#C8102E] transition-colors shadow-sm flex flex-col group">
              <span className="text-[#C8102E] font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-4 block">
                {report.label}
              </span>
              <h3 className="text-black font-bold text-xl sm:text-2xl mb-4 leading-snug text-balance">{report.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-sm md:text-base">{report.desc}</p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const event = new CustomEvent('openLeadCapture', { 
                    detail: { 
                      title: report.title, 
                      description: 'Enter your details below to download this exclusive market intelligence report.',
                      intent: `Download Report: ${report.title}`,
                      fileUrl: report.pdfUrl,
                      filename: report.filename,
                      isNewsletter: false
                    } 
                  });
                  window.dispatchEvent(event);
                }}
                className="inline-flex items-center gap-2 text-[#C8102E] font-bold text-xs uppercase tracking-widest group-hover:text-red-700 transition-colors w-max cursor-pointer"
              >
                Download Report &darr;
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-5 sm:px-12 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="text-black font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 sm:mb-6 text-balance">Insights from Gopal Ahuja</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-balance">
            I share market analysis, investment strategies, and practical insights to help you navigate Dubai's real estate market with confidence.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto relative h-[450px] md:h-[600px] flex items-center justify-center mb-12">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {videoBriefs.map((brief, index) => {
                const offset = index - activeIndex;
                let normalizedOffset = offset;
                const half = Math.floor(videoBriefs.length / 2);
                if (normalizedOffset > half) normalizedOffset -= videoBriefs.length;
                if (normalizedOffset < -half) normalizedOffset += videoBriefs.length;
                
                const isActive = normalizedOffset === 0;
                const isPlaying = playingId === brief.id;
                
                let x = 0;
                let y = 0;
                let rotate = 0;
                let zIndex = 50;
                let scale = 1;

                // Create responsive offsets using percentages that are tighter on mobile
                // On mobile we reduce the horizontal spread significantly to prevent overflow
                const xOffsetBase = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40;
                
                if (normalizedOffset === 0) {
                  x = 0; y = 0; rotate = 0; zIndex = 40; scale = 1;
                } else if (normalizedOffset === 1) {
                  x = xOffsetBase; y = 8; rotate = 3; zIndex = 30; scale = 0.95;
                } else if (normalizedOffset === -1) {
                  x = -xOffsetBase; y = 8; rotate = -3; zIndex = 30; scale = 0.95;
                } else if (normalizedOffset === 2) {
                  x = xOffsetBase * 2; y = 24; rotate = 6; zIndex = 20; scale = 0.85;
                } else if (normalizedOffset === -2) {
                  x = -(xOffsetBase * 2); y = 24; rotate = -6; zIndex = 20; scale = 0.85;
                } else if (normalizedOffset === 3) {
                  x = xOffsetBase * 3; y = 48; rotate = 12; zIndex = 10; scale = 0.75;
                } else if (normalizedOffset === -3) {
                  x = -(xOffsetBase * 3); y = 48; rotate = -12; zIndex = 10; scale = 0.75;
                }

                const handleCardClick = () => {
                  if (!isActive) {
                    setActiveIndex(index);
                    setPlayingId(null);
                  } else {
                    setPlayingId(isPlaying ? null : brief.id);
                  }
                };

                return (
                  <motion.div
                    key={brief.id}
                    initial={false}
                    animate={{ 
                      x: `${x}%`,
                      y,
                      rotate, 
                      zIndex, 
                      scale 
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="absolute origin-bottom aspect-[9/14] w-[260px] md:w-[300px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-out cursor-pointer group bg-gray-900"
                    onClick={handleCardClick}
                  >
                    {isPlaying ? (
                      <video
                        src={brief.video}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover absolute inset-0 z-40 rounded-3xl"
                      />
                    ) : (
                      <>
                        <video 
                          src={`${brief.video}#t=0.001`} 
                          preload="metadata" 
                          muted 
                          playsInline 
                          className="w-full h-full object-cover absolute inset-0 pointer-events-none" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                        
                        {/* Top Left Pill */}
                        <div className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20 ${isActive ? 'bg-[#0D6323] text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                          {brief.label}
                        </div>

                        {/* Play Button Overlay */}
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveIndex(index);
                            setPlayingId(brief.id);
                          }}
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md border border-white/50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-30 ${isActive ? 'bg-[#C8102E] border-[#C8102E] scale-110' : 'bg-white/20 group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:scale-110'}`}
                        >
                          <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50 translate-y-6">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 bg-white shadow-sm text-gray-500 hover:text-[#C8102E] hover:border-[#C8102E] transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-3">
              {videoBriefs.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => {
                    setPlayingId(null);
                    setActiveIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#0D6323] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 bg-white shadow-sm text-gray-500 hover:text-[#C8102E] hover:border-[#C8102E] transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
