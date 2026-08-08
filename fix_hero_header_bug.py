import re

with open('src/components/Header.tsx', 'r') as f:
    header = f.read()

# Replace green color in Header
header = header.replace('bg-[#00843D]', 'bg-[#108944]')

# Make nav links font-semibold
header = header.replace('font-medium text-[13px]', 'font-semibold text-[13px]')

with open('src/components/Header.tsx', 'w') as f:
    f.write(header)

with open('src/components/Hero.tsx', 'r') as f:
    hero = f.read()

# Replace green color in Hero container
hero = hero.replace('bg-[#00843D]', 'bg-[#108944]')

# Replace gradient
hero = hero.replace('bg-gradient-to-b from-[#40A05A]/90 to-[#07632D]/95', 'bg-gradient-to-b from-[#108944]/90 to-[#074D24]/95')

# Make sure object-center is present
hero = hero.replace('className="w-full h-full object-cover"', 'className="w-full h-full object-cover object-center"')

# Update eyebrow
hero = hero.replace(
    '<span className="text-green-300 font-sans text-xs md:text-sm uppercase font-bold tracking-[0.25em]">',
    '<span className="text-white font-sans text-sm tracking-[0.25em] font-bold uppercase block">'
)

# Update headline
hero = hero.replace(
    '<h1 className="font-sans font-bold text-5xl md:text-7xl leading-[1.1] tracking-tighter text-green-300 max-w-5xl">',
    '<h1 className="font-sans text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-sm leading-[1.1] max-w-5xl">'
)

# Update subtext
hero = hero.replace(
    '<p className="text-green-300/90 font-sans font-light text-lg md:text-xl max-w-3xl leading-relaxed">',
    '<p className="font-sans text-white text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">'
)

# Update CTA
hero = hero.replace(
    '<button \n              onClick={onContactClick}\n              className="group flex items-center justify-center gap-4 bg-[#C8102E] text-white px-10 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:bg-red-700 hover:text-white hover:scale-105"\n            >',
    '<button \n              onClick={onContactClick}\n              className="group flex items-center justify-center gap-4 bg-[#C8102E] text-white font-bold px-10 py-4 text-lg hover:bg-red-700 transition-colors uppercase tracking-widest hover:scale-105"\n            >'
)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero)

print("Fix applied")
