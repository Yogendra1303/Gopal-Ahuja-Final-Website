import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from "lucide-react";

export function Header({ activeRoute = 'home' }: { activeRoute?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdvisoryOpen, setIsAdvisoryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'message' | 'book'>('message');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollY } = useScroll();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Form States
  const [formName, setFormName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [formEmail, setFormEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isNameValid = formName.trim().length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail.trim());
  const isMessageValid = formMessage.trim().length > 0;
  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  useEffect(() => {
    setIsDarkMode(!document.body.classList.contains('light-theme'));
  }, []);

  useEffect(() => {
    const handleOpenDrawer = () => {
      setIsAdvisoryOpen(true);
      setIsSubmitted(false);
    };
    window.addEventListener('openContactDrawer', handleOpenDrawer);
    return () => window.removeEventListener('openContactDrawer', handleOpenDrawer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Scroll visibility handler: Hide during active scroll, show once scroll stops
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          message: formMessage,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsAdvisoryOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setNameTouched(false);
      setEmailTouched(false);
      setMessageTouched(false);
    }, 200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Gopal,\n\nI came across your website and would like to discuss a real estate investment opportunity in Dubai.\n\nPlease let me know a convenient time to connect.`
  );

  const isHeaderHidden = isScrolling && !isAdvisoryOpen && !isMobileMenuOpen;

  return (
    <>
      <motion.nav
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: isHeaderHidden ? 0 : 1, 
          y: isHeaderHidden ? -25 : 0 
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`fixed top-0 w-full h-14 z-50 px-6 md:px-12 flex items-center justify-between transition-colors duration-300 ${
          isHeaderHidden ? 'pointer-events-none' : ''
        } ${
          isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-md border-b border-slate-800' : 'bg-[#0F172A] border-b border-slate-800/80'
        }`}
      >
        <a href="/" className="z-50 flex items-center gap-2.5 text-white text-lg font-bold tracking-widest uppercase group">
          <span className="inline-flex items-center justify-center overflow-hidden rounded-[2px] shadow-sm w-[23px] h-[16px] border border-white/20 shrink-0" title="United Arab Emirates">
            <svg viewBox="0 0 600 300" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
              <rect width="600" height="100" fill="#007A3D"/>
              <rect y="100" width="600" height="100" fill="#FFFFFF"/>
              <rect y="200" width="600" height="100" fill="#000000"/>
              <rect width="150" height="300" fill="#C8102E"/>
            </svg>
          </span>
          <span>GOPAL AHUJA</span>
        </a>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
          {[
            { route: 'home', label: 'Home', href: '/' },
            { route: 'insights', label: 'Insights', href: '/insights' },
            { route: 'about', label: 'About Us', href: '/about' }
          ].map((link) => (
            <a
              key={link.route}
              href={link.href}
              className={`relative font-semibold text-[13px] tracking-wide py-1 transition-colors duration-200 ${
                activeRoute === link.route ? 'text-white font-bold' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              {activeRoute === link.route && (
                <motion.div
                  layoutId="activeNavUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8102E]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <span 
            onClick={() => { setIsSubmitted(false); setIsAdvisoryOpen(true); }} 
            className="border border-[#C8102E] text-white hover:bg-[#C8102E] hover:text-white px-6 py-2 rounded-sm font-bold text-xs transition-all duration-250 ease-out cursor-pointer uppercase tracking-widest shadow-sm hover:shadow-[0_4px_15px_rgba(200,16,46,0.35)]"
          >
            Contact Gopal
          </span>
        </div>

        <div className="md:hidden flex items-center gap-4 z-50">
          <button className="md:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0F172A]/98 backdrop-blur-2xl flex flex-col justify-center items-center px-6"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C8102E]/5 blur-[120px] rounded-none pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C8102E]/5 blur-[120px] rounded-none pointer-events-none" />

            <nav className="flex flex-col gap-8 text-center relative z-10 w-full max-w-sm">
              {[
                { route: 'home', label: 'Home', href: '/' },
                { route: 'insights', label: 'Insights', href: '/insights' },
                { route: 'about', label: 'About Us', href: '/about' }
              ].map((link) => (
                <a
                  key={link.route}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-bold tracking-tight relative inline-block mx-auto pb-1.5 transition-colors ${
                    activeRoute === link.route ? 'text-white border-b-2 border-[#C8102E]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8">
                <span 
                  className="w-full flex items-center justify-center border border-[#C8102E] text-white bg-[#C8102E] hover:bg-red-700 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest cursor-pointer transition-all duration-250 shadow-md" 
                  onClick={() => { setIsMobileMenuOpen(false); setIsSubmitted(false); setIsAdvisoryOpen(true); }}
                >
                  Contact Gopal
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advisory / Contact Sliding Panel */}
      <AnimatePresence>
        {isAdvisoryOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              onClick={handleCloseModal}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="fixed right-0 top-0 h-full w-full sm:w-[450px] max-w-[100vw] bg-[#0F172A] shadow-2xl flex flex-col z-[101] border-l border-white/5"
            >
              <div className='flex flex-col h-full overflow-y-auto p-6 md:p-8 relative'>
                <button onClick={handleCloseModal} className='absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full cursor-pointer'>
                  <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg>
                </button>

                {isSubmitted ? (
                  /* SUCCESS STATE */
                  <div className="my-auto flex flex-col items-center text-center py-8">
                    <div className="w-16 h-16 bg-[#0D6323]/20 text-[#0D6323] rounded-full flex items-center justify-center mb-6 border border-[#0D6323]/30">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-white font-extrabold tracking-tight mb-3">Thank You</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                      Your inquiry has been received successfully. Gopal personally reviews every inquiry and will get back to you shortly.
                    </p>
                    <button
                      onClick={handleCloseModal}
                      className="w-full bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-sm transition-colors mb-4 cursor-pointer"
                    >
                      Continue Browsing
                    </button>
                    <a
                      href={`https://wa.me/971585952912?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D6323] hover:text-[#0a4e1b] transition-colors"
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                  </div>
                ) : (
                  /* PREMIUM ADVISORY OPTIONS & FORM SCREEN */
                  <>
                    <span className='text-[#C8102E] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 block mt-2'>GET IN TOUCH</span>
                    <h2 className='text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-2'>Let's Discuss Your Investment Goals</h2>
                    <p className='text-gray-400 text-xs md:text-sm leading-relaxed mb-6'>
                      Whether you're exploring investment opportunities, evaluating development land, or seeking strategic real estate guidance in Dubai, I'd be happy to discuss how I can help.
                    </p>

                    {/* TAB SWITCHER */}
                    <div className="flex bg-white/5 p-1.5 rounded-md mb-6 border border-[#C8102E]/30 gap-1">
                      <button
                        type="button"
                        onClick={() => setActiveTab('message')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          activeTab === 'message'
                            ? 'bg-white/10 text-[#C8102E] shadow-md border border-[#C8102E]'
                            : 'text-gray-500 hover:text-white border border-transparent hover:border-gray-500'
                        }`}
                      >
                        <span>Send Message</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('book')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          activeTab === 'book'
                            ? 'bg-white/10 text-[#C8102E] shadow-md border border-[#C8102E]'
                            : 'text-gray-500 hover:text-white border border-transparent hover:border-gray-500'
                        }`}
                      >
                        <span>Book a Call</span>
                      </button>
                    </div>

                    {activeTab === 'book' && (
                      <div className="flex-1 w-full rounded-xl border border-white/10 overflow-hidden shadow-sm relative min-h-[350px] bg-[#0F172A] mb-6">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 -z-10">
                          <span className="text-xs uppercase tracking-widest font-bold">Loading Calendar...</span>
                        </div>
                        <iframe 
                          src="https://calendly.com/hello-gopalahuja/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0F172A&text_color=ffffff&primary_color=c8102e"
                          className="w-full h-full min-h-[350px] border-0 relative z-10"
                          title="Schedule 1-on-1 Consultation with Gopal Ahuja"
                        />
                      </div>
                    )}

                    {activeTab === 'message' && (
                      <div className="flex flex-col animate-in fade-in duration-300">
                        {/* TRUST STATEMENT */}
                        <div className="flex items-center gap-2.5 mb-6 p-3 bg-white/5 border border-white/10 rounded-sm">
                          <span className="w-2 h-2 rounded-full bg-[#0D6323] shrink-0" />
                          <p className="text-xs text-gray-300 font-medium leading-snug">
                            Every inquiry is reviewed personally by Gopal Ahuja.
                          </p>
                        </div>

                        <div className="space-y-4 mb-6">
                      {/* OPTION 1: WHATSAPP (PRIMARY) */}
                      <div className="p-4 border border-white/10 rounded-md bg-white/5 hover:border-[#25D366]/50 transition-colors">
                        <h4 className="text-sm font-bold text-white mb-1">Chat on WhatsApp</h4>
                        <p className="text-xs text-gray-400 mb-3 leading-relaxed">Connect directly with Gopal for investment discussions and quick questions.</p>
                        <a
                          href={`https://wa.me/971585952912?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 rounded-sm hover:bg-[#20bd5a] transition-all text-xs uppercase tracking-wider"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                          Chat on WhatsApp
                        </a>
                      </div>

                      {/* OPTION 2: DEVELOPER & FUND INQUIRY (SECONDARY) */}
                      <div className="p-4 border border-white/10 rounded-md bg-white/5 hover:border-white/20 transition-colors">
                        <h4 className="text-sm font-bold text-white mb-1">Developer & Fund Inquiry</h4>
                        <p className="text-xs text-gray-400 mb-3 leading-relaxed">For developers, family offices, institutional investors, and strategic partnerships.</p>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSejc0Afplc4AzZaLNZ7OkZBEzh86VDRwTwB5D5krI0JdpXj8w/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-bold py-2.5 rounded-sm hover:bg-white/10 transition-all text-xs uppercase tracking-wider shadow-sm"
                        >
                          <FileText size={16} className="text-gray-300" />
                          Open Inquiry Form
                        </a>
                      </div>
                    </div>

                    {/* DIVIDER FOR OPTION 3 */}
                    <div className='flex items-center gap-4 mb-5'>
                      <hr className='flex-grow border-white/10' />
                      <span className='text-[10px] text-gray-500 font-bold uppercase tracking-widest'>OR SEND A DIRECT MESSAGE</span>
                      <hr className='flex-grow border-white/10' />
                    </div>

                    {/* OPTION 3: SIMPLIFIED FORM */}
                    <form className='flex flex-col' onSubmit={handleFormSubmit}>
                      <label className='sr-only' htmlFor='name'>Your Name</label>
                      <input
                        type='text'
                        id='name'
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        onBlur={() => setNameTouched(true)}
                        placeholder='Your Name'
                        className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all rounded-sm placeholder:text-gray-500 ${nameTouched && !isNameValid ? 'border-red-500 focus:border-red-500 focus:ring-red-500 mb-1 text-white' : 'border-white/10 text-white focus:border-[#C8102E] focus:ring-[#C8102E] mb-3'}`}
                      />
                      {nameTouched && !isNameValid && (
                        <span className="text-red-500 text-xs mb-3 font-medium">Please enter your name.</span>
                      )}

                      <label className='sr-only' htmlFor='email'>Email Address</label>
                      <input
                        type='email'
                        id='email'
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                        placeholder='Your email address'
                        className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all rounded-sm placeholder:text-gray-500 ${emailTouched && !isEmailValid ? 'border-red-500 focus:border-red-500 focus:ring-red-500 mb-1 text-white' : 'border-white/10 text-white focus:border-[#C8102E] focus:ring-[#C8102E] mb-3'}`}
                      />
                      {emailTouched && !isEmailValid && (
                        <span className="text-red-500 text-xs mb-3 font-medium">Please enter a valid email address.</span>
                      )}

                      <label className='sr-only' htmlFor='message'>Message</label>
                      <textarea
                        id='message'
                        required
                        value={formMessage}
                        onChange={(e) => {
                          setFormMessage(e.target.value);
                          e.target.style.height = 'auto';
                          e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                        onBlur={() => setMessageTouched(true)}
                        placeholder='Briefly describe your investment goals or inquiry.'
                        rows={3}
                        className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all min-h-[80px] resize-none rounded-sm placeholder:text-gray-500 ${messageTouched && !isMessageValid ? 'border-red-500 focus:border-red-500 focus:ring-red-500 mb-1 text-white' : 'border-white/10 text-white focus:border-[#C8102E] focus:ring-[#C8102E] mb-3'}`}
                      />
                      {messageTouched && !isMessageValid && formMessage.trim().length > 0 && (
                        <span className="text-red-500 text-xs mb-3 font-medium">Please enter a message.</span>
                      )}

                      <button
                        type='submit'
                        disabled={!isFormValid || isSubmitting}
                        className='w-full mt-1 bg-[#C8102E] text-white font-bold tracking-widest py-3 hover:bg-red-700 transition-colors uppercase text-xs md:text-sm rounded-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>

                        <p className="text-[11px] text-gray-400 mt-3 text-center leading-normal">
                          Your information is kept confidential and will only be used to respond to your inquiry.
                        </p>
                      </form>
                    </div>
                  )}
                </>
              )}

                {/* DRAWER FOOTER / SOCIAL LINKS */}
                <div className='mt-auto pt-6 w-full'>
                  <div className='border-t border-white/10 pt-5 flex flex-col items-center'>
                    <span className='text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3'>Connect with Gopal</span>
                    <div className='flex items-center gap-6'>
                      {/* LinkedIn */}
                      <a href='https://www.linkedin.com/in/gopal-ahuja-a3521b14' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#C8102E] transition-colors'>
                        <span className='sr-only'>LinkedIn</span>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' /></svg>
                      </a>
                      {/* Instagram */}
                      <a href='https://www.instagram.com/gopalahujaa?igsh=aGo2bDNpcnN4eXFq' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#C8102E] transition-colors'>
                        <span className='sr-only'>Instagram</span>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' /></svg>
                      </a>
                      {/* Facebook */}
                      <a href='https://www.facebook.com/share/1atk9euc6d/' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#C8102E] transition-colors'>
                        <span className='sr-only'>Facebook</span>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

