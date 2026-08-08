import re

# 1. Update Hero.tsx
with open('src/components/Hero.tsx', 'r') as f:
    hero = f.read()

hero = hero.replace(
    '<span className="text-[#C8102E] font-sans text-xs md:text-sm uppercase font-bold tracking-[0.25em]">',
    '<span className="text-white font-sans text-xs md:text-sm uppercase font-bold tracking-[0.25em]">'
)

hero = hero.replace(
    'We provide international builders with the local expertise, market data, and strategic guidance needed to successfully build and sell in the Emirates.',
    'We provide international builders with the local data, zoning expertise, and strategic guidance to execute flawlessly in Dubai.'
)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero)

# 2. Update Header.tsx
with open('src/components/Header.tsx', 'r') as f:
    header = f.read()

header = header.replace('h-24', 'h-16')
header = header.replace(
    '<span onClick={() => setIsAdvisoryOpen(true)} className="text-white text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:text-[#C8102E] transition-colors">Contact Us</span>',
    '<span onClick={() => setIsAdvisoryOpen(true)} className="bg-[#C8102E] text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-wide cursor-pointer hover:bg-red-700 transition-colors">Contact Us</span>'
)

with open('src/components/Header.tsx', 'w') as f:
    f.write(header)

print("Updated Hero and Header")
