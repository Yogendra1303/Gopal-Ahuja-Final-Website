import os
import glob

files = ["src/components/Header.tsx", "src/components/Hero.tsx", "src/pages/Home.tsx"]

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    content = content.replace('#108944', '#139039')
    
    with open(file, 'w') as f:
        f.write(content)

print("Updated green color")
