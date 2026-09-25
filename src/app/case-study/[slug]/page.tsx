"use client";
import { useEffect, use } from 'react';
import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { caseStudies, getCaseStudyBySlug } from '@/data/articleData';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedParams.slug]);

  if (!caseStudy) {
    return notFound();
  }

  const otherStudy = caseStudies.find(cs => cs.slug !== caseStudy.slug);

  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      <Header activeRoute="" />

      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />

        {/* Back Button */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-20 left-6 md:left-12 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </motion.a>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-[#C8102E] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 mb-5"
            >
              {caseStudy.tag}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-4"
            >
              {caseStudy.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed mb-6"
            >
              {caseStudy.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-white/60 text-sm"
            >
              <span className="flex items-center gap-2">
                <User size={14} />
                {caseStudy.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {caseStudy.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {caseStudy.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="w-full bg-[#0D0D0D] border-b border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {caseStudy.metrics.map((metric, idx) => (
            <div key={idx} className="text-center md:text-left">
              <p className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">{metric.label}</p>
              <p className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">{metric.value}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20"
      >
        {/* Description / Lead */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 font-light border-l-2 border-[#C8102E] pl-6">
          {caseStudy.description}
        </p>

        {/* Content Blocks */}
        <div className="space-y-6">
          {caseStudy.content.map((block, idx) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-4 leading-tight">
                    {block.text}
                  </h2>
                );
              case 'subheading':
                return (
                  <h3 key={idx} className="text-lg md:text-xl font-bold text-gray-800 mt-8 mb-3">
                    {block.text}
                  </h3>
                );
              case 'paragraph':
                return (
                  <p key={idx} className="text-gray-700 text-base md:text-lg leading-[1.85] tracking-[0.01em]">
                    {block.text}
                  </p>
                );
              case 'quote':
                return (
                  <blockquote key={idx} className="border-l-4 border-[#C8102E] pl-6 py-4 my-10 bg-gray-50 rounded-r-lg">
                    <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed italic">
                      "{block.text}"
                    </p>
                  </blockquote>
                );
              case 'list':
                return (
                  <ul key={idx} className="space-y-3 my-6 pl-1">
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 bg-[#C8102E] rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              case 'divider':
                return (
                  <div key={idx} className="my-12 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="w-2 h-2 bg-[#C8102E] rounded-full" />
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Author Card */}
        <div className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-[#0D6323] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">GA</span>
            </div>
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-1">Gopal Ahuja</h4>
              <p className="text-[#C8102E] text-sm font-medium mb-3">Real Estate Strategist & Advisor — Dubai</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                I help developers, family offices, and private investors make confident real estate decisions in Dubai. 
                For a confidential conversation about your investment strategy, I welcome a direct discussion.
              </p>
              <a
                href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%20have%20been%20reading%20your%20market%20research%20and%20would%20like%20to%20discuss%20investment%20opportunities%20in%20Dubai."
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[#C8102E] font-bold text-xs uppercase tracking-widest hover:text-red-700 transition-colors"
              >
                Schedule a Conversation &rarr;
              </a>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Other Case Study */}
      {otherStudy && (
        <section className="w-full bg-gray-50 border-t border-gray-200 py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-10">
              Related Engagement
            </h3>
            <a
              href={`/case-study/${otherStudy.slug}`}
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#C8102E] transition-colors shadow-sm hover:shadow-md"
            >
              <div className="md:flex">
                <div className="md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={otherStudy.image}
                    alt={otherStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[#C8102E] text-[10px] font-bold tracking-widest uppercase block mb-3">
                    {otherStudy.tag}
                  </span>
                  <h4 className="text-gray-900 font-extrabold text-xl md:text-2xl leading-snug mb-4 group-hover:text-[#C8102E] transition-colors">
                    {otherStudy.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {otherStudy.description}
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    {otherStudy.metrics.slice(0, 3).map((m, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="font-bold text-gray-600">{m.value}</span>
                        <span>{m.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
