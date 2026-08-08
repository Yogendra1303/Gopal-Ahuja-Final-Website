import { motion } from 'motion/react';
import { data } from '../data';
import { Download } from 'lucide-react';

export function Intelligence() {
  return (
    <section id="insights" className="py-32 w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-left">
          <span className="text-[#C8102E] font-sans text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">
            {data.intelligenceSection.header.eyebrow}
          </span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-gray-900 tracking-tighter">
            {data.intelligenceSection.header.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.intelligenceSection.reports.map((report, idx) => (
            <motion.div 
              key={report.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 p-10 flex flex-col h-full rounded-none"
            >
              <span className="text-[#C8102E] font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block">
                {report.dateLabel}
              </span>
              <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4 tracking-tight leading-snug">
                {report.title}
              </h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-auto pb-12">
                {report.description}
              </p>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <a 
                  href={report.fileUrl}
                  download={report.filename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#C8102E] hover:text-red-700 transition-colors"
                >
                  <Download size={12} />
                  <span>{report.downloadText}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
