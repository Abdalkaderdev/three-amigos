"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface NewsletterSectionProps {
  title: string;
  subtitle: string;
  placeholder?: string;
  buttonText?: string;
}

export default function NewsletterSection({
  title,
  subtitle,
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}: NewsletterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-20 bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] rounded-3xl p-8 md:p-12 text-center text-white"
    >
      <h2 className="astrobia text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-xl mb-8 opacity-90">
        {subtitle}
      </p>
      <div className="max-w-md mx-auto flex gap-4">
        <input 
          type="email" 
          placeholder={placeholder}
          className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <Button 
          className="bg-white text-[#00BFFF] hover:bg-gray-100 px-8 rounded-full font-semibold transition-colors duration-300"
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
}