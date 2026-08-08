import { ReactNode } from 'react';

interface HeroMeshWrapperProps {
  children: ReactNode;
  className?: string;
}

export function HeroMeshWrapper({
  children,
  className = '',
}: HeroMeshWrapperProps) {
  return (
    <section 
      className={`relative w-full overflow-hidden flex flex-col items-center pt-28 md:pt-30 pb-60 md:pb-72 px-6 bg-[#A8A8A8] ${className}`}
    >
      {/* Plain Silver Background Canvas */}
      <div className='absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-[#B4B4B4] via-[#A8A8A8] to-[#9E9E9E] pointer-events-none' />

      {/* White Bottom Mask */}
      <div className='absolute bottom-0 left-0 w-full h-16 md:h-20 bg-white z-[1]' />

      {/* Content Container */}
      <div className='relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center'>
        {children}
      </div>
    </section>
  );
}
