with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

content = content.replace("Meet Gopal Ahuja", "Meet Your Partner in Dubai")
content = content.replace("Partner with a <span className='text-[#C8102E] italic font-serif font-normal'>sovereign</span> real estate strategist", "Work with a trusted Dubai real estate partner.")

old_p_blocks = """<div className='space-y-6 text-gray-700 text-lg leading-relaxed mb-10'>
            <p>
              Driving institutional capital growth through algorithmic underwriting, strategic land acquisition, and masterplan development advisory for global funds, sovereign entities, and tier-one developers.
            </p>
            <p>
              For private investors, Gopal curates ultra-prime residential assets and exclusive off-market trophy properties, blending deep spatial intelligence with bespoke wealth preservation strategies.
            </p>
            <p className='text-gray-500 text-base'>
              From high-yield corridor analysis to final transaction closing, gain the tactical foresight required to navigate the UAE's most competitive real estate hubs.
            </p>
          </div>"""

new_p_blocks = """<div className='space-y-6 text-gray-700 text-lg leading-relaxed mb-10'>
            <p>
              My focus is simple: to help you make highly profitable real estate decisions in the UAE. Whether you are an institutional fund acquiring land for a masterplan development or a private investor looking for a luxury home, I bring you exclusive access and data-driven insights.
            </p>
            <p className='text-gray-500 text-base'>
              From our first conversation to the final handover, I provide the exact market intelligence and end-to-end support you need to win in Dubai’s most competitive neighborhoods.
            </p>
          </div>"""

content = content.replace(old_p_blocks, new_p_blocks)
content = content.replace("Institutional Advisory", "For Developers & Funds")
content = content.replace("Private Wealth Allocation", "For Private Investors")
content = content.replace("Master Sovereign Alignment & Property Advisory", "Founder-Led Real Estate Advisory in Dubai")

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
