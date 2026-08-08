with open('src/components/MarketIntelligence.tsx', 'r') as f:
    content = f.read()

old_insight_header = """        <div className="max-w-6xl mx-auto mb-8 md:mb-12 text-center md:text-left flex flex-col items-center md:items-start gap-8 md:gap-12">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight m-0">Market Intelligence</h2>
          <p className="text-gray-600 text-lg max-w-2xl m-0">Access our quarterly underwriting models and predictive analytics.</p>
        </div>"""

new_insight_header = """        <div className="max-w-6xl mx-auto mb-16 md:mb-20 text-center md:text-left">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Market Intelligence</h2>
          <p className="text-gray-600 text-lg max-w-2xl">Access our quarterly underwriting models and predictive analytics.</p>
        </div>"""

content = content.replace(old_insight_header, new_insight_header)

old_tactical_header = """        <div className="max-w-6xl mx-auto mb-12 text-center flex flex-col items-center gap-12">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight m-0">Tactical Perspectives</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto m-0">Step onto the site. Watch our latest cinematic market breakdowns and architectural tours.</p>
        </div>"""

new_tactical_header = """        <div className="max-w-6xl mx-auto mb-16 md:mb-20 text-center">
          <h2 className="text-black font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Tactical Perspectives</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Step onto the site. Watch our latest cinematic market breakdowns and architectural tours.</p>
        </div>"""

content = content.replace(old_tactical_header, new_tactical_header)

with open('src/components/MarketIntelligence.tsx', 'w') as f:
    f.write(content)

print("Updated spacing.")
