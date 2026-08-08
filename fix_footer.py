with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

content = content.replace("Engineering sovereign wealth trajectories through algorithmic real estate acquisition and unparalleled masterplan underwriting in the global core.", "Helping global developers and private investors build wealth through strategic real estate acquisitions in Dubai.")
content = content.replace("Intel Dispatch", "Join the List")
content = content.replace("Receive quarterly underwriting models and off-market metropolitan acquisition targets.", "Receive my quarterly market models and exclusive off-market property targets.")

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)
