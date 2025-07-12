"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  animation?: 'bounce' | 'rotate' | 'pulse' | 'float';
}

export default function AnimatedIcon({ 
  icon: Icon, 
  size = 24, 
  className = "",
  animation = 'bounce'
}: AnimatedIconProps) {
  const animations = {
    bounce: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
    },
    rotate: {
      rotate: 360,
      transition: { duration: 3, repeat: Infinity, ease: "linear" as const }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
    },
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
    }
  };

  return (
    <motion.div
      animate={animations[animation]}
      className={className}
    >
      <Icon size={size} />
    </motion.div>
  );
}