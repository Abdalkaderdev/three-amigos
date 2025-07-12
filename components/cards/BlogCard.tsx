"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface BlogCardProps {
  id: number;
  title: string;
  snippet: string;
  image: string;
  location: string;
  date: string;
  readTime: string;
  author: string;
  delay?: number;
}

export default function BlogCard({
  id,
  title,
  snippet,
  image,
  location,
  date,
  readTime,
  author,
  delay = 0
}: BlogCardProps) {
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
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF6F61] text-white px-3 py-1 rounded-full text-sm font-medium">
              {author}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-[#00BFFF] transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-[#FF6F61] font-medium">
            {readTime}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
            {snippet}
          </p>
          <AnimatedButton 
            href={`/blog/${id}`}
            variant="primary"
            size="sm"
            className="w-full"
          >
            Read Full Story
          </AnimatedButton>
        </CardContent>
      </Card>
    </motion.div>
  );
}