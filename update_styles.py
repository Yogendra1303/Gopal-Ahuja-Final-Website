import re

with open('src/index.css', 'r') as f:
    css = f.read()

if 'font-family: var(--font-sans);' not in css:
    css = css.replace(
        'body {\n  background-color: var(--bg-main);',
        'body {\n  font-family: var(--font-sans);\n  background-color: var(--bg-main);'
    )
    with open('src/index.css', 'w') as f:
        f.write(css)

with open('src/components/Header.tsx', 'r') as f:
    header = f.read()

# Remove Moon and Sun
header = re.sub(r'import\s+\{[^}]*Moon[^}]*\}\s+from\s+[\'"]lucide-react[\'"];?', 'import { Menu, X } from "lucide-react";', header)
header = re.sub(r'const\s+\{\s*isDarkMode[^}]*\}\s*=\s*useTheme\(\);\s*', '', header)
header = re.sub(r'<button onClick=\{toggleTheme\}[^>]*>.*?</button>', '', header)

# Reduce header height
header = header.replace('h-16', 'h-14')

# Make logo text slightly smaller if needed, or adjust sizes
header = header.replace('text-white font-bold tracking-widest uppercase', 'text-white text-lg font-bold tracking-widest uppercase')

with open('src/components/Header.tsx', 'w') as f:
    f.write(header)

print("Updated header and css")
