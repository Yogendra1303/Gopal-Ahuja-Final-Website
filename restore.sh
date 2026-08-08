#!/bin/bash
for file in $(find src -name "*.tsx" -o -name "*.ts"); do
    # Hero background
    sed -i 's/from-\[#00843D\]\/90 to-\[#00843D\]\/70/from-black via-black\/70 to-black\/40/g' "$file"
    
    # Hover button
    sed -i 's/hover:bg-red-700/hover:bg-text-main hover:text-bg-main/g' "$file"
    
    # Red background and text to accent
    sed -i 's/bg-\[#C8102E\]/bg-accent/g' "$file"
    sed -i 's/text-\[#C8102E\]/text-accent/g' "$file"
    sed -i 's/border-\[#C8102E\]/border-accent/g' "$file"
    sed -i 's/hover:border-\[#C8102E\]/hover:border-accent/g' "$file"
    
    # White background back to black theme
    sed -i 's/bg-\[#FFFFFF\]/bg-bg-main/g' "$file"
    
    # Background black back to bg-main or inputs
    sed -i 's/bg-\[#000000\]/bg-bg-main/g' "$file"
    
    # Navbar and general text replacements
    sed -i 's/bg-\[#00843D\]/bg-black\/50 backdrop-blur-md/g' "$file"
    
    # We replaced text-black with text-text-main
    sed -i 's/text-black\/70/text-text-muted/g' "$file"
    sed -i 's/text-black/text-text-main/g' "$file"
    
    # Restore white text
    sed -i 's/text-white\/90/text-text-muted/g' "$file"
    sed -i 's/text-white\/80/text-text-muted/g' "$file"
    sed -i 's/text-white\/70/text-text-muted/g' "$file"
    sed -i 's/text-white\/50/text-text-muted/g' "$file"
    sed -i 's/text-white/text-text-main/g' "$file"
    
    # Borders
    sed -i 's/border-black\/10/border-border-subtle/g' "$file"
    sed -i 's/border-white\/20/border-border-subtle/g' "$file"
    
    # Backgrounds
    sed -i 's/bg-gray-50/bg-bg-subtle/g' "$file"
done
