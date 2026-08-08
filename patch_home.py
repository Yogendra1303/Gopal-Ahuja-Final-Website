import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Make sure to import GradientShimmer
if "import { GradientShimmer }" not in content:
    content = content.replace("import { motion } from 'motion/react';", "import { motion } from 'motion/react';\nimport { GradientShimmer } from '../components/ui/gradient-shimmer';")

replacement = """            {/* Animated Shimmer Headline */}
            <GradientShimmer 
              as='h1'
              gradient='sunrise'
              baseColor='#ffffff'
              duration={2.5}
              pauseBetween={2000}
              className='text-white text-5xl md:text-[5.5rem] leading-[1.05] font-extrabold tracking-tight text-center max-w-4xl mx-auto mb-8'
            >
              Launch Your Next Development in the UAE.
            </GradientShimmer>"""

content = re.sub(r'\{\/\* Massive, Tight Headline \*\/\}.*?<\/motion\.h1>', replacement, content, flags=re.DOTALL)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
