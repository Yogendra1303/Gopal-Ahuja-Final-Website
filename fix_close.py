with open('src/components/MeetGopalAhuja.tsx', 'r') as f:
    content = f.read()

content = content.replace("          </div>\n        </div>\n        {/* RIGHT COLUMN:", "          </motion.div>\n        </motion.div>\n        {/* RIGHT COLUMN:")

with open('src/components/MeetGopalAhuja.tsx', 'w') as f:
    f.write(content)
