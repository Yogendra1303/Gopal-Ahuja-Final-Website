import re

# Update Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    home = f.read()

# Replace button group
home = re.sub(
    r'<motion\.div variants=\{\{.*?\}\} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-0">.*?</motion\.div>',
    '''<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="flex justify-center items-center mb-0">
              <button onClick={() => window.dispatchEvent(new Event('openAdvisory'))} className="bg-[#C8102E] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-red-700 transition-colors text-lg tracking-wide">
                PLAN YOUR EXPANSION &rarr;
              </button>
            </motion.div>''',
    home,
    flags=re.DOTALL
)

# Replace the image container
home = re.sub(
    r'<div className="w-full max-w-6xl mx-auto relative -mt-32 z-20 aspect-\[16/9\] md:aspect-\[2\.39/1\] bg-black rounded-xl overflow-hidden shadow-2xl border border-black/10">.*?</div>',
    '''<div onClick={() => window.dispatchEvent(new Event('openAdvisory'))} className="w-full max-w-6xl mx-auto relative -mt-32 z-20 aspect-[16/9] md:aspect-[2.39/1] bg-black rounded-xl overflow-hidden shadow-2xl border border-black/10 group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop" alt="Dubai Skyline" className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:scale-110 transition-all duration-300 z-30">
            <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>''',
    home,
    flags=re.DOTALL
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home)

# Update Header.tsx
with open('src/components/Header.tsx', 'r') as f:
    header = f.read()

# Add event listener
listener = '''useEffect(() => {
    const handleOpenAdvisory = () => setIsAdvisoryOpen(true);
    window.addEventListener('openAdvisory', handleOpenAdvisory);
    return () => window.removeEventListener('openAdvisory', handleOpenAdvisory);
  }, []);'''

if 'window.addEventListener' not in header:
    header = header.replace(
        'const { scrollY } = useScroll();',
        f'const {{ scrollY }} = useScroll();\n\n  {listener}'
    )

# Replace the drawer
drawer_old = r'<motion\.div \n               initial=\{\{ x: \'100%\' \}\}\n               animate=\{\{ x: 0 \}\}\n               exit=\{\{ x: \'100%\' \}\}\n               transition=\{\{ type: \'spring\', damping: 25, stiffness: 200 \}\}\n               className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col p-8 md:p-12 z-\[101\] transform transition-transform".*?</motion\.div>'

drawer_new = '''<motion.div 
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col p-8 md:p-12 z-[101] transform transition-transform"
            >
              <button onClick={() => setIsAdvisoryOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#C8102E] transition-colors">
                <X size={24} strokeWidth={2} />
              </button>
              
              <div className="mb-8 mt-4">
                <h2 className="text-black text-4xl font-extrabold mb-4">ESTABLISH<br />CONNECTION</h2>
                <p className="text-gray-600 text-sm">Connect with our lead transition partners to request custom allocation parameters or schedule a development advisory alignment.</p>
              </div>
              
              <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-800 font-bold py-3.5 rounded-md hover:bg-gray-50 transition-all mb-6 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg> 
                Continue with Google
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <hr className="flex-grow border-gray-200"/>
                <span className="text-xs text-gray-400 font-medium uppercase">Or enter details manually</span>
                <hr className="flex-grow border-gray-200"/>
              </div>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-gray-500 font-mono text-xs mb-2 block tracking-wider">INSTITUTIONAL EMAIL</label>
                  <input type="email" placeholder="partner@institution.com" className="w-full bg-gray-50 border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] rounded-none" />
                </div>
                <div>
                  <label className="text-gray-500 font-mono text-xs mb-2 block tracking-wider">INQUIRY ALLOCATION PARAMETERS (OPTIONAL)</label>
                  <textarea rows={4} placeholder="Specify asset classes or yield parameters of interest..." className="w-full bg-gray-50 border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] rounded-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#C8102E] text-white font-bold tracking-widest py-4 mt-auto hover:bg-red-700 transition-colors uppercase">
                  Submit Advisory Request
                </button>
              </form>
              <div className="mt-4 pt-6 border-t border-gray-200 flex justify-between items-center">
                <span className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">SECURE ADVISORY CHANNEL</span>
                <span className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">&copy; 2026 UTC</span>
              </div>
            </motion.div>'''

header = re.sub(drawer_old, drawer_new, header, flags=re.DOTALL)

with open('src/components/Header.tsx', 'w') as f:
    f.write(header)

print("Applied final fixes")
