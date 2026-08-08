#!/bin/bash

# Hero.tsx
sed -i 's/from-black via-black\/70 to-black\/40/from-\[#00843D\]\/90 to-\[#00843D\]\/70/g' src/components/Hero.tsx
sed -i 's/text-accent/text-white/g' src/components/Hero.tsx
sed -i 's/text-text-main/text-white/g' src/components/Hero.tsx
sed -i 's/text-text-muted/text-white/g' src/components/Hero.tsx
sed -i 's/bg-white text-bg-main px-10 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:bg-white hover:text-bg-main hover:scale-105/bg-\[#C8102E\] text-white px-10 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:bg-red-700 hover:scale-105/g' src/components/Hero.tsx

# Wait, the button has bg-accent text-bg-main
sed -i 's/bg-accent text-bg-main/bg-\[#C8102E\] text-white/g' src/components/Hero.tsx
sed -i 's/hover:bg-text-main hover:text-bg-main/hover:bg-red-700/g' src/components/Hero.tsx
