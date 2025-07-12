"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
  buttonText?: string;
  buttonHref?: string;
  delay?: number;
  className?: string;
}

export default function AnimatedCard({
  title,
  description,
  image,
  date,
  buttonText = "Read More",
  buttonHref = "#",
  delay = 0,
  className = ""
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`cursor-pointer ${className}`}
    >
      <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-gray-800 line-clamp-2">
            {title}
          </CardTitle>
          {date && (
            <CardDescription className="text-[#FF6F61] font-medium">
              {date}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {description}
          </p>
          <AnimatedButton 
            href={buttonHref}
            variant="outline"
            size="sm"
            className="w-full"
          >
            {buttonText}
          </AnimatedButton>
        </CardContent>
      </Card>
    </motion.div>
  );
}