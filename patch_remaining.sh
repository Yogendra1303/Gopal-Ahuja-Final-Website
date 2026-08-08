sed -i 's/#C5A880/var(--accent)/g' src/components/*.tsx src/pages/*.tsx
sed -i 's/bg-\[var(--accent)\]/bg-accent/g' src/components/*.tsx src/pages/*.tsx
sed -i 's/text-\[var(--accent)\]/text-accent/g' src/components/*.tsx src/pages/*.tsx
sed -i 's/border-\[var(--accent)\]/border-accent/g' src/components/*.tsx src/pages/*.tsx
sed -i 's/bg-black/bg-bg-main/g' src/components/*.tsx src/pages/*.tsx
sed -i 's/text-black/text-bg-main/g' src/components/*.tsx src/pages/*.tsx
sed -i 's/bg-bg-main\/40/bg-black\/40/g' src/components/Portfolio.tsx
sed -i 's/bg-bg-main\/20/bg-black\/20/g' src/components/Portfolio.tsx
sed -i 's/bg-bg-main\/60/bg-black\/60/g' src/components/Inquiry.tsx src/components/Header.tsx
sed -i 's/bg-bg-main\/95/bg-bg-main\/95/g' src/components/Navbar.tsx
sed -i 's/border-white\/30/border-border-subtle/g' src/pages/Insights.tsx
