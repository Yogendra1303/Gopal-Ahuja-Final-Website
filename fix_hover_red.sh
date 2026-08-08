#!/bin/bash
for file in $(find src -name "*.tsx"); do
    sed -i 's/hover:text-\[\#C8102E\]/hover:text-red-700/g' "$file"
done
