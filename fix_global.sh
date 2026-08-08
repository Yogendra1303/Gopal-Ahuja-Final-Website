#!/bin/bash
for file in $(find src -name "*.tsx"); do
    # Replace text-black with text-gray-900
    sed -i 's/text-black/text-gray-900/g' "$file"
    # Replace border-black/10 with border-gray-200
    sed -i 's/border-black\/10/border-gray-200/g' "$file"
    # Replace bg-stone-50 with bg-gray-50
    sed -i 's/bg-stone-50/bg-gray-50/g' "$file"
    # Replace bg-stone-100 with bg-gray-100
    sed -i 's/bg-stone-100/bg-gray-100/g' "$file"
    # Wait, what about text-black/70? It becomes text-gray-900/70, which is fine, or better text-gray-500.
    sed -i 's/text-gray-900\/70/text-gray-500/g' "$file"
done
