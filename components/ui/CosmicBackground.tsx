"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CosmicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 2,
  }));

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(0, 191, 255, 0.1) 0%, rgba(255, 111, 97, 0.05) 50%, transparent 100%)",
            "radial-gradient(circle at 80% 20%, rgba(255, 111, 97, 0.1) 0%, rgba(0, 191, 255, 0.05) 50%, transparent 100%)",
            "radial-gradient(circle at 40% 40%, rgba(0, 191, 255, 0.1) 0%, rgba(255, 111, 97, 0.05) 50%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      />

      {/* Parallax mouse-following glow */}
      <motion.div
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute w-64 h-64 bg-gradient-to-r from-[#00BFFF]/20 to-[#FF6F61]/20 rounded-full blur-3xl"
      />

      {/* Animated stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [100, -100],
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${particle.x}%`,
            bottom: "0%",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          className="absolute bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] rounded-full blur-sm"
        />
      ))}

      {/* Orbiting planets */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32"
      >
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-4 h-4 bg-[#00BFFF] rounded-full shadow-[0_0_20px_rgba(0,191,255,0.6)] absolute top-0 left-1/2 transform -translate-x-1/2"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-3 h-3 bg-[#FF6F61] rounded-full shadow-[0_0_15px_rgba(255,111,97,0.6)] absolute bottom-0 right-0"
        />
      </motion.div>

      {/* Second orbiting system */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/4 w-24 h-24"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-3 h-3 bg-[#FF6F61] rounded-full shadow-[0_0_15px_rgba(255,111,97,0.6)] absolute top-0 left-1/2 transform -translate-x-1/2"
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-2 h-2 bg-[#00BFFF] rounded-full shadow-[0_0_10px_rgba(0,191,255,0.6)] absolute bottom-0 right-0"
        />
      </motion.div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
    </div>
  );
} 