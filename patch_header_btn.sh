sed -i 's/<motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }} className="hidden md:block">/<motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }} className="hidden md:flex items-center gap-6">/g' src/components/Header.tsx

sed -i 's/<span onClick={() => setIsAdvisoryOpen(true)} className="text-text-main text-xs font-bold uppercase tracking-\[0.2em\] cursor-pointer hover:text-\[#C5A880\] transition-colors">Contact Us<\/span>/<button onClick={toggleTheme} className="text-text-main hover:text-accent transition-colors">{isDarkMode ? <Sun size={18} \/> : <Moon size={18} \/>}<\/button><span onClick={() => setIsAdvisoryOpen(true)} className="text-text-main text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:text-accent transition-colors">Contact Us<\/span>/g' src/components/Header.tsx

sed -i 's/<button \n          className="md:hidden text-text-main z-50"/<div className="md:hidden flex items-center gap-4 z-50"><button onClick={toggleTheme} className="text-text-main hover:text-accent transition-colors">{isDarkMode ? <Sun size={20} \/> : <Moon size={20} \/>}<\/button><button className="md:hidden text-text-main z-50"/g' src/components/Header.tsx

# Also, the last button closing tag and X/Menu need to be wrapped. Let's use perl.
