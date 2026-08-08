import re

# 1. Update Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    home = f.read()

home = home.replace(
    '<div className="absolute inset-0 bg-gradient-to-b from-[#108944]/90 to-[#074D24]/95 pointer-events-none z-10" />',
    '<div className="absolute inset-0 bg-gradient-to-b from-[#108944] via-[#108944]/40 to-[#074D24]/50 pointer-events-none z-10" />'
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home)

# 2. Update About.tsx
with open('src/pages/About.tsx', 'r') as f:
    about = f.read()

# Left column
about = about.replace(
    '<span className="font-sans text-[#C8102E] text-[10px] tracking-[0.3em] font-bold uppercase mb-10 block">Document // 01 &mdash; The Insider\'s Lens</span>',
    '<span className="text-[#C8102E] text-xs font-mono tracking-widest uppercase mb-10 block">DOCUMENT // 01 &mdash; THE INSIDER\'S LENS</span>'
)
about = about.replace(
    '<h1 className="font-sans text-5xl md:text-7xl lg:text-5xl text-black font-extrabold tracking-[-0.04em] leading-[1.05] mb-8">\n                I don\'t just advise.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">I architect.</span>\n              </h1>',
    '<h2 className="text-6xl md:text-8xl font-extrabold text-black tracking-tight leading-none mb-8">I don\'t just advise.<br/><span className="text-gray-300">I architect.</span></h2>'
)
about = about.replace(
    '<p className="font-sans text-gray-500 text-lg md:text-xl lg:text-2xl font-light max-w-lg leading-relaxed tracking-[0.01em]">',
    '<p className="text-gray-600 text-xl max-w-lg mt-6 leading-relaxed">'
)

# Right column
about = about.replace(
    '<div className="relative w-full max-w-[420px] aspect-[4/5] bg-white p-2 md:p-3 border border-gray-200 group shadow-2xl shadow-black/50 rounded-none">',
    '<div className="relative w-full max-w-[420px] aspect-[4/5] bg-gray-50 border border-gray-200 flex items-center justify-center group">'
)
# We will just remove the red borders and the inside div that has the asset
# Replace the whole block
right_frame_old = '''<div className="relative w-full max-w-[420px] aspect-[4/5] bg-white p-2 md:p-3 border border-gray-200 group shadow-2xl shadow-black/50 rounded-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                
                <div className="w-full h-full relative overflow-x-hidden bg-zinc-900/50 border border-gray-200 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <span className="text-[#C8102E] font-sans text-[10px] tracking-[0.3em] uppercase z-10">Asset // Founder.jpg</span>
                </div>
              </div>'''

right_frame_new = '''<div className="aspect-[4/5] bg-gray-50 border border-gray-200 relative flex items-center justify-center w-full max-w-[420px]">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-300" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gray-300" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gray-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-300" />
                <span className="text-gray-400 font-mono text-xs">Asset // Founder.jpg</span>
              </div>'''

about = about.replace(right_frame_old, right_frame_new)

with open('src/pages/About.tsx', 'w') as f:
    f.write(about)

# 3. Update Header.tsx Drawer
with open('src/components/Header.tsx', 'r') as f:
    header = f.read()

header = header.replace(
    'className="fixed inset-0 bg-[#108944]/90 backdrop-blur-md z-[90]"',
    'className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity"'
)

header = header.replace(
    'className="fixed top-0 right-0 w-full md:w-[480px] h-screen bg-[#108944]/90 border-l border-white/20 z-[100] flex flex-col p-8 md:p-12 overflow-y-auto"',
    'className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col p-8 md:p-12 z-[101] transform transition-transform"'
)

header = header.replace(
    '<span className="font-sans text-[#C8102E] text-[10px] tracking-[0.2em] uppercase">Initiate Advisory</span>\n                <button onClick={() => setIsAdvisoryOpen(false)} className="text-white/80 hover:text-[#C8102E] transition-colors">\n                  <X size={24} strokeWidth={1} />\n                </button>',
    '<span className="font-sans text-[#C8102E] text-[10px] tracking-[0.2em] uppercase hidden">Initiate Advisory</span>\n                <button onClick={() => setIsAdvisoryOpen(false)} className="absolute top-8 right-8 text-black hover:text-[#C8102E]">\n                  <X size={24} strokeWidth={2} />\n                </button>'
)

header = header.replace(
    '<h2 className="text-4xl text-white font-bold tracking-tight mb-4 leading-tight">ESTABLISH<br />CONNECTION</h2>\n                <p className="text-white/80 font-light text-sm leading-relaxed mb-12">',
    '<h2 className="text-black text-4xl font-extrabold mb-4">ESTABLISH<br />CONNECTION</h2>\n                <p className="text-gray-600 text-sm mb-8">'
)

header = header.replace(
    '<label className="font-sans text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2 block">Institutional Email</label>\n                  <input type="email" placeholder="partner@institution.com" className="w-full bg-white border border-gray-200 p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#C8102E] transition-colors rounded-none text-sm" />',
    '<label className="text-gray-500 font-mono text-xs mb-2 block tracking-wider">INSTITUTIONAL EMAIL</label>\n                  <input type="email" placeholder="partner@institution.com" className="w-full bg-gray-50 border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] mb-6" />'
)

header = header.replace(
    '<label className="font-sans text-white/80 text-[10px] tracking-[0.2em] uppercase mb-2 block">Inquiry Allocation Parameters (Optional)</label>\n                  <textarea rows={5} placeholder="Specify asset classes or yield parameters of interest..." className="w-full bg-white border border-gray-200 p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#C8102E] transition-colors rounded-none text-sm resize-none" />',
    '<label className="text-gray-500 font-mono text-xs mb-2 block tracking-wider">INQUIRY ALLOCATION PARAMETERS (OPTIONAL)</label>\n                  <textarea rows={5} placeholder="Specify asset classes or yield parameters of interest..." className="w-full bg-gray-50 border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] mb-6 resize-none" />'
)

header = header.replace(
    '<button type="submit" className="w-full bg-[#C8102E] text-white p-4 mt-4 font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-red-700 hover:text-white transition-all duration-300 flex justify-center items-center gap-2 rounded-none">\n                  <span>&rarr;</span> Submit Advisory Request\n                </button>',
    '<button type="submit" className="w-full bg-[#C8102E] text-white font-bold tracking-widest py-4 mt-auto hover:bg-red-700 transition-colors uppercase">\n                  Submit Advisory Request\n                </button>'
)

header = header.replace(
    '<div className="mt-auto pt-12 border-t border-white/20 flex justify-between items-center">\n                <span className="font-sans text-[10px] text-white/80 tracking-[0.2em] uppercase">Secure Advisory Channel</span>\n                <span className="font-sans text-[10px] text-white/80 tracking-[0.2em] uppercase">&copy; 2026 UTC</span>\n              </div>',
    '<div className="mt-4 pt-6 border-t border-gray-200 flex justify-between items-center">\n                <span className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">SECURE ADVISORY CHANNEL</span>\n                <span className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">&copy; 2026 UTC</span>\n              </div>'
)

with open('src/components/Header.tsx', 'w') as f:
    f.write(header)

print("Applied fixes")
