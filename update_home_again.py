import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

target = """        </div>

        {/* D. Track Record (Glass Gallery) */}"""

replacement = """        </div>

        <MeetGopalAhujaSection />

        {/* D. Track Record (Glass Gallery) */}"""

if target in content:
    content = content.replace(target, replacement)
    with open('src/pages/Home.tsx', 'w') as f:
        f.write(content)
    print("Injected component successfully.")
else:
    print("Could not find target!")

