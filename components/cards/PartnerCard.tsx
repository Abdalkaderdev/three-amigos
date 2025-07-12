"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Tag } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface PartnerCardProps {
  id: number;
  name: string;
  description: string;
  logo: string;
  category: string;
  delay?: number;
}

export default function PartnerCard({
  id,
  name,
  description,
  logo,
  category,
  delay = 0
}: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="cursor-pointer"
    >
      <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden group">
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={logo} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF6F61] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
              <Tag size={12} />
              <span>{category}</span>
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <div className="flex items-center space-x-1">
              <Building2 size={14} />
              <span>Partner</span>
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-[#00BFFF] transition-colors duration-300">
            {name}
          </CardTitle>
          <CardDescription className="text-[#FF6F61] font-medium">
            {category}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
            {description}
          </p>
          <AnimatedButton 
            variant="primary"
            size="sm"
            className="w-full"
          >
            Learn More
          </AnimatedButton>
        </CardContent>
      </Card>
    </motion.div>
  );
}