"use client";

import { motion } from 'framer-motion';
import { Package, Clock, Star } from 'lucide-react';
import AnimatedIcon from '@/components/ui/AnimatedIcon';

export default function Shop() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero & Store Introduction */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#00BFFF] via-[#87CEEB] to-[#FF6F61]"
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h1 className="astrobia text-5xl md:text-7xl font-bold mb-6">
              Shop
            </h1>
            <motion.div 
              className="inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <p className="text-3xl md:text-4xl font-bold">
                Coming Soon!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mb-8"
            >
              <AnimatedIcon
                icon={Package}
                size={100}
                animation="float"
                className="text-white mx-auto"
              />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="astrobia text-4xl md:text-5xl font-bold mb-6"
            >
              Three Amigos Gear Store
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 opacity-90"
            >
              We're working hard to bring you the best travel gear, exclusive merchandise, 
              and adventure essentials. Get ready for some amazing products!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            >
              {[
                "🎒 Travel Gear",
                "👕 Exclusive Merch", 
                "📸 Photography Tools",
                "🌍 Adventure Essentials"
              ].map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1, ease: "easeOut" }}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold border border-white/30"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Features & Products Preview */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#F5F5DC] to-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="astrobia text-4xl md:text-5xl font-bold text-[#00BFFF] mb-6">
              What We're Building
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Discover the amazing features and products we're preparing for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Premium Gear",
                description: "Handpicked travel essentials tested by us on real adventures"
              },
              {
                icon: Package,
                title: "Exclusive Merch",
                description: "Unique Three Amigos branded apparel and accessories"
              },
              {
                icon: Clock,
                title: "Early Access",
                description: "Be the first to know when we launch and get exclusive discounts"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-[#F5F5DC] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-[#FF6F61]" size={36} />
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 3: Newsletter & Progress */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-[#00BFFF] to-[#FF6F61]"
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12"
          >
            <h3 className="astrobia text-3xl md:text-4xl font-bold mb-6">Get Notified</h3>
            <p className="text-xl mb-8 opacity-90">Join our newsletter to be the first to know when our shop launches!</p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
              <button className="bg-white text-[#00BFFF] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-300 text-lg">
                Notify Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h3 className="astrobia text-3xl md:text-4xl font-bold mb-8">Development Progress</h3>
            <div className="bg-white/20 rounded-full h-4 mb-6">
              <motion.div 
                className="bg-white h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-lg opacity-90">75% Complete - We're almost ready to launch!</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 