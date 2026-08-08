import React from 'react';
import { GlowCard } from './ui/spotlight-card';

export default function ExpertiseServicesSection() {
  const services = [
    {
      id: '01',
      title: 'Market Intelligence',
      description: 'I track micro-market trends, zoning updates, and transaction data across Dubai, providing clear, analytical insight so you can deploy capital with certainty.'
    },
    {
      id: '02',
      title: 'Land Acquisition & Development',
      description: 'I identify high-potential development sites and structure acquisition strategies tailored for developers, institutional funds, and family offices entering the UAE market.'
    },
    {
      id: '03',
      title: 'Investment Strategy',
      description: 'I align every asset recommendation with your specific risk appetite, capital allocation goals, and long-term wealth preservation requirements.'
    },
    {
      id: '04',
      title: 'Exclusive Investment Opportunities',
      description: 'I connect clients to prime developments, off-market inventory, and private transactions that are never listed on public advisory platforms.'
    },
    {
      id: '05',
      title: 'Portfolio Growth & Asset Management',
      description: 'I oversee post-acquisition leasing strategies and portfolio performance, ensuring your assets appreciate in value and generate consistent operational yields.'
    },
    {
      id: '06',
      title: 'End-to-End Transaction Support',
      description: 'I manage every stage of the transaction, from legal due diligence and banking coordination to documentation and final handover, ensuring a seamless investment experience.'
    }
  ];

  return (
    <section className='w-full bg-[#FFFFFF] py-20 md:py-24 px-6 md:px-12 border-b border-gray-100'>
      <div className='max-w-7xl mx-auto'>
        
        {/* SECTION HEADER */}
        <div className='max-w-3xl mb-16'>
          <span className='text-[#C8102E] text-xs font-bold tracking-widest uppercase mb-4 block'>
            Strategic Advisory
          </span>
          <h2 className='text-black text-4xl md:text-5xl font-extrabold tracking-tight mb-6'>
            How I Help You Invest Smarter
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed'>
            Every investment is backed by local intelligence, strategic advisory, and end-to-end execution.
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service) => (
            <GlowCard 
              key={service.id}
              customSize={true}
              glowColor='red'
              className='!block !shadow-sm bg-[#F9FAFB] border border-gray-100 p-8 md:p-10 !rounded-xl z-10 overflow-hidden'
            >
              <div className='relative z-20 flex flex-col h-full'>
                <span className='text-[#C8102E] font-bold text-sm tracking-widest mb-6 block'>
                  {service.id}
                </span>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-600 leading-relaxed font-normal'>
                  {service.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
