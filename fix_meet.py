import re

with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

replacement = """        {/* LEFT COLUMN: EDITORIAL CONTENT */}
        <div className='lg:col-span-7 flex flex-col items-start text-left'>
          {/* Eyebrow: Base color is Action Red, Shimmer is a softer faded pink/red */}
          <TextShimmer 
            as='span' 
            duration={3} 
            className='text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 block [--base-color:#C8102E] [--base-gradient-color:#ff8a9f]'
          >
            Meet Your Partner in Dubai
          </TextShimmer>

          {/* Main Headline: Base color is Dark Charcoal, Shimmer is Action Red */}
          <TextShimmer 
            as='h2' 
            duration={3} 
            className='text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] [--base-color:#111827] [--base-gradient-color:#C8102E]'
          >
            Work with a trusted Dubai real estate partner.
          </TextShimmer>
          
          <div className='space-y-6 mb-10 max-w-lg'>
            {/* Paragraph 1: Base color is Gray, Shimmer is Action Red */}
            <TextShimmer 
              as='p' 
              duration={3} 
              className='text-lg leading-relaxed font-normal [--base-color:#4B5563] [--base-gradient-color:#C8102E]'
            >
              My focus is simple: to help you make highly profitable real estate decisions in the UAE. Whether you are an institutional fund acquiring land for a masterplan development or a private investor looking for a luxury home, I bring you exclusive access and data-driven insights.
            </TextShimmer>

            {/* Paragraph 2: Base color is Lighter Gray, Shimmer is Action Red */}
            <TextShimmer 
              as='p' 
              duration={3} 
              className='text-base leading-relaxed font-normal [--base-color:#6B7280] [--base-gradient-color:#C8102E]'
            >
              From our first conversation to the final handover, I provide the exact market intelligence and end-to-end support you need to win in Dubai’s most competitive neighborhoods.
            </TextShimmer>
          </div>

          {/* DUAL ACTION BUTTONS */}
          <div className='flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto'>"""

# I need to match everything from {/* LEFT COLUMN: EDITORIAL CONTENT */} up to {/* DUAL ACTION BUTTONS */}

target_regex = r"\{\/\* LEFT COLUMN: EDITORIAL CONTENT \*\/\}(.*?)\{\/\* DUAL ACTION BUTTONS \*\/\}\n\s*<div className='flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto'>"

content = re.sub(target_regex, replacement, content, flags=re.DOTALL)

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
