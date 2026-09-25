import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2 } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  intent: string; // e.g., 'Download Report: Dubai Real Estate', 'Newsletter Subscription'
  fileUrl?: string; // Optional file to download after success
  filename?: string;
  isNewsletter?: boolean;
  defaultEmail?: string;
}

export function LeadCaptureModal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  intent,
  fileUrl,
  filename,
  isNewsletter = false,
  defaultEmail = ''
}: LeadCaptureModalProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Sync email when modal opens with a new defaultEmail
  React.useEffect(() => {
    if (isOpen) {
      setEmail(defaultEmail);
    }
  }, [isOpen, defaultEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, intent }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      
      if (fileUrl) {
        // Trigger download after 1 second so they see the success message
        setTimeout(() => {
          const a = document.createElement('a');
          a.href = fileUrl;
          if (filename) a.download = filename;
          a.target = '_blank';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => {
            onClose();
            setStatus('idle');
            setEmail('');
          }, 1000);
        }, 1000);
      } else {
        // Just close after a delay if no file
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setEmail('');
        }, 2500);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[105] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden"
          >
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-balance">
                  {isNewsletter ? 'Successfully Subscribed!' : 'Check your download.'}
                </h3>
                <p className="text-gray-600">
                  {isNewsletter 
                    ? 'Thank you for joining our exclusive investor briefing.' 
                    : 'Your download should begin automatically in a moment.'}
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
                
                <div className="mb-8">
                  <span className="text-[#C8102E] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 block">
                    {isNewsletter ? 'Join the list' : 'Access Report'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight text-balance">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-balance">
                    {description}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-red-600 text-xs font-medium text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#C8102E] hover:bg-[#a60d24] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      isNewsletter ? 'Subscribe Now' : 'Download Now'
                    )}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-wider">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
