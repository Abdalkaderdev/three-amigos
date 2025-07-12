"use client";

import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundGradient?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundGradient = "bg-gradient-to-br from-[#00BFFF] via-[#87CEEB] to-[#FF6F61]"
}: HeroSectionProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center ${backgroundGradient} overflow-hidden`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="astrobia text-6xl md:text-8xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedButton 
              href={ctaHref}
              size="lg"
              className="bg-white text-[#00BFFF] hover:bg-gray-100"
            >
              {ctaText}
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated Airplane */}
      <motion.div 
        className="absolute top-20 right-10 text-white/70"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Plane size={48} />
      </motion.div>
    </section>
  );
}