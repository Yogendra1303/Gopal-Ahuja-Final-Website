import { motion, AnimatePresence } from 'motion/react';
import { Send, X } from 'lucide-react';
import { useEffect } from 'react';

interface InquiryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Inquiry({ isOpen, onClose }: InquiryProps) {
  // Prevent scrolling on body when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white/60 backdrop-blur-sm z-[60]"
          onClick={onClose}
        />
      )}
      {isOpen && (
        <motion.div
          key="drawer"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] border-l border-gray-200 flex flex-col shadow-2xl"
        >
            <div className="flex-1 overflow-y-auto p-8 md:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <span className="text-[#C8102E] font-sans text-xs uppercase font-bold tracking-[0.25em]">
                  GET IN TOUCH
                </span>
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <h2 className="font-sans font-semibold text-3xl md:text-4xl text-gray-900 tracking-tighter leading-[1.1] mb-6">
                Let's Discuss Your Investment Goals
              </h2>
              
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-8">
                Whether you're exploring investment opportunities, evaluating development land, or seeking strategic real estate guidance in Dubai, I'd be happy to discuss how I can help.
              </p>

              <form className="space-y-6 flex-1 flex flex-col" onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for reaching out. I have received your inquiry.');
                onClose();
              }}>
                <div>
                  <label htmlFor="email" className="block text-gray-900 font-sans text-[10px] uppercase tracking-[0.2em] mb-3 font-semibold">
                    YOUR EMAIL ADDRESS
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-4 text-gray-900 font-sans text-sm focus:outline-none focus:border-[#C8102E] transition-colors placeholder:text-gray-400"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-sans text-[10px] uppercase tracking-[0.2em] mb-3 font-semibold">
                    YOUR INVESTMENT GOALS (OPTIONAL)
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-white border border-gray-200 px-4 py-4 text-gray-900 font-sans text-sm focus:outline-none focus:border-[#C8102E] transition-colors resize-none placeholder:text-gray-400"
                    placeholder="Tell me about your investment goals or how I can help."
                  ></textarea>
                </div>

                <div className="mt-auto pt-8">
                  <button type="submit" className="group w-full flex items-center justify-center gap-3 bg-[#C8102E] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300 hover:bg-red-700 cursor-pointer">
                    <Send size={14} className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            </div>
            
            <div className="px-8 py-6 border-t border-gray-200 flex items-center justify-between">
              <span className="text-gray-500 font-sans text-[10px] uppercase tracking-widest">
                SECURE ADVISORY CHANNEL
              </span>
              <span className="text-gray-500 font-sans text-[10px] uppercase tracking-widest">
                © 2026 UTC
              </span>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
