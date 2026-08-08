import { motion } from 'motion/react';
import { data } from '../data';
import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#C8102E] font-sans text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">
              {data.portfolioSection.header.eyebrow}
            </span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-gray-900 tracking-tighter">
              {data.portfolioSection.header.title}
            </h2>
          </div>
          <a
            href={data.portfolioSection.header.link.href}
            className="flex items-center gap-2 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#C8102E] hover:text-red-700 transition-colors"
          >
            {data.portfolioSection.header.link.label.replace('↗', '')}
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {data.portfolioSection.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative block overflow-hidden bg-white border border-gray-200"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative z-20">
                <span className="text-[#C8102E] font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                  {project.metric}
                </span>
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
