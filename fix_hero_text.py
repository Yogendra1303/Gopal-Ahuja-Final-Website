import re

with open('src/components/Hero.tsx', 'r') as f:
    hero = f.read()

hero = hero.replace('text-white font-sans', 'text-[#c6f6d5] font-sans')
hero = hero.replace('text-white max-w-5xl', 'text-[#c6f6d5] max-w-5xl')
hero = hero.replace('text-white/90 font-sans', 'text-[#c6f6d5]/90 font-sans')

with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero)

print("Updated Hero text color")
