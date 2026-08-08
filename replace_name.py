with open('src/data.ts', 'r') as f:
    content = f.read()

content = content.replace("Aura Advisory | Mr. Gopal Ahuja", "GOPAL AHUJA")
content = content.replace("Aura Advisory", "GOPAL AHUJA")

with open('src/data.ts', 'w') as f:
    f.write(content)
