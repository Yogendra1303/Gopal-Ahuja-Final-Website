import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';

export function ScrollExpansionVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["1.5rem", "0.5rem"]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div ref={containerRef} className="w-full max-w-5xl md:max-w-[1116px] mx-auto relative -mt-44 md:-mt-56 z-20 aspect-video shadow-2xl px-4 md:px-0">
      <motion.div 
        style={{ scale, borderRadius }}
        className="w-full h-full relative overflow-hidden bg-black border border-white/20 group cursor-pointer shadow-2xl"
        onClick={!isPlaying ? handlePlay : undefined}
      >
        {isPlaying ? (
          <video
            ref={videoRef}
            src="/assets/LPV 1.MP4"
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <img 
              src="/assets/video_thumbnail.jpeg" 
              alt="Gopal Ahuja Video Thumbnail" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 group-hover:from-black/40 transition-colors duration-500"></div>

            {/* Translucent Glass Play Button */}
            <div 
              onClick={handlePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/25 backdrop-blur-md border border-white/40 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:scale-110 transition-all duration-300 shadow-2xl z-30"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 text-white fill-white" />
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

