'use client';
import React, { useMemo, type JSX } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GradientShimmerProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  pauseBetween?: number;
  gradient?: 'sunrise' | 'ocean' | 'silver';
  baseColor?: string;
}

export function GradientShimmer({
  children,
  as: Component = 'p',
  className,
  duration = 2.5,
  pauseBetween = 2000,
  gradient = 'sunrise',
  baseColor = '#ffffff'
}: GradientShimmerProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements);

  const getGradient = () => {
    switch (gradient) {
      case 'sunrise':
        return 'linear-gradient(90deg, #0000 0%, #FFD700 20%, #FF69B4 50%, #FFD700 80%, #0000 100%)';
      case 'ocean':
        return 'linear-gradient(90deg, #0000 0%, #00FFFF 20%, #0000FF 50%, #00FFFF 80%, #0000 100%)';
      case 'silver':
      default:
        return 'linear-gradient(90deg, #0000 0%, #E0E0E0 20%, #FFFFFF 50%, #E0E0E0 80%, #0000 100%)';
    }
  };

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent',
        className
      )}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration: duration,
        repeatDelay: pauseBetween / 1000,
        ease: 'linear',
      }}
      style={
        {
          backgroundImage: `${getGradient()}, linear-gradient(${baseColor}, ${baseColor})`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}
