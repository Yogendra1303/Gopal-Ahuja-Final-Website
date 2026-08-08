#!/bin/bash

# Intelligence.tsx
sed -i 's/bg-bg-main/bg-[#FFFFFF]/g' src/components/Intelligence.tsx
sed -i 's/text-text-main/text-black/g' src/components/Intelligence.tsx
sed -i 's/text-text-muted/text-black\/70/g' src/components/Intelligence.tsx
sed -i 's/border-border-subtle/border-black\/10/g' src/components/Intelligence.tsx
sed -i 's/bg-bg-input/bg-[#FFFFFF]/g' src/components/Intelligence.tsx

# Insights.tsx
sed -i 's/bg-bg-main/bg-[#FFFFFF]/g' src/pages/Insights.tsx
sed -i 's/text-text-main/text-black/g' src/pages/Insights.tsx
sed -i 's/text-text-muted/text-black\/70/g' src/pages/Insights.tsx
sed -i 's/border-border-subtle/border-black\/10/g' src/pages/Insights.tsx
sed -i 's/bg-bg-input/bg-[#FFFFFF]/g' src/pages/Insights.tsx
sed -i 's/hover:bg-bg-subtle/hover:bg-gray-50/g' src/pages/Insights.tsx

# About.tsx
sed -i 's/bg-bg-main/bg-[#FFFFFF]/g' src/pages/About.tsx
sed -i 's/text-text-main/text-black/g' src/pages/About.tsx
sed -i 's/text-text-muted/text-black\/70/g' src/pages/About.tsx
sed -i 's/border-border-subtle/border-black\/10/g' src/pages/About.tsx
sed -i 's/bg-bg-input/bg-[#FFFFFF]/g' src/pages/About.tsx

# Inquiry.tsx
sed -i 's/bg-bg-main/bg-[#000000]/g' src/components/Inquiry.tsx
sed -i 's/text-text-main/text-white/g' src/components/Inquiry.tsx
sed -i 's/text-text-muted/text-white\/70/g' src/components/Inquiry.tsx
sed -i 's/border-border-subtle/border-white\/20/g' src/components/Inquiry.tsx
sed -i 's/bg-bg-input/bg-[#000000]/g' src/components/Inquiry.tsx
sed -i 's/hover:bg-text-main hover:text-bg-main/hover:bg-red-700 hover:text-white/g' src/components/Inquiry.tsx

# Navbar.tsx
sed -i 's/GOPAL AHUJA | AURA ADVISORY/GOPAL AHUJA/g' src/components/Navbar.tsx
sed -i 's/bg-black\/50 backdrop-blur-md/bg-\[#00843D\]/g' src/components/Navbar.tsx
sed -i 's/bg-black\/95 backdrop-blur-md/bg-\[#00843D\]/g' src/components/Navbar.tsx
sed -i 's/text-text-muted/text-white\/80/g' src/components/Navbar.tsx
sed -i 's/border-border-subtle/border-white\/20/g' src/components/Navbar.tsx

