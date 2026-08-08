import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'className="w-full bg-[#FFFFFF] pt-16 pb-24 px-6 text-center relative border-t border-gray-100"',
    'className="w-full bg-[#FFFFFF] py-20 md:py-24 px-6 md:px-12 text-center relative border-b border-gray-100"'
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
