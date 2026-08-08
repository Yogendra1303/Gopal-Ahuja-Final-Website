import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

target = r'''        \{\/\* B\. The Premium Hero Section \*\/\}
        <section className='relative w-full min-h-\[85vh\] flex flex-col lg:flex-row bg-white'>
          
          \{\/\* LEFT COLUMN: Editorial Content \*\/\}
          <div className='w-full lg:w-1\/2 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-20 z-10'>
            
            \{\/\* Soft Pill Badge \*\/\}
            <motion\.span 
              initial=\{\{ opacity: 0, y: 20 \}\}
              animate=\{\{ opacity: 1, y: 0 \}\}
              transition=\{\{ duration: 0\.8, delay: 0\.2 \}\}
              className='bg-gray-100 text-gray-800 text-\[10px\] sm:text-xs font-bold tracking-\[0\.2em\] uppercase px-4 py-2 rounded-full mb-8 flex items-center gap-2'
            >
              <span className='w-1\.5 h-1\.5 rounded-full bg-\[\#C8102E\]'><\/span>
              Global Real Estate Advisory
            <\/motion\.span>

            \{\/\* Left-Aligned Premium Headline \*\/\}
            <motion\.h1 
              initial=\{\{ opacity: 0, y: 20 \}\}
              animate=\{\{ opacity: 1, y: 0 \}\}
              transition=\{\{ duration: 0\.8, delay: 0\.4 \}\}
              className='mb-6 flex flex-col gap-2'
            >
              <span className='text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-\[1\.05\]'>
                Deploy Capital <br className='hidden md:block' \/> in Dubai
              <\/span>
              <span className='text-3xl md:text-5xl font-light tracking-tight text-gray-500 mt-2'>
                with absolute precision\.
              <\/span>
            <\/motion\.h1>

            \{\/\* Subheadline \*\/\}
            <motion\.p 
              initial=\{\{ opacity: 0, y: 20 \}\}
              animate=\{\{ opacity: 1, y: 0 \}\}
              transition=\{\{ duration: 0\.8, delay: 0\.6 \}\}
              className='text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-normal'
            >
              I help international developers and private investors navigate Dubai's real estate market with insider data, strategic guidance, and flawless execution\.
            <\/motion\.p>

            \{\/\* CTA Button \*\/\}
            <motion\.div 
              initial=\{\{ opacity: 0, y: 20 \}\}
              animate=\{\{ opacity: 1, y: 0 \}\}
              transition=\{\{ duration: 0\.8, delay: 0\.8 \}\}
            >
              <button className='bg-\[\#C8102E\] hover:bg-\[\#a60d24\] text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all shadow-md hover:shadow-xl flex items-center gap-3'>
                Meet Gopal <span className='text-lg leading-none'>&rarr;<\/span>
              <\/button>
            <\/motion\.div>
            
          <\/div>

          \{\/\* RIGHT COLUMN: Full-Bleed Imagery \*\/\}
          <motion\.div 
            initial=\{\{ opacity: 0 \}\}
            animate=\{\{ opacity: 1 \}\}
            transition=\{\{ duration: 1\.2 \}\}
            className='w-full lg:w-1\/2 relative min-h-\[50vh\] lg:min-h-full'
          >
            <img 
              src='https:\/\/images\.unsplash\.com\/photo-1512453979798-5ea266f8880c\?q=80&w=2940&auto=format&fit=crop' 
              alt='Dubai Skyline' 
              className='absolute inset-0 w-full h-full object-cover object-center'
            \/>
            \{\/\* Subtle gradient overlay to ensure image depth \*\/\}
            <div className='absolute inset-0 bg-gradient-to-t from-black\/20 to-transparent'><\/div>
          <\/motion\.div>

        <\/section>'''

replacement = '''        {/* B. The Premium Hero Section */}
        <section className="bg-[#126233] w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
              }
            }}
            className='relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 pt-24 pb-48 md:pb-60'
          >
            
            {/* Pill Badge */}
            <motion.span 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className='bg-white text-[#126233] text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8 flex items-center gap-2 shadow-sm'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-[#C8102E]'></span>
              GLOBAL REAL ESTATE ADVISORY
            </motion.span>

            {/* Massive, Tight Headline */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className='text-white mb-6 w-full flex flex-col items-center leading-tight'
            >
              <span className='text-5xl md:text-7xl font-extrabold tracking-tight mb-2'>
                Launch Your Next
              </span>
              <span className='text-5xl md:text-7xl font-extrabold tracking-tight'>
                Development in the UAE.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className='text-white/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal'
            >
              We provide international builders with the local data, zoning expertise, <br className="hidden md:block"/> and strategic guidance to execute flawlessly in Dubai.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className='relative z-20'>
              <button className='bg-[#D12030] hover:bg-[#a60d24] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center gap-2'>
                PLAN YOUR EXPANSION &rarr;
              </button>
            </motion.div>

          </motion.div>
        </section>'''

content = re.sub(target, replacement, content)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
