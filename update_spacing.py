import re

# Update MarketIntelligence.tsx
with open('src/components/MarketIntelligence.tsx', 'r') as f:
    mi_content = f.read()

mi_content = mi_content.replace(
    '<section id="insights" className="w-full bg-[#FFFFFF] py-24 px-6 border-b border-gray-100">',
    '<section id="insights" className="w-full bg-[#FFFFFF] py-16 md:py-20 px-6 border-t border-gray-100">'
)

old_mi_header = """        <div className="max-w-6xl mx-auto">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-4 text-center md:text-left max-w-6xl mx-auto">Market Intelligence</h2>
          <p className="text-gray-600 text-lg max-w-6xl mx-auto mb-16 text-center md:text-left">Access our quarterly underwriting models and predictive analytics.</p>"""

new_mi_header = """        <div className="max-w-6xl mx-auto mb-12 text-center md:text-left">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-4">Market Intelligence</h2>
          <p className="text-gray-600 text-lg">Access our quarterly underwriting models and predictive analytics.</p>"""

mi_content = mi_content.replace(old_mi_header, new_mi_header)

old_tactical_wrapper = '<section className="w-full bg-[#FFFFFF] py-24 px-6 overflow-hidden">'
new_tactical_wrapper = '<section className="w-full bg-[#FFFFFF] py-16 md:py-20 px-6 border-t border-gray-100 overflow-hidden">'
mi_content = mi_content.replace(old_tactical_wrapper, new_tactical_wrapper)

old_tactical_header = """        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-4 text-center max-w-6xl mx-auto">Tactical Perspectives</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center">Step onto the site. Watch our latest cinematic market breakdowns and architectural tours.</p>
        </div>"""

new_tactical_header = """        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-4">Tactical Perspectives</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Step onto the site. Watch our latest cinematic market breakdowns and architectural tours.</p>
        </div>"""
mi_content = mi_content.replace(old_tactical_header, new_tactical_header)

with open('src/components/MarketIntelligence.tsx', 'w') as f:
    f.write(mi_content)

# Update Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    home_content = f.read()

# Portfolio wrapper
old_portfolio_wrapper = '<section id="portfolio" className="w-full max-w-7xl mx-auto py-32 px-6 bg-[#FFFFFF]">'
new_portfolio_wrapper = '<section id="portfolio" className="w-full bg-[#FFFFFF] py-16 md:py-20 border-t border-gray-100 relative">\n          <div className="max-w-7xl mx-auto px-6">'

if old_portfolio_wrapper in home_content:
    home_content = home_content.replace(old_portfolio_wrapper, new_portfolio_wrapper)
    # find the ending tag of portfolio and insert </div>
    # Let's use regex to find the end of the section
    pattern = r'(<section id="portfolio"[\s\S]*?)(        </section>)'
    
    def repl(m):
        return m.group(1) + '          </div>\n' + m.group(2)
    home_content = re.sub(pattern, repl, home_content)

# Inner Circle wrapper
old_inner_circle_wrapper = '<section className="w-full mx-auto py-32 px-6 text-center relative bg-[#FFFFFF] border-t border-gray-200">'
new_inner_circle_wrapper = '<section className="w-full bg-[#FFFFFF] pt-16 pb-24 px-6 text-center relative border-t border-gray-100">'
home_content = home_content.replace(old_inner_circle_wrapper, new_inner_circle_wrapper)

old_inner_circle_h2 = '<h2 className="text-4xl md:text-5xl text-black font-extrabold mb-6 tracking-[-0.02em] leading-[1.1]">Get our private market intel.</h2>'
new_inner_circle_h2 = '<h2 className="text-4xl md:text-5xl text-black font-extrabold mb-4 tracking-[-0.02em] leading-[1.1]">Get our private market intel.</h2>'
home_content = home_content.replace(old_inner_circle_h2, new_inner_circle_h2)

old_inner_circle_p = '<p className="text-gray-500 font-light text-base md:text-lg mb-12 tracking-[0.02em] max-w-2xl md:max-w-3xl mx-auto">We share off-market acquisition targets exclusively with our list once a month.</p>'
new_inner_circle_p = '<p className="text-gray-500 font-light text-base md:text-lg mb-10 tracking-[0.02em] max-w-2xl md:max-w-3xl mx-auto">We share off-market acquisition targets exclusively with our list once a month.</p>'
home_content = home_content.replace(old_inner_circle_p, new_inner_circle_p)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home_content)

print("Updated spacings")
