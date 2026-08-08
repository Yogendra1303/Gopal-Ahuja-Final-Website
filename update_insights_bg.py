import re

with open('src/pages/Insights.tsx', 'r') as f:
    insights = f.read()

insights = insights.replace(
    '<main className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">',
    '<main className="min-h-screen bg-gray-50 text-gray-900 relative overflow-x-hidden">'
)

with open('src/pages/Insights.tsx', 'w') as f:
    f.write(insights)

print("Updated Insights background")
