import { Calendar, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function ScheduleConsultationSection() {
  return (
    <section id="book-consultation" className="w-full bg-[#F9FAFB] py-20 md:py-24 px-6 md:px-12 border-t border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C8102E] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            PRIVATE 1-ON-1 ADVISORY
          </span>
          <h2 className="text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Schedule a Direct Strategy Call with Gopal Ahuja.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Select a convenient date and time below to discuss your real estate goals, plot acquisitions, or portfolio strategy in Dubai.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Value & Consultation Focus */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
              
              {/* Profile Badge */}
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                <img 
                  src="/assets/photo1.jpeg" 
                  alt="Gopal Ahuja" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C8102E] shadow-sm"
                />
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">Gopal Ahuja</h3>
                  <p className="text-[#C8102E] text-xs font-bold uppercase tracking-wider">Real Estate Strategist — Dubai</p>
                </div>
              </div>

              {/* Call Attributes */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                  <Clock size={16} className="text-[#C8102E]" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                  <ShieldCheck size={16} className="text-[#0D6323]" />
                  <span>Confidential</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated one-on-one session focused on high-yield opportunities, market intelligence, and actionable real estate guidance tailored to your investment mandate.
              </p>

              {/* Key Topics Covered */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-extrabold text-gray-900 uppercase tracking-widest block mb-3">
                  CONSULTATION FOCUS AREAS:
                </span>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C8102E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Development Plot & Land Due Diligence</h4>
                    <p className="text-xs text-gray-500 leading-normal">Zoning, FAR analysis, and plot evaluation in prime Dubai corridors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C8102E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Ultra-Luxury & Waterfront Portfolio Structuring</h4>
                    <p className="text-xs text-gray-500 leading-normal">Capital allocation into high-yield residential & commercial assets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C8102E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Developer Market Entry & Risk Mitigation</h4>
                    <p className="text-xs text-gray-500 leading-normal">Contractor procurement, regulatory compliance, and execution risk control.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Backup */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-gray-900 uppercase block">Prefer Instant Messaging?</span>
                <p className="text-xs text-gray-500">Connect directly on WhatsApp for urgent inquiries.</p>
              </div>
              <a 
                href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%27m%20interested%20in%20scheduling%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D6323] hover:bg-[#0a4d1b] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors whitespace-nowrap shadow-xs"
              >
                WhatsApp &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Calendly Calendar */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden min-h-[660px] relative">
            <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[#C8102E]" />
                <span className="text-xs font-bold uppercase tracking-widest">Interactive Calendar Booking</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">LIVE CALENDAR</span>
            </div>
            
            {/* Calendly iFrame Embed */}
            <iframe 
              src="https://calendly.com/hello-gopalahuja/30min?hide_gdpr_banner=1&primary_color=c8102e"
              className="w-full h-[650px] border-0"
              title="Schedule a 1-on-1 Consultation with Gopal Ahuja"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
