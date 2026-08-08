#!/bin/bash
for file in $(find src -name "*.tsx"); do
    if [[ "$file" == *"Header.tsx"* || "$file" == *"Footer.tsx"* || "$file" == *"Hero.tsx"* ]]; then
        continue
    fi
    sed -i 's/border-border-subtle/border-gray-200/g' "$file"
done
