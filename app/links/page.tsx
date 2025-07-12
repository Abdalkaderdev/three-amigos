"use client";

import { motion } from 'framer-motion';
import { 
  Instagram, 
  Youtube, 
  Mail, 
  Globe, 
  ShoppingBag, 
  Plane,
  Heart,
  MessageCircle,
  Video
} from 'lucide-react';
import FuturisticLinkButton from '@/components/ui/FuturisticLinkButton';
import CosmicBackground from '@/components/ui/CosmicBackground';
import { useEffect } from 'react';

const links = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/threeamigos",
    delay: 0.2
  },
  {
    icon: Video,
    label: "TikTok",
    href: "https://tiktok.com/@threeamigos",
    delay: 0.4
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@threeamigos",
    delay: 0.6
  },
  {
    icon: Globe,
    label: "Travel Blog",
    href: "/blog",
    delay: 0.8
  },
  {
    icon: Mail,
    label: "Email Us",
    href: "mailto:hello@threeamigos.travel",
    delay: 1.0
  },
  {
    icon: ShoppingBag,
    label: "Shop",
    href: "/shop",
    delay: 1.2,
    isComingSoon: true
  }
];

export default function LinksPage() {
  useEffect(() => {
    // Hide navbar and footer for this page
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    // Cleanup function to restore them when leaving the page
    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Custom header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 pointer-events-auto">
            <Plane className="text-[#00BFFF]" size={24} />
            <span className="font-astrobia text-xl font-bold text-white">
              Three Amigos
            </span>
          </div>
        </div>
      </div>

      {/* Cosmic Background */}
      <CosmicBackground />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2
            }}
            className="text-center mb-12"
          >


            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6"
            >
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="inline-flex items-center space-x-3"
              >
                <div className="relative">
                  <Plane className="text-[#00BFFF]" size={36} />
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-[#00BFFF] rounded-full blur-md"
                  />
                </div>
                <motion.span 
                  className="font-astrobia text-3xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] bg-clip-text text-transparent"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(0,191,255,0.5)",
                      "0 0 30px rgba(255,111,97,0.5)",
                      "0 0 20px rgba(0,191,255,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Three Amigos
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-astrobia text-3xl font-bold text-white mb-4 leading-tight"
            >
              We're the Three Amigos{' '}
              <motion.span
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="inline-block"
              >
                🌍
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="font-poppins text-lg text-gray-300 leading-relaxed"
            >
              Follow our digital journey across Earth
            </motion.p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-4"
          >
            {links.map((link, index) => (
              <FuturisticLinkButton
                key={link.label}
                icon={link.icon}
                label={link.label}
                href={link.href}
                isComingSoon={link.isComingSoon}
                delay={link.delay}
              />
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-12"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-3">
              <span className="font-poppins text-sm">Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Heart className="text-[#FF6F61]" size={18} fill="currentColor" />
              </motion.div>
              <span className="font-poppins text-sm">for fellow travelers</span>
            </div>
            <motion.p
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 10px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-poppins text-xs text-gray-500"
            >
              © 2024 Three Amigos
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 