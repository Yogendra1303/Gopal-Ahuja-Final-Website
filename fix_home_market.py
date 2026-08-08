import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Add import
if "import { MarketIntelligence }" not in content:
    content = content.replace("import { Footer } from '../components/Footer';", "import { Footer } from '../components/Footer';\nimport { MarketIntelligence } from '../components/MarketIntelligence';")

# Find Market Reports section
# /* E. Market Reports (Hover-Glow Bento Grid) */
# <section id="insights" className="w-full py-32 bg-gray-50 border-t border-gray-200"> ... </section>

market_pattern = r'\{\/\* E\. Market Reports \(Hover-Glow Bento Grid\) \*\/.*?<\/section>'

new_market = '{/* E. Market Reports (Fan Carousel) */}\n        <MarketIntelligence />'

content = re.sub(market_pattern, new_market, content, flags=re.DOTALL)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

print("Updated Home.tsx with MarketIntelligence")
