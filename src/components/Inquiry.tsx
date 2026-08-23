import { motion, AnimatePresence } from 'motion/react';
import { Send, X, Calendar, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

interface InquiryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Inquiry({ isOpen, onClose }: InquiryProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'book'>('form');

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
          className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-white z-[70] border-l border-gray-200 flex flex-col shadow-2xl"
        >
          <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#C8102E] font-sans text-xs uppercase font-bold tracking-[0.25em]">
                PRIVATE ADVISORY CHANNEL
              </span>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-gray-100 p-1 rounded-lg mb-6 border border-[#C8102E]/30 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'form'
                    ? 'bg-white text-gray-900 shadow-sm border border-[#C8102E]'
                    : 'text-gray-500 hover:text-gray-900 border border-transparent hover:border-gray-300'
                }`}
              >
                <Mail size={15} className={activeTab === 'form' ? 'text-[#C8102E]' : ''} />
                <span>Send Message</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('book')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'book'
                    ? 'bg-white text-gray-900 shadow-sm border border-[#C8102E]'
                    : 'text-gray-500 hover:text-gray-900 border border-transparent hover:border-gray-300'
                }`}
              >
                <Calendar size={15} className={activeTab === 'book' ? 'text-[#C8102E]' : ''} />
                <span>Book 1-on-1</span>
              </button>
            </div>

            {/* TAB CONTENT 1: CALENDLY BOOKING */}
            {activeTab === 'book' && (
              <div className="flex-1 flex flex-col h-full min-h-[450px]">
                <div className="mb-4">
                  <h2 className="font-sans font-extrabold text-2xl text-gray-900 tracking-tight leading-snug">
                    Schedule Your Consultation
                  </h2>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Select a time on Gopal Ahuja's calendar below for a 30-minute private session.
                  </p>
                </div>

                <div className="flex-1 w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm relative min-h-[400px] max-h-[500px] bg-[#0b0b0b]">
                  {/* Loading placeholder just in case it takes time */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 -z-10">
                    <Calendar size={24} className="mb-2 opacity-50" />
                    <span className="text-xs uppercase tracking-widest font-bold">Loading Calendar...</span>
                  </div>
                  <iframe 
                    src="https://calendly.com/hello-gopalahuja/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=c8102e&theme=dark"
                    className="w-full h-full min-h-[400px] border-0 relative z-10"
                    title="Schedule 1-on-1 Consultation with Gopal Ahuja"
                  />
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: INQUIRY FORM */}
            {activeTab === 'form' && (
              <div className="flex-1 flex flex-col">
                <h2 className="font-sans font-semibold text-2xl md:text-3xl text-gray-900 tracking-tight leading-snug mb-3">
                  Let's Discuss Your Investment Goals
                </h2>
                
                <p className="font-sans text-xs text-gray-600 leading-relaxed mb-6">
                  Whether you're exploring investment opportunities, evaluating development land, or seeking strategic guidance in Dubai, leave your details below.
                </p>

                <form className="space-y-5 flex-1 flex flex-col" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for reaching out. I have received your inquiry.');
                  onClose();
                }}>
                  <div>
                    <label htmlFor="email" className="block text-gray-900 font-sans text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">
                      YOUR EMAIL ADDRESS
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-white border border-gray-200 px-4 py-3.5 text-gray-900 font-sans text-sm focus:outline-none focus:border-[#C8102E] transition-colors placeholder:text-gray-400 rounded-sm"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-900 font-sans text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">
                      YOUR INVESTMENT GOALS (OPTIONAL)
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-white border border-gray-200 px-4 py-3.5 text-gray-900 font-sans text-sm focus:outline-none focus:border-[#C8102E] transition-colors resize-none placeholder:text-gray-400 rounded-sm"
                      placeholder="Tell me about your investment goals or how I can help."
                    ></textarea>
                  </div>

                  <div className="mt-auto pt-6">
                    <button type="submit" className="group w-full flex items-center justify-center gap-3 bg-[#C8102E] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300 hover:bg-red-700 cursor-pointer shadow-sm">
                      <Send size={14} className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      SEND INQUIRY
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
          
          <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
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
