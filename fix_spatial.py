with open('src/pages/Insights.tsx', 'r') as f:
    content = f.read()

bad_string = """
        </section>

        {/* Spatial Intelligence Section */}
"""

good_string = """
        {/* Spatial Intelligence Section */}
"""

content = content.replace(bad_string, good_string)

with open('src/pages/Insights.tsx', 'w') as f:
    f.write(content)
print("Fixed Insights.tsx")
