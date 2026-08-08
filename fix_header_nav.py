import re

with open('src/components/Header.tsx', 'r') as f:
    header = f.read()

header = header.replace('border-[#C8102E]', 'border-white')
header = header.replace('hover:text-[#C8102E]', 'hover:text-white')

with open('src/components/Header.tsx', 'w') as f:
    f.write(header)

print("Header nav fixed")
