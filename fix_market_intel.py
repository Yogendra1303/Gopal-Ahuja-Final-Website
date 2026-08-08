with open('src/components/MarketIntelligence.tsx', 'r') as f:
    content = f.read()

content = content.replace("Market Intelligence", "Market Insights")
content = content.replace("Access our quarterly underwriting models and predictive analytics.", "Access my latest quarterly reports, market forecasts, and investment guides.")

reports_array_old = """const reports = [
  { title: "Dubai Velocity Report", desc: "Analysis of transactional speed and off-market waterfront corridors." },
  { title: "Sovereign Yield Matrix", desc: "Comprehensive yield mapping across tier-one institutional developments." },
  { title: "Zoning Arbitration", desc: "Predictive modeling on upcoming zoning shifts and FAR expansions." }
];"""

reports_array_new = """const reports = [
  { title: "Dubai Market Update", desc: "A clear breakdown of market speed and exactly where the best waterfront deals are happening." },
  { title: "Investment Yield Guide", desc: "A comprehensive guide showing exactly what kind of rental returns you can expect across top developments." },
  { title: "Upcoming Zoning Shifts", desc: "A look ahead at upcoming city zoning changes and how they will impact property values." }
];"""

content = content.replace(reports_array_old, reports_array_new)
content = content.replace("Step onto the site. Watch our latest cinematic market breakdowns and architectural tours.", "Step onto the site with me. Watch my latest cinematic market breakdowns and architectural tours.")

with open('src/components/MarketIntelligence.tsx', 'w') as f:
    f.write(content)
