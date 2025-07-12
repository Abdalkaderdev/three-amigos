"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface LinkButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color?: string;
  isComingSoon?: boolean;
}

export default function LinkButton({ 
  icon: Icon, 
  label, 
  href, 
  color = "bg-[#00BFFF] hover:bg-[#0099CC]", 
  isComingSoon = false 
}: LinkButtonProps) {
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${color}`}
    >
      <Icon size={24} />
      <span className="font-poppins text-lg">{label}</span>
      {isComingSoon && (
        <span className="text-xs bg-white/20 px-2 py-1 rounded-full ml-auto">
          Soon
        </span>
      )}
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