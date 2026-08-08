#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i 's/hover:text-black/hover:text-\[#C8102E\]/g' {} +
