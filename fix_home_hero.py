import re

with open('src/pages/Home.tsx', 'r') as f:
    home = f.read()

# Update Hero section
# 1. Update the background image and gradient overlay
home = home.replace(
    '<div className="absolute inset-0 z-0">\n            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop" alt="Dubai Background" className="w-full h-full object-cover opacity-20" />\n            <div className="absolute inset-0 bg-gradient-to-b from-[#00843D]/50 via-black/50 to-black/90 pointer-events-none" />\n          </div>',
    '<div className="absolute inset-0 z-0">\n            <div className="absolute inset-0 bg-gradient-to-b from-[#108944]/90 to-[#074D24]/95 pointer-events-none z-10" />\n            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop" alt="Dubai Background" className="w-full h-full object-cover object-center bg-cover bg-center" />\n          </div>'
)

# 2. Add bg-[#108944] to the hero section container
home = home.replace(
    '<section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 z-10 pt-20">',
    '<section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 z-10 pt-20 bg-[#108944]">'
)

# 3. Update Typography
# Eyebrow
home = home.replace(
    '<motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="font-sans text-white text-[10px] md:text-[11px] font-semibold tracking-[0.4em] uppercase mb-8 block">Global Real Estate Advisory</motion.span>',
    '<motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="font-sans text-white text-sm tracking-[0.25em] font-bold uppercase mb-8 block">Global Real Estate Advisory</motion.span>'
)

# Headline
home = home.replace(
    '<motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-4xl md:text-[#C8102E]xl lg:text-7xl text-white font-medium tracking-[-0.05em] leading-[1.05] mb-8 max-w-4xl mx-auto">Launch Your Next Development in the UAE.</motion.h1>',
    '<motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="font-sans text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-sm leading-[1.1] mb-8 max-w-5xl mx-auto">Launch Your Next Development in the UAE.</motion.h1>'
)

# Subtext
home = home.replace(
    '<motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-white/90 text-base md:text-lg lg:text-xl font-light max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-12 tracking-[0.02em]">We provide international builders with the local data, zoning expertise, and strategic guidance to execute flawlessly in Dubai.</motion.p>',
    '<motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="font-sans text-white text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-12">We provide international builders with the local data, zoning expertise, and strategic guidance to execute flawlessly in Dubai.</motion.p>'
)

# CTA
home = home.replace(
    '<motion.button variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="bg-[#C8102E] text-white px-10 py-4 font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-700 transition-all duration-300 rounded-none flex items-center gap-4 mx-auto group">',
    '<motion.button variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="bg-[#C8102E] text-white font-bold px-10 py-4 text-lg hover:bg-red-700 transition-colors uppercase flex items-center gap-4 mx-auto group">'
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home)

print("Home hero fixed")
