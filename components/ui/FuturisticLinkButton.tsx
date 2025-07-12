"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface FuturisticLinkButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color?: string;
  isComingSoon?: boolean;
  delay?: number;
}

export default function FuturisticLinkButton({ 
  icon: Icon, 
  label, 
  href, 
  color = "from-[#00BFFF] to-[#0099CC]", 
  isComingSoon = false,
  delay = 0
}: FuturisticLinkButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow trail effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] rounded-2xl blur-xl"
      />
      
      {/* Main button */}
      <div className="relative w-full flex items-center justify-center space-x-4 px-8 py-5 rounded-2xl text-white font-semibold transition-all duration-300 shadow-2xl backdrop-blur-sm border border-white/20 bg-gradient-to-r from-black/40 to-black/20">
        {/* Animated background gradient */}
        <motion.div
          animate={{ 
            background: isHovered 
              ? "linear-gradient(45deg, #00BFFF, #FF6F61, #00BFFF)" 
              : "linear-gradient(45deg, #00BFFF, #0099CC)"
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-2xl opacity-80"
        />
        
        {/* Glow ring on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.05 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-2xl border-2 border-[#00BFFF]/50 shadow-[0_0_20px_rgba(0,191,255,0.5)]"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center space-x-4">
          {/* Animated icon */}
          <motion.div
            animate={{ 
              rotate: isHovered ? [0, 10, -10, 0] : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <Icon size={28} className="drop-shadow-lg" />
            {/* Icon glow */}
            <motion.div
              animate={{ 
                opacity: isHovered ? 0.8 : 0,
                scale: isHovered ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#00BFFF] rounded-full blur-md"
            />
          </motion.div>

          {/* Label */}
          <motion.span
            animate={{ 
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="font-poppins text-lg font-semibold tracking-wide drop-shadow-lg"
          >
            {label}
          </motion.span>

          {/* Coming soon badge */}
          {isComingSoon && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.3 }}
              className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full ml-auto border border-white/30"
            >
              Soon
            </motion.span>
          )}
        </div>

        {/* Floating particles effect */}
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [-10, -30],
                x: [-5, 5]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute top-2 left-4 w-1 h-1 bg-[#00BFFF] rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [-10, -25],
                x: [5, -3]
              }}
              transition={{ 
                duration: 1.2,
                repeat: Infinity,
                delay: 0.3,
                ease: "easeOut"
              }}
              className="absolute top-4 right-6 w-1 h-1 bg-[#FF6F61] rounded-full"
            />
          </>
        )}
      </div>
    </motion.div>
  );

  if (isComingSoon) {
    return (
      <div className="w-full">
        {buttonContent}
      </div>
    );
  }

  return (
    <Link href={href} className="w-full block">
      {buttonContent}
    </Link>
  );
} 