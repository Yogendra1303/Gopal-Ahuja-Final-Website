import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  key?: React.Key;
  glowColor?: 'red' | 'blue' | 'green' | 'purple' | 'amber';
  customSize?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = 'red',
  customSize = false,
  ...props
}: GlowCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const colorMap = {
    red: 'rgba(200, 16, 46, 0.15)',
    blue: 'rgba(59, 130, 246, 0.15)',
    green: 'rgba(16, 185, 129, 0.15)',
    purple: 'rgba(139, 92, 246, 0.15)',
    amber: 'rgba(245, 158, 11, 0.15)',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden transition-all',
        !customSize && 'h-full w-full',
        className
      )}
      {...props}
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${colorMap[glowColor]}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
