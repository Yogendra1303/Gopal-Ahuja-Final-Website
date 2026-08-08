import re

with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

# Replace <motion.div ...> with <div ...>
content = re.sub(r'<motion\.div[^>]*className=\'lg:col-span-7[^>]*>', r"<div className='lg:col-span-7 flex flex-col items-start text-left'>", content, flags=re.DOTALL)
content = re.sub(r'</motion\.div>', r'</div>', content)

# Remove variants and replace motion.X with X
content = re.sub(r'<motion\.(span|h2|p|div)\s+variants=\{[^}]+\}\s+className=', r'<\1 className=', content)
content = re.sub(r'</motion\.(span|h2|p|div)>', r'</\1>', content)

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
