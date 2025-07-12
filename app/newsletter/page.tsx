"use client";

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Users, Globe, Camera, Heart, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] relative overflow-x-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-card opacity-10 pointer-events-none z-0" />
      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-soft">
            <Plane className="w-5 h-5 text-[#00BFFF]" />
            <span className="font-poppins text-sm font-semibold text-[#00BFFF] tracking-wide">Three Amigos Newsletter</span>
          </div>
          <h1 className="font-astrobia text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Never Miss an Adventure
          </h1>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get weekly travel inspiration, exclusive stories, and insider tips delivered to your inbox. Join thousands of adventure seekers who trust us for their next journey.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F8F6F0] to-[#F5F5DC] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="font-poppins text-gray-600 mb-8 leading-relaxed">
              Every week, we share our latest adventures, travel tips, and exclusive content that you won't find anywhere else.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-300 font-poppins text-lg shadow-sm bg-white placeholder-gray-400"
                required
              />
              <Button 
                className="bg-[#00BFFF] text-white hover:bg-[#0099CC] px-8 py-4 rounded-xl font-semibold transition-all duration-300 font-poppins text-lg hover:scale-105 shadow-lg"
                type="submit"
              >
                Subscribe <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <p className="font-poppins text-gray-500 text-sm">
              No spam, just pure travel inspiration. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* What You'll Get */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 text-center mb-12">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Weekly Photo Stories",
                description: "Exclusive behind-the-scenes photos and stories from our latest adventures around the world.",
                color: "text-[#00BFFF]"
              },
              {
                icon: Globe,
                title: "Travel Tips & Guides",
                description: "Insider tips, hidden gems, and comprehensive guides to help you plan your next adventure.",
                color: "text-[#FF6F61]"
              },
              {
                icon: Heart,
                title: "Community Updates",
                description: "Stay connected with our growing community of adventure seekers and travel enthusiasts.",
                color: "text-[#00BFFF]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer group"
              >
                <Card className="bg-white shadow-soft border-0 rounded-3xl p-8 hover-lift transition-all duration-300 group-hover:shadow-xl text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#00BFFF]/10 to-[#FF6F61]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00BFFF] to-[#FF6F61] rounded-3xl p-8 md:p-12 text-center text-white mb-16 shadow-lg"
        >
          <h2 className="font-astrobia text-3xl font-bold mb-8">
            Join Our Growing Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Subscribers" },
              { number: "100+", label: "Countries" },
              { number: "500+", label: "Adventures" },
              { number: "4.9", label: "Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="font-astrobia text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="font-poppins text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How often do you send emails?",
                answer: "We send one newsletter every week, usually on Fridays. We also send special updates for major announcements or exclusive content."
              },
              {
                question: "Can I unsubscribe anytime?",
                answer: "Absolutely! You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any email. We respect your privacy and won't spam you."
              },
              {
                question: "What kind of content do you share?",
                answer: "We share travel stories, photography tips, destination guides, food recommendations, and exclusive behind-the-scenes content from our adventures."
              },
              {
                question: "Is my email address safe?",
                answer: "Yes! We take your privacy seriously. Your email address is only used to send you our newsletter and will never be shared with third parties."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300">
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-[#00BFFF]/10 rounded-full px-6 py-3 mb-6">
            <Mail className="w-5 h-5 text-[#00BFFF]" />
            <span className="font-poppins text-sm font-semibold text-[#00BFFF]">Ready to join the adventure?</span>
          </div>
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-4">
            Subscribe now and start exploring with us!
          </h2>
          <Button 
            className="bg-[#FF6F61] text-white hover:bg-[#E55A4C] px-8 py-4 rounded-xl font-semibold transition-all duration-300 font-poppins text-lg hover:scale-105 shadow-lg"
            size="lg"
            asChild
          >
            <a href="#" aria-label="Subscribe to Newsletter">
              Subscribe to Newsletter <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
} 