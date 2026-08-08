import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

import_statement = "import ExpertiseServicesSection from '../components/ExpertiseServicesSection';\n"
if "ExpertiseServicesSection" not in content:
    content = content.replace("import MeetGopalAhujaSection from '../components/MeetGopalAhuja';", "import MeetGopalAhujaSection from '../components/MeetGopalAhuja';\n" + import_statement)

target = "<MeetGopalAhujaSection />"
replacement = "<MeetGopalAhujaSection />\n        <ExpertiseServicesSection />"

if "<ExpertiseServicesSection />" not in content:
    content = content.replace(target, replacement)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
print("Updated Home.tsx successfully with ExpertiseServicesSection.")
