# Insights.tsx
sed -i 's/bg-bg-subtle/bg-gray-50/g' src/pages/Insights.tsx

# About.tsx
sed -i 's/bg-bg-subtle/bg-gray-50/g' src/pages/About.tsx

# Home.tsx
sed -i 's/bg-bg-subtle/bg-gray-50/g' src/pages/Home.tsx
sed -i 's/text-text-main/text-black/g' src/pages/Home.tsx
sed -i 's/text-text-muted/text-black\/70/g' src/pages/Home.tsx

# Footer.tsx
sed -i 's/border-border-subtle/border-white\/20/g' src/components/Footer.tsx
sed -i 's/bg-bg-subtle/bg-white\/5/g' src/components/Footer.tsx

# Header.tsx
sed -i 's/border-border-subtle/border-white\/20/g' src/components/Header.tsx
sed -i 's/bg-bg-input/bg-[#000000]/g' src/components/Header.tsx

# Navbar.tsx
sed -i 's/bg-bg-main\/50/bg-[#00843D]/g' src/components/Navbar.tsx
sed -i 's/bg-bg-main\/95/bg-[#00843D]/g' src/components/Navbar.tsx

