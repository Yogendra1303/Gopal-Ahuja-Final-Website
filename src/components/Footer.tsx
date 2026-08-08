import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-[#000000] border-t border-white/20 pt-20 pb-10 z-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-white text-xs tracking-[0.2em] font-bold uppercase">GOPAL AHUJA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-8 pr-4 font-sans">
              Helping global developers and private investors build wealth through strategic real estate acquisitions in Dubai.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/gopal-ahuja-a3521b14" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors cursor-pointer w-5 h-5">
                <LinkedinIcon />
              </a>
              <a href="https://www.facebook.com/share/1atk9euc6d/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors cursor-pointer w-5 h-5">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/gopalahujaa?igsh=aGo2bDNpcnN4eXFq" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors cursor-pointer w-5 h-5">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-sans text-[#C8102E] text-[10px] tracking-widest uppercase mb-6 block">Navigation</span>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-none bg-zinc-700" />
                <a href="#/" className="text-white/70 text-sm hover:text-white transition-colors font-sans">Home</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-none bg-zinc-700" />
                <a href="#/insights" className="text-white/70 text-sm hover:text-white transition-colors font-sans">Insights</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-none bg-zinc-700" />
                <a href="#/about" className="text-white/70 text-sm hover:text-white transition-colors font-sans">About Us</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-none bg-zinc-700" />
                <a 
                  href="#/" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    window.dispatchEvent(new CustomEvent('openContactDrawer')); 
                  }} 
                  className="text-white/70 text-sm hover:text-white transition-colors font-sans cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="font-sans text-[#C8102E] text-[10px] tracking-widest uppercase mb-6 block">Global HQ</span>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-3">
                <MapPin size={20} className="text-white/70 shrink-0" />
                <p className="text-white/70 text-sm font-sans">
                  2107, Iris Bay<br />
                  Business Bay<br />
                  Dubai, UAE
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Mail size={20} className="text-white/70 shrink-0" />
                <a href="mailto:gopal@homeviewdubai.com" className="text-white/70 text-sm font-sans hover:text-white transition-colors">
                  gopal@homeviewdubai.com
                </a>
              </div>
              <div className="flex flex-row gap-3">
                <Phone size={20} className="text-white/70 shrink-0" />
                <a href="tel:+971585952912" className="text-white/70 text-sm font-sans hover:text-white transition-colors">
                  +971 58 595 2912
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-sans text-[#C8102E] text-[10px] tracking-widest uppercase mb-6 block">Join the List</span>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
              Receive my quarterly market models and exclusive off-market property targets.
            </p>
            <form 
              className="flex w-full border border-white/20 bg-[#000000] group focus-within:border-[#C8102E]/50 transition-colors" 
              onSubmit={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('openContactDrawer'));
              }}
            >
              <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="w-full bg-transparent px-4 py-3 font-sans text-[10px] tracking-widest text-white outline-none placeholder:text-white/70 uppercase rounded-none" />
              <button type="submit" className="px-5 border-l border-white/20 bg-white/5 hover:bg-[#C8102E] transition-colors flex items-center justify-center text-white/70 hover:text-white rounded-none cursor-pointer">
                <span className="text-lg leading-none">&rarr;</span>
              </button>
            </form>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 gap-4">
          <div className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-white/70">
            <span className="text-white font-bold">&copy; 2026 GOPAL AHUJA.</span> <span className="mx-2">|</span> MASTER SOVEREIGN ALIGNMENT.
          </div>
          <div className="flex gap-6 font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-white">
            <a href="#" className="hover:text-red-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
