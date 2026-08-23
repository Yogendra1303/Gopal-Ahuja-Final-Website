"use client";
import { use } from 'react';
import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { articles } from '@/data/articleData';

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = articles.find(a => a.slug === resolvedParams.slug);
  
  if (!article) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Article not found</div>
      </main>
    );
  }

  const relatedArticles = articles.filter(a => a.slug !== resolvedParams.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      <Header activeRoute="insights" />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back Button */}
        <motion.a
          href="/insights"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-20 left-6 md:left-12 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide">Back to Insights</span>
        </motion.a>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-[#C8102E] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 mb-6"
            >
              {article.tag || 'Market Insight'}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              {article.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-white/70 text-sm"
            >
              <span className="flex items-center gap-2">
                <User size={14} />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {article.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20"
      >
        {/* Description / Lead */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 font-light border-l-2 border-[#C8102E] pl-6">
          {article.description}
        </p>

        {/* Content Blocks */}
        <div className="prose-content space-y-8 prose prose-lg max-w-none text-gray-700 leading-[1.85] tracking-[0.01em]">
          {article.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
              case 'subheading':
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    {block.text}
                  </h2>
                );
              case 'paragraph':
                return (
                  <p key={index} className="text-gray-600">
                    {block.text}
                  </p>
                );
              case 'quote':
                return (
                  <blockquote key={index} className="pl-6 border-l-4 border-gray-200 italic my-8 text-gray-500">
                    "{block.text}"
                  </blockquote>
                );
              case 'list':
                if (Array.isArray(block.items)) {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-3 my-6">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              case 'divider':
                return <hr key={index} className="my-12 border-gray-200" />;
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
                For a personalised conversation about your investment strategy, feel free to reach out.
              </p>
              <a
                href="https://wa.me/971585952912?text=Hello%20Gopal%2C%20I%20just%20finished%20reading%20your%20article%20and%20would%20like%20to%20discuss%20my%20investment%20requirements%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[#C8102E] font-bold text-xs uppercase tracking-widest hover:text-red-700 transition-colors"
              >
                Contact Gopal &rarr;
              </a>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Related Articles */}
      <section className="w-full bg-gray-50 border-t border-gray-200 py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-10">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <a
                key={related.slug}
                href={`/insights/${related.slug}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#C8102E] transition-colors shadow-sm hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#C8102E] text-[10px] font-bold tracking-widest uppercase block mb-3">
                    {related.tag || 'Market Insight'}
                  </span>
                  <h4 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-[#C8102E] transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {related.description}
                  </p>
                  <span className="inline-block mt-4 text-gray-400 text-xs font-medium">
                    {related.readTime}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
