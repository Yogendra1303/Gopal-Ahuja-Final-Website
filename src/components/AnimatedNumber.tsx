import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

export function AnimatedNumber({ value, prefix = '', suffix = '', fractionDigits = 0 }: { value: number, prefix?: string, suffix?: string, fractionDigits?: number }) {
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, {
    bounce: 0,
    duration: 800
  });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  const displayValue = useTransform(springValue, (current) => 
    `${prefix}${current.toFixed(fractionDigits)}${suffix}`
  );

  return <motion.span>{displayValue}</motion.span>;
}
