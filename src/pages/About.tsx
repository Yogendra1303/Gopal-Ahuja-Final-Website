import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  Target, 
  TrendingUp, 
  Building2, 
  Globe, 
  BarChart3, 
  Scale, 
  Zap, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  Compass, 
  Lock, 
  Plus, 
  Minus,
  Activity
} from 'lucide-react';



const decisionNodes = [
  {
    step: "01",
    title: "Investment Opportunity",
    summary: "Sourcing & Screening",
    details: "Identifying off-market land plots, unlisted trophy residences, and high-yielding development opportunities before public market release."
  },
  {
    step: "02",
    title: "Developer Evaluation",
    summary: "Balance Sheet & Track Record Audit",
    details: "Rigorous audit of developer balance sheet stability, historical completion track record, construction spec quality, and DLD escrow account compliance."
  },
  {
    step: "03",
    title: "Micro Market Analysis",
    summary: "Spatial Analytics & Growth Vectors",
    details: "Deep spatial intelligence evaluating masterplan infrastructure, municipal road network expansion, and neighborhood demographic inflow forecasting."
  },
  {
    step: "04",
    title: "Supply vs Demand",
    summary: "Pipeline Quantum & Absorption Rates",
    details: "Modeling upcoming handover supply across 3-year horizons to calculate real absorption rates and prevent oversupply concentration risk."
  },
  {
    step: "05",
    title: "Rental Performance",
    summary: "Net Yield Underwriting",
    details: "Underwriting true net yields by modeling service charges, maintenance allowances, short-term vs long-term tenant demand, and occupancy trends."
  },
  {
    step: "06",
    title: "Exit Liquidity",
    summary: "Capital Realization Modeling",
    details: "Evaluating secondary market depth, institutional buyer appetite, and 3-5-10 year capital realization pathways before capital deployment."
  },
  {
    step: "07",
    title: "Legal Verification",
    summary: "Title & Regulatory Clearance",
    details: "Verifying DLD title deeds, master developer NOC clearances, zoning density permissions (FAR), and structuring secure purchase contracts."
  },
  {
    step: "08",
    title: "Investment Recommendation",
    summary: "Final Underwriting & Execution",
    details: "Formulating a definitive institutional underwriting report with downside sensitivity modeling, yield targets, and an execution roadmap."
  }
];

const advisoryServices = [
  {
    title: "Developers",
    description: "Helping local and international developers identify opportunities, validate projects, and execute market entry strategies across Dubai.",
    icon: Building2,
    services: [
      "Land Acquisition",
      "Market Entry Strategy",
      "Master Planning Support",
      "Product Positioning",
      "Development Feasibility",
      "Pricing Strategy"
    ]
  },
  {
    title: "Private Investors",
    description: "Helping investors build resilient property portfolios focused on capital appreciation and long-term wealth creation.",
    icon: TrendingUp,
    services: [
      "Investment Property Selection",
      "Off-Market Opportunities",
      "Portfolio Diversification",
      "Yield Optimization",
      "Luxury Residential Advisory",
      "Exit Strategy Planning"
    ]
  },
  {
    title: "Family Offices",
    description: "Supporting multi-generational wealth through strategic real estate investments and disciplined capital allocation.",
    icon: ShieldCheck,
    services: [
      "Strategic Capital Allocation",
      "Wealth Preservation",
      "Trophy Asset Acquisitions",
      "Cross-Border Investments",
      "Portfolio Expansion",
      "Legacy Investment Planning"
    ]
  },
  {
    title: "Institutional Investors",
    description: "Partnering with funds, institutions, and asset managers seeking disciplined investment strategies across Dubai's evolving real estate market.",
    icon: Globe,
    services: [
      "Market Intelligence",
      "Land Acquisition Advisory",
      "Commercial Investments",
      "Due Diligence",
      "Transaction Advisory",
      "Portfolio Strategy"
    ]
  }
];

const advisoryProcess = [
  {
    step: "01",
    title: "Understand",
    description: "Investment objectives, investment horizon, budget, and risk profile."
  },
  {
    step: "02",
    title: "Research",
    description: "Micro-market intelligence, pricing trends, developer evaluation, and opportunity identification."
  },
  {
    step: "03",
    title: "Validate",
    description: "Legal due diligence, financial modelling, zoning analysis, and investment risk assessment."
  },
  {
    step: "04",
    title: "Execute",
    description: "Negotiation, acquisition support, documentation, and transaction management."
  },
  {
    step: "05",
    title: "Support",
    description: "Portfolio reviews, expansion opportunities, ongoing advisory, and long-term investment planning."
  }
];

const faqItems = [
  {
    q: "How do you evaluate developers?",
    a: "We conduct rigorous balance sheet audits, past delivery track records, escrow account compliance, and construction quality inspections before recommending any developer."
  },
  {
    q: "How do overseas investors enter Dubai?",
    a: "We provide an end-to-end framework covering company/SPV incorporation, banking setup, tax efficiency, local legal compliance, and remote execution capability."
  },
  {
    q: "Should I invest in off-plan or ready properties?",
    a: "Off-plan offers capital appreciation leverage and favorable payment plans, while ready properties provide immediate cash flow. We align asset selection with your specific liquidity and timeline requirements."
  },
  {
    q: "What makes one district outperform another?",
    a: "Outperformance is driven by infrastructure integration, supply constraints, master developer governance, and population growth vectors—not marketing narrative."
  },
  {
    q: "How do you identify emerging locations?",
    a: "We track municipal masterplans, infrastructure spending (metro extensions, airports, highways), and institutional land banking patterns before retail demand arrives."
  },
  {
    q: "How do you reduce downside risk?",
    a: "Downside risk is minimized through conservative underwriting, conservative leverage assumptions, entry price discipline, and selecting high-liquidity prime corridors."
  }
];

export function About() {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-gray-900 relative overflow-x-hidden">
      <Header activeRoute="about" />

      <div className="relative z-10">

        {/* =========================================================
            SECTION 01: HERO (UNTOUCHED - EXACTLY AS ORIGINAL)
            ========================================================= */}
        <section className="relative w-full min-h-[75vh] flex items-center justify-between px-6 md:px-16 pt-32 pb-20 bg-[#FFFFFF] overflow-hidden">
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[150%] md:w-[500px] aspect-square md:h-[500px] bg-[#C8102E]/10 blur-[150px] rounded-full pointer-events-none z-0" />
          
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
            {/* Left Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-7/12 flex flex-col relative border-l border-gray-200 pl-8 md:pl-12 py-4"
            >
              <div className="absolute -left-[5px] top-4 w-2 h-2 bg-[#C8102E]" />
              <span className="text-[#C8102E] text-xs font-mono tracking-widest uppercase mb-10 block">DOCUMENT // 01 &mdash; THE INSIDER'S LENS</span>
              <h2 className="text-6xl md:text-8xl font-extrabold text-black tracking-tight leading-none mb-8">I don't just advise.<br/><span className="text-gray-300">I architect.</span></h2>
              <p className="text-gray-600 text-xl max-w-lg mt-6 leading-relaxed">
                Bridging the gap between global capital and Dubai's physical reality.
              </p>
            </motion.div>

            {/* Right Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full md:w-5/12 flex justify-center md:justify-end items-center mt-16 md:mt-0 relative"
            >
              <div className="relative w-full max-w-[420px] aspect-[4/5] bg-gray-50 border border-gray-200 flex items-center justify-center group">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C8102E]/50 z-20 transition-all group-hover:border-[#C8102E]" />
                
                <div className="w-full h-full relative overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                  <img 
                    src="/assets/photo1.jpeg" 
                    alt="Gopal Ahuja - Founder & Real Estate Advisor" 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* =========================================================
            SECTION 02: EDITORIAL — WHY SOPHISTICATED INVESTORS WORK WITH ME
            ========================================================= */}
        <section className="w-full bg-[#FFFFFF] py-28 px-6 md:px-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mb-20"
            >
              <span className="text-[#C8102E] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">STRATEGIC DISPOSITION</span>
              <h2 className="text-4xl md:text-6xl text-black font-extrabold tracking-tight leading-[1.1] mb-8">
                Why Sophisticated Investors Don't Hire Brokers
              </h2>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-light">
                Elite investors don't need property access—they need judgment, market intelligence, and capital protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
              {[
                {
                  step: "01",
                  title: "Local Intelligence",
                  text: "Understanding why a district is growing matters more than knowing that it is growing."
                },
                {
                  step: "02",
                  title: "Capital Protection",
                  text: "Returns begin by eliminating bad investments before searching for good ones."
                },
                {
                  step: "03",
                  title: "Strategic Execution",
                  text: "Precision consistently outperforms speed."
                }
              ].map((block, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#C8102E] uppercase block mb-4">{block.step} // CORE TENET</span>
                    <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight">{block.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{block.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================
            SECTION 03: INTERACTIVE TIMELINE / DECISION FLOW
            ========================================================= */}
        <section className="w-full bg-[#F9FAFB] py-28 px-6 md:px-16 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <span className="text-[#C8102E] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">PROPRIETARY METHODOLOGY</span>
              <h2 className="text-4xl md:text-5xl text-black font-extrabold tracking-tight mb-4">
                Investment Decision Framework
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                An 8-stage methodology designed to evaluate, validate, and execute real estate acquisitions across Dubai. Click or hover across stages to inspect details.
              </p>
            </motion.div>

            {/* Desktop Horizontal Interactive Flow */}
            <div className="hidden lg:grid grid-cols-8 gap-3 mb-10">
              {decisionNodes.map((node, idx) => {
                const isActive = activeNode === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveNode(idx)}
                    onMouseEnter={() => setActiveNode(idx)}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-36 ${
                      isActive 
                        ? 'bg-[#0D6323] text-white border-[#0D6323] shadow-lg scale-105 z-20' 
                        : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-xs font-bold uppercase tracking-wider font-mono ${isActive ? 'text-white/80' : 'text-[#C8102E]'}`}>
                      {node.step}
                    </span>
                    <h4 className="text-xs font-bold leading-tight line-clamp-2">
                      {node.title}
                    </h4>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Card Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white border-2 border-gray-200 p-8 md:p-12 rounded-2xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full font-mono uppercase tracking-widest">
                      Stage {decisionNodes[activeNode].step}
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                      {decisionNodes[activeNode].summary}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4 tracking-tight">
                    {decisionNodes[activeNode].title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal">
                    {decisionNodes[activeNode].details}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button 
                    onClick={() => setActiveNode((prev) => (prev === 0 ? decisionNodes.length - 1 : prev - 1))}
                    className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors"
                  >
                    &larr;
                  </button>
                  <span className="text-xs font-bold text-gray-400 px-2">{activeNode + 1} / {decisionNodes.length}</span>
                  <button 
                    onClick={() => setActiveNode((prev) => (prev === decisionNodes.length - 1 ? 0 : prev + 1))}
                    className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors"
                  >
                    &rarr;
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Vertical Flow Fallback */}
            <div className="lg:hidden grid grid-cols-1 gap-4 mt-8">
              {decisionNodes.map((node, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                  <span className="text-xs font-bold text-[#C8102E] font-mono block mb-1">{node.step} // {node.summary}</span>
                  <h4 className="text-lg font-bold text-black mb-2">{node.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{node.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>





        {/* =========================================================
            SECTION 05: STRATEGIC ADVISORY (WHO I HELP)
            ========================================================= */}
        <section className="w-full bg-[#FFFFFF] py-28 px-6 md:px-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <span className="text-[#C8102E] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">STRATEGIC ADVISORY</span>
              <h2 className="text-4xl md:text-5xl text-black font-extrabold tracking-tight mb-4">
                Who I Help
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Whether you're entering the Dubai real estate market, expanding an existing portfolio, or planning a large-scale development, every advisory engagement is tailored to your investment objectives, risk profile, and long-term goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advisoryServices.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#C8102E]/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
                  >
                    {/* Top Accent Bar on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#C8102E] mb-6 group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Title & Short Description */}
                      <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight">{card.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-8">{card.description}</p>

                      {/* Services List */}
                      <div className="border-t border-gray-100 pt-6">
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-4">ADVISORY SERVICES</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                          {card.services.map((service, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0" />
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* =========================================================
            SECTION 06: ADVISORY PROCESS (HOW WE WORK)
            ========================================================= */}
        <section className="w-full bg-[#F9FAFB] py-28 px-6 md:px-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <span className="text-[#C8102E] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">ADVISORY PROCESS</span>
              <h2 className="text-4xl md:text-5xl text-black font-extrabold tracking-tight mb-4">
                How We Work
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Every successful investment follows a disciplined process designed to reduce uncertainty, improve decision-making, and protect long-term capital.
              </p>
            </motion.div>

            {/* Desktop Horizontal Timeline */}
            <div className="hidden lg:grid grid-cols-5 gap-6 relative mt-16">
              {/* Connecting Line behind nodes */}
              <div className="absolute top-7 left-[8%] right-[8%] h-0.5 bg-gray-200 z-0" />

              {advisoryProcess.map((proc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  {/* Circle Node */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 group-hover:border-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300 flex items-center justify-center text-sm font-bold font-mono text-gray-700 shadow-sm mb-6">
                    {proc.step}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-extrabold text-black mb-3 tracking-tight">{proc.title}</h3>

                  {/* Step Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">{proc.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="lg:hidden flex flex-col space-y-8 relative mt-12 pl-6 border-l-2 border-gray-200 ml-4">
              {advisoryProcess.map((proc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-6"
                >
                  {/* Step Node circle */}
                  <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-[#C8102E] text-white text-xs font-bold font-mono flex items-center justify-center shadow-md">
                    {proc.step}
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <span className="text-[10px] font-bold tracking-widest text-[#C8102E] uppercase block mb-1">STEP {proc.step}</span>
                    <h3 className="text-lg font-extrabold text-black mb-2 tracking-tight">{proc.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{proc.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================
            SECTION 06: FREQUENTLY ASKED QUESTIONS
            ========================================================= */}
        <section className="w-full bg-[#FFFFFF] py-28 px-6 md:px-16 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-[#C8102E] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">INSTITUTIONAL CLARITY</span>
              <h2 className="text-4xl md:text-5xl text-black font-extrabold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Direct answers to essential queries regarding Dubai real estate advisory and capital deployment.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-base md:text-lg hover:text-[#C8102E] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-gray-400 shrink-0">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* =========================================================
            SECTION 07: EDITORIAL QUOTE (STRATEGIC PERSPECTIVE)
            ========================================================= */}
        <section className="w-full bg-[#090D14] text-white py-32 px-6 md:px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop')` }} />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="text-[#C8102E] text-xs font-bold tracking-[0.3em] uppercase mb-6 block">STRATEGIC PERSPECTIVE</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.15] text-white">
              Every investor can access Dubai.<br />Very few understand it.
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              Successful investing isn't about buying property. It's about understanding timing, liquidity, regulation, and long-term positioning.
            </p>
          </div>
        </section>


        {/* =========================================================
            SECTION 08: CALL TO ACTION (MINIMAL PREMIUM CTA)
            ========================================================= */}
        <section className="w-full bg-[#FFFFFF] py-28 px-6 md:px-16 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-[#C8102E] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">ADVISORY ENGAGEMENT</span>
            <h2 className="text-4xl md:text-6xl text-black font-extrabold tracking-tight mb-6 leading-tight">
              Let's Build Your Dubai Investment Strategy
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you're evaluating development land, expanding your portfolio, or entering Dubai for the first time, every successful investment begins with the right strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20call%20to%20discuss%20my%20Dubai%20investment%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-9 py-4 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                Schedule Strategy Call &rarr;
              </a>
            </div>
          </div>
        </section>

      </div> 
      <Footer /> 
    </main>
  );
}
