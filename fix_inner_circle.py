import os
import re

path = 'src/pages/Home.tsx'
with open(path, 'r') as f:
    content = f.read()

parts = content.split('{/* F. The Inner Circle (Newsletter) */}')
if len(parts) == 2:
    f = parts[1]
    
    # Section background
    f = f.replace('bg-[#000000]', 'bg-gray-50')
    
    # Text colors
    f = f.replace('text-white font-extrabold', 'text-black font-extrabold')
    f = f.replace('text-white/70', 'text-gray-500')
    
    # Input container
    f = f.replace(
        'bg-black border border-gray-700',
        'bg-white border border-gray-200'
    )
    
    # Input field
    f = f.replace(
        '<input type="email" placeholder="ENTER SECURE EMAIL" className="flex-1 bg-black text-white px-6 py-4 outline-none font-mono text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase placeholder:text-white/50 rounded-none border-none" />',
        '<input type="email" placeholder="ENTER SECURE EMAIL" className="flex-1 bg-white text-gray-900 px-6 py-4 outline-none font-mono text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase placeholder:text-gray-500 rounded-none border-none" />'
    )
    
    new_content = parts[0] + '{/* F. The Inner Circle (Newsletter) */}' + f
    
    with open(path, 'w') as out:
        out.write(new_content)
    print("Updated Inner Circle section.")
