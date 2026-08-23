import { Calendar, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ScheduleConsultationSection() {
  return (
    <section id="book-consultation" className="w-full bg-[#0D0D0D] text-white py-16 px-6 md:px-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Compact Headline & Call Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#C8102E] text-xs font-bold tracking-[0.25em] uppercase block">
              DIRECT CALENDAR ACCESS
            </span>

            <h3 className="text-white text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Book a 30-Min Private Consultation
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Pick a date & time directly on Gopal Ahuja's calendar to discuss plot acquisitions, real estate investments, or developer strategy in Dubai.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase tracking-wider bg-white/5 px-3 py-2 rounded border border-white/10">
                <Clock size={14} className="text-[#C8102E]" />
                <span>30 Minutes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase tracking-wider bg-white/5 px-3 py-2 rounded border border-white/10">
                <ShieldCheck size={14} className="text-[#0D6323]" />
                <span>100% Confidential</span>
              </div>
            </div>

            {/* Direct Channel Note */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-sans">Need instant WhatsApp response?</span>
              <a 
                href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%27m%20interested%20in%20scheduling%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8102E] hover:text-red-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>WhatsApp</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Compact Embedded Calendly Widget */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-800 shadow-xl overflow-hidden h-[540px] relative">
            <div className="bg-gray-900 text-white px-5 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-[#C8102E]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-200">Gopal Ahuja — Live Calendar</span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase font-mono tracking-wider">30 MIN SESSION</span>
            </div>

            {/* Calendly iFrame Embed */}
            <iframe 
              src="https://calendly.com/hello-gopalahuja/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=c8102e"
              className="w-full h-[490px] border-0"
              title="Schedule a 1-on-1 Consultation with Gopal Ahuja"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
