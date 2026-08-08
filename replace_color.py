import glob
import os

files = glob.glob('src/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r') as f:
        content = f.read()
    if '#139039' in content:
        content = content.replace('#139039', '#00843D')
        with open(file, 'w') as f:
            f.write(content)
        print(f"Updated {file}")
