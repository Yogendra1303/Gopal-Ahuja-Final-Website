import re

with open('src/pages/Home.tsx', 'r') as f:
    home = f.read()

# Inner circle to white
home = home.replace(
    '<section className="w-full mx-auto py-32 px-6 text-center relative bg-gray-50">',
    '<section className="w-full mx-auto py-32 px-6 text-center relative bg-[#FFFFFF] border-t border-gray-200">'
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home)

print("Updated inner circle bg")
