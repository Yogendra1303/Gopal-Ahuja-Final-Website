import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

target = r'\{\/\* D\. Track Record \(Glass Gallery\) \*\/.*?\{\/\* E\. Market Reports \(Fan Carousel\) \*\/'

new_section = """{/* D. Track Record (Glass Gallery) */}
        <section id="portfolio" className="w-full bg-[#FFFFFF] py-20 md:py-24 border-b border-gray-100 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl text-black font-extrabold tracking-tight">Execution & Deployments</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card 1 */}
                <div className="group cursor-pointer">
                  <div className="w-full aspect-[16/10] bg-gray-50 border border-gray-200 rounded-lg mb-6 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop" alt="Dubai 2026 Tactical Symphony" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl text-black font-extrabold mb-3 leading-snug">Dubai 2026: The Tactical Symphony</h3>
                  <span className="text-[#C8102E] text-xs font-bold tracking-widest uppercase hover:text-[#a60d24] transition-colors">EXPLORE METRICS &rarr;</span>
                </div>
                
                {/* Card 2 */}
                <div className="group cursor-pointer">
                  <div className="w-full aspect-[16/10] bg-gray-50 border border-gray-200 rounded-lg mb-6 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2940&auto=format&fit=crop" alt="Waterfront Sovereign Alignment" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl text-black font-extrabold mb-3 leading-snug">Waterfront Sovereign Alignment</h3>
                  <span className="text-[#C8102E] text-xs font-bold tracking-widest uppercase hover:text-[#a60d24] transition-colors">EXPLORE METRICS &rarr;</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* E. Market Reports (Fan Carousel) */}"""

content = re.sub(target, new_section, content, flags=re.DOTALL)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
