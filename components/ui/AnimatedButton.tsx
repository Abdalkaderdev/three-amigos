"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface AnimatedButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick 
}: AnimatedButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 hover:scale-105 rounded-full";
  
  const variantClasses = {
    primary: "bg-[#00BFFF] text-white hover:bg-[#0099CC]",
    secondary: "bg-[#FF6F61] text-white hover:bg-[#E55A4C]",
    outline: "border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} inline-flex items-center space-x-2`}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="group">
      {buttonContent}
    </button>
  );
}