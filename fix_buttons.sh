#!/bin/bash
for file in $(find src -name "*.tsx"); do
    sed -i 's/text-bg-main/text-white/g' "$file"
    sed -i 's/hover:bg-text-main/hover:bg-red-700/g' "$file"
    sed -i 's/hover:text-bg-main/hover:text-white/g' "$file"
done
