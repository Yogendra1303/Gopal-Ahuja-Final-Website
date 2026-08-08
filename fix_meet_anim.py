import re

with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

content = content.replace("import { TextShimmer } from './ui/text-shimmer';", "import { motion } from 'framer-motion';")

replacement = """        {/* LEFT COLUMN: EDITORIAL CONTENT */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className='lg:col-span-7 flex flex-col items-start text-left'
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className='text-[#C8102E] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 block'
          >
            Meet Your Partner in Dubai
          </motion.span>
          
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className='text-[#111827] text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]'
          >
            Work with a trusted Dubai real estate partner.
          </motion.h2>
          
          <div className='space-y-6 mb-10 max-w-lg'>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className='text-[#4B5563] text-lg leading-relaxed font-normal'
            >
              My focus is simple: to help you make highly profitable real estate decisions in the UAE. Whether you are an institutional fund acquiring land for a masterplan development or a private investor looking for a luxury home, I bring you exclusive access and data-driven insights.
            </motion.p>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className='text-[#6B7280] text-base leading-relaxed font-normal'
            >
              From our first conversation to the final handover, I provide the exact market intelligence and end-to-end support you need to win in Dubai’s most competitive neighborhoods.
            </motion.p>
          </div>

          {/* DUAL ACTION BUTTONS */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className='flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto'
          >"""

target_regex = r"\{\/\* LEFT COLUMN: EDITORIAL CONTENT \*\/\}(.*?)\{\/\* DUAL ACTION BUTTONS \*\/\}\n\s*<div className='flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto'>"

content = re.sub(target_regex, replacement, content, flags=re.DOTALL)

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
