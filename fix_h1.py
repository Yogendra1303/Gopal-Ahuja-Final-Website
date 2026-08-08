with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

content = content.replace("Launch Your Next Development in the UAE.", "Deploy Capital in Dubai with Absolute Precision with Gopal Ahuja.")

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
