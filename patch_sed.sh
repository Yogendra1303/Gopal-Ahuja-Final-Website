#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i 's/text-accentxl/text-5xl/g' {} +
find src -type f -name "*.tsx" -exec sed -i 's/text-accent/text-\[#C8102E\]/g' {} +
find src -type f -name "*.tsx" -exec sed -i 's/border-accent/border-\[#C8102E\]/g' {} +
find src -type f -name "*.tsx" -exec sed -i 's/bg-accent/bg-\[#C8102E\]/g' {} +
find src -type f -name "*.tsx" -exec sed -i 's/var(--accent)/#C8102E/g' {} +
