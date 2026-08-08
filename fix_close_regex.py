import re
with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

content = re.sub(r'</div>\s*</div>\s*\{\/\* RIGHT COLUMN: STRUCTURED CINEMATIC PORTRAIT \*\/\}', r'</motion.div>\n        </motion.div>\n        {/* RIGHT COLUMN: STRUCTURED CINEMATIC PORTRAIT */}', content)

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
