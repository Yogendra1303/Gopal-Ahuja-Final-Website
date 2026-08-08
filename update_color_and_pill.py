import glob

# Replace colors
files = glob.glob('src/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r') as f:
        content = f.read()
    if '#00843D' in content:
        content = content.replace('#00843D', '#0D6323')
        with open(file, 'w') as f:
            f.write(content)

# Update Pill in Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Assuming it looks like: <div className="w-2 h-2 rounded-full bg-[#C8102E]" />
if '<div className="w-2 h-2 rounded-full bg-[#C8102E]" />' in content:
    content = content.replace('<div className="w-2 h-2 rounded-full bg-[#C8102E]" />', '<span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse"></span>')
    with open('src/pages/Home.tsx', 'w') as f:
        f.write(content)

print("Updated colors and pill")
