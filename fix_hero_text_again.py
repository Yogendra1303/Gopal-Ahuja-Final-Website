import re

with open('src/components/Hero.tsx', 'r') as f:
    hero = f.read()

hero = hero.replace('text-[#c6f6d5]', 'text-green-300')

with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero)
