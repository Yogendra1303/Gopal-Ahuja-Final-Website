#!/bin/bash
for file in $(find src -name "*.tsx"); do
    sed -i 's/text-accent/text-\[#C8102E\]/g' "$file"
    sed -i 's/bg-accent/bg-\[#C8102E\]/g' "$file"
    sed -i 's/border-accent/border-\[#C8102E\]/g' "$file"
    sed -i 's/hover:bg-accent/hover:bg-\[#C8102E\]/g' "$file"
    sed -i 's/hover:text-accent/hover:text-red-700/g' "$file"
    sed -i 's/hover:border-accent/hover:border-\[#C8102E\]/g' "$file"
    sed -i 's/group-hover:text-accent/group-hover:text-red-700/g' "$file"
    sed -i 's/group-hover:border-accent/group-hover:border-\[#C8102E\]/g' "$file"
    sed -i 's/focus-within:border-accent\/50/focus-within:border-\[#C8102E\]\/50/g' "$file"
done
