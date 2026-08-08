import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

target = r'''<motion\.div \n              initial=\{\{ opacity: 0, y: 30 \}\}\n              whileInView=\{\{ opacity: 1, y: 0 \}\}\n              viewport=\{\{ once: true \}\}\n              transition=\{\{ duration: 0\.8 \}\}\n            >'''

replacement = '''<motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 bg-[#F9FAFB] border border-gray-200 rounded-xl"
            >'''

content = re.sub(target, replacement, content)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
