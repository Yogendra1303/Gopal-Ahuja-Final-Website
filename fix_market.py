import re

with open('src/components/MarketIntelligence.tsx', 'r') as f:
    content = f.read()

# I will just write a python script to replace the entire MarketIntelligence component because it's easier and safer
replacement = """export function MarketIntelligence() {
  const [activeIndex, setActiveIndex] = useState(3);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videoBriefs.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videoBriefs.length) % videoBriefs.length);
  };

  return (
    <>
      <section id="insights" className="w-full bg-[#FFFFFF] py-24 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-4 text-center md:text-left max-w-6xl mx-auto">Market Intelligence</h2>
          <p className="text-gray-600 text-lg max-w-6xl mx-auto mb-16 text-center md:text-left">Access our quarterly underwriting models and predictive analytics.</p>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reports.map((report, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-8 rounded-md hover:border-[#C8102E] transition-colors shadow-sm flex flex-col group">
                <span className="text-[#C8102E] font-bold text-sm tracking-widest uppercase mb-3">Q3 2026</span>
                <h3 className="text-black font-bold text-2xl mb-4">{report.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{report.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#C8102E] font-bold text-sm group-hover:text-red-700 transition-colors w-max">
                  DOWNLOAD PDF &darr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFFFFF] py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-4 text-center max-w-6xl mx-auto">Tactical Perspectives</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center">Step onto the site. Watch our latest cinematic market breakdowns and architectural tours.</p>
        </div>

        <div className="w-full max-w-7xl mx-auto relative h-[600px] flex items-center justify-center mb-12">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {videoBriefs.map((brief, index) => {
                const offset = index - activeIndex;
                let normalizedOffset = offset;
                const half = Math.floor(videoBriefs.length / 2);
                if (normalizedOffset > half) normalizedOffset -= videoBriefs.length;
                if (normalizedOffset < -half) normalizedOffset += videoBriefs.length;
                
                const isActive = normalizedOffset === 0;
                
                let x = 0;
                let y = 0;
                let rotate = 0;
                let zIndex = 50;
                let scale = 1;

                if (normalizedOffset === 0) {
                  x = 0; y = 0; rotate = 0; zIndex = 40; scale = 1;
                } else if (normalizedOffset === 1) {
                  x = 40; y = 8; rotate = 3; zIndex = 30; scale = 0.95;
                } else if (normalizedOffset === -1) {
                  x = -40; y = 8; rotate = -3; zIndex = 30; scale = 0.95;
                } else if (normalizedOffset === 2) {
                  x = 80; y = 24; rotate = 6; zIndex = 20; scale = 0.85;
                } else if (normalizedOffset === -2) {
                  x = -80; y = 24; rotate = -6; zIndex = 20; scale = 0.85;
                } else if (normalizedOffset === 3) {
                  x = 120; y = 48; rotate = 12; zIndex = 10; scale = 0.75;
                } else if (normalizedOffset === -3) {
                  x = -120; y = 48; rotate = -12; zIndex = 10; scale = 0.75;
                }

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
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={brief.image} alt={brief.title} className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
                    
                    {/* Top Left Pill */}
                    <div className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20 ${isActive ? 'bg-[#139039] text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                      {brief.label}
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white font-bold text-xl md:text-2xl leading-tight z-20">
                      {brief.title}
                    </div>

                    {/* Play Button Overlay */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md border border-white/50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-30 ${isActive ? 'bg-[#C8102E] border-[#C8102E] scale-110' : 'bg-white/20 group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:scale-110'}`}>
                      <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
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
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#139039] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
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
"""

content = re.sub(r'export function MarketIntelligence\(\) \{.*', replacement, content, flags=re.DOTALL)

with open('src/components/MarketIntelligence.tsx', 'w') as f:
    f.write(content)

print("Updated MarketIntelligence")
