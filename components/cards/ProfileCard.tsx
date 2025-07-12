"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Youtube, Camera } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  social: {
    instagram: string;
    youtube: string;
  };
  travelStyle?: string;
  delay?: number;
}

export default function ProfileCard({
  name,
  role,
  bio,
  image,
  specialties,
  social,
  travelStyle,
  delay = 0
}: ProfileCardProps) {
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
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-3">
              <Instagram size={20} className="hover:text-[#FF6F61] transition-colors cursor-pointer" />
              <Youtube size={20} className="hover:text-[#FF6F61] transition-colors cursor-pointer" />
              <Camera size={20} className="hover:text-[#FF6F61] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        <CardContent className="p-8">
          <h3 className="astrobia text-2xl font-bold text-[#00BFFF] mb-2">
            {name}
          </h3>
          <p className="text-[#FF6F61] font-semibold mb-4 text-lg">
            {role}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {bio}
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <span 
                  key={specialty}
                  className="px-3 py-1 bg-[#F5F5DC] text-[#00BFFF] rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          {travelStyle && (
            <div className="mt-4 p-3 bg-gradient-to-r from-[#F8F6F0] to-[#F5F5DC] rounded-xl border-l-4 border-[#FF6F61]">
              <p className="text-sm text-gray-700 font-medium">
                <span className="text-[#FF6F61] font-semibold">Travel Style:</span> {travelStyle}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}