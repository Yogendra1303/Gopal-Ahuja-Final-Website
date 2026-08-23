import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Play } from 'lucide-react';

export function ScrollExpansionHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const isMobileState = windowSize.width < 768;
  const baseWidth = isMobileState ? windowSize.width * 0.9 : Math.min(1152, windowSize.width * 0.95);
  const baseHeight = baseWidth / (16 / 9); // 16:9 ratio matching screenshot
  
  const currentWidth = baseWidth + (scrollProgress * (windowSize.width - baseWidth));
  const currentHeight = baseHeight + (scrollProgress * (windowSize.height - baseHeight));
  const currentRadius = 24 - (scrollProgress * 24); // 24px (1.5rem) to 0px

  if (windowSize.width === 0) {
    return (
      <div ref={containerRef} className="w-full relative -mt-32 z-20 h-[150vh] mb-24">
        <div className="sticky top-0 w-full flex items-start justify-center">
          <div className="w-full max-w-6xl aspect-[2.39/1] rounded-3xl bg-black shadow-2xl border border-black/10"></div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full relative -mt-32 z-20 h-[150vh] mb-24">
      <div className="sticky top-0 w-full flex items-start justify-center overflow-hidden h-screen">
        <motion.div 
          style={{ 
            width: `${currentWidth}px`, 
            height: `${currentHeight}px`, 
            borderRadius: `${currentRadius}px` 
          }}
          className="relative overflow-hidden bg-black shadow-2xl border border-black/10 group cursor-pointer"
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
                className="object-cover w-full h-full"
              />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

              <div 
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C8102E]/90 backdrop-blur-md border border-white/30 w-24 h-24 rounded-full flex items-center justify-center group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:scale-110 transition-all duration-500 shadow-2xl z-30"
              >
                <Play className="w-10 h-10 ml-2 text-white fill-white" />
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
