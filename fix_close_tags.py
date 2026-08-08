with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

content = content.replace("          </div>\n        </div>\n        {/* RIGHT COLUMN: STRUCTURED CINEMATIC PORTRAIT */}", "          </motion.div>\n        </motion.div>\n        {/* RIGHT COLUMN: STRUCTURED CINEMATIC PORTRAIT */}")

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
