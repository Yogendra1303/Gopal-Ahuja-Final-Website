import re

with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

# I will just replace <motion.span ... > with <span ...> and so on.
content = re.sub(r'<motion\.(span|h2|p|div)\s+', r'<\1 ', content)
content = re.sub(r'</motion\.(span|h2|p|div)>', r'</\1>', content)
content = re.sub(r'\s*variants=\{\{[^}]+\}\}\s*', ' ', content)
content = re.sub(r'\s*variants=\{\{[^}]+\}\s*\}\s*', ' ', content)
content = re.sub(r'\s*initial="hidden"\s*', ' ', content)
content = re.sub(r'\s*whileInView="visible"\s*', ' ', content)
content = re.sub(r'\s*viewport=\{\{[^}]+\}\}\s*', ' ', content)

# A more robust variants removal (multi-line)
content = re.sub(r'\s*variants=\{\{[\s\S]*?\}\}\s*', ' ', content)
content = re.sub(r'\s*variants=\{[^}]*\}\s*', ' ', content)

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
