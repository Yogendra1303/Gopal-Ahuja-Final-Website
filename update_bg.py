import re

# 1. Update Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    home = f.read()

# E. Market Reports section
home = home.replace(
    '<section id="insights" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-gray-200">',
    '<section id="insights" className="w-full py-32 bg-gray-50 border-t border-gray-200">\n          <div className="max-w-7xl mx-auto px-6">'
)
# Close the new div at the end of section E
home = home.replace(
    '        </section>\n\n        {/* F. The Inner Circle (Newsletter) */}',
    '          </div>\n        </section>\n\n        {/* F. The Inner Circle (Newsletter) */}'
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home)

# 2. Update Insights.tsx
with open('src/pages/Insights.tsx', 'r') as f:
    insights = f.read()

# The first section inside <div className="w-full mx-auto relative">
# We want to wrap the first section (articles) in a gray background.
# Let's find the section header and its container.
insights = insights.replace(
    '<div className="w-full max-w-7xl mx-auto py-24 px-6 relative z-10 border-t border-gray-200">',
    '<div className="w-full bg-gray-50 py-32 border-t border-b border-gray-200">\n          <div className="max-w-7xl mx-auto px-6 relative z-10">'
)

insights = insights.replace(
    '        {/* Interactive Data Terminal (The Engine) */}',
    '          </div>\n        </div>\n\n        {/* Interactive Data Terminal (The Engine) */}'
)

# And inside the LHS article, change background to white
insights = insights.replace(
    'className="col-span-1 md:col-span-2 relative group"',
    'className="col-span-1 md:col-span-2 relative group bg-white border border-gray-200 shadow-sm p-8"'
)

# And RHS article
insights = insights.replace(
    '<div className="border border-gray-200 p-8 flex flex-col h-full bg-white relative group">',
    '<div className="border border-gray-200 shadow-sm p-8 flex flex-col h-full bg-white relative group">'
)

with open('src/pages/Insights.tsx', 'w') as f:
    f.write(insights)

print("Updated backgrounds")
