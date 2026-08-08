import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Insights", href: "/#insights" },
    { label: "About Us", href: "#/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md backdrop-blur-md border-b border-gray-200 py-4">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <a href="/" className="text-[#C8102E] font-sans text-xs tracking-[0.2em] font-bold uppercase">GOPAL AHUJA</a>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-red-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex flex-1 items-center justify-end">
          <button
            onClick={onContactClick}
            className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-red-700 transition-colors"
          >
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-gray-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/50 backdrop-blur-md backdrop-blur-md border-b border-gray-200 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-red-700 transition-colors block py-3 border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-red-700 transition-colors block py-3 text-left"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
