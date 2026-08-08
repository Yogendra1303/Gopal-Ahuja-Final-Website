import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

import_statement = "import { MeetGopalAhujaSection } from '../components/MeetGopalAhuja';\n"
if "MeetGopalAhujaSection" not in content:
    content = content.replace("import { ScrollExpansionVideo } from '../components/ui/scroll-expansion-video';", "import { ScrollExpansionVideo } from '../components/ui/scroll-expansion-video';\n" + import_statement)

target_injection = """        </div>
        
        {/* D. Track Record (Glass Gallery) */}"""

replacement = """        </div>
        
        <MeetGopalAhujaSection />

        {/* D. Track Record (Glass Gallery) */}"""

if "<MeetGopalAhujaSection />" not in content:
    content = content.replace(target_injection, replacement)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

print("Updated Home.tsx successfully.")
