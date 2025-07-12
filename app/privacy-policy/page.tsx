"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Mail, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#F8F6F0] to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#00BFFF]/10 rounded-full px-6 py-3 mb-6">
            <Shield className="w-5 h-5 text-[#00BFFF]" />
            <span className="font-poppins text-sm font-semibold text-[#00BFFF]">Privacy & Security</span>
          </div>
          <h1 className="font-astrobia text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 mb-12 text-center"
        >
          <p className="font-poppins text-gray-600">
            <span className="font-semibold">Last Updated:</span> December 2024
          </p>
        </motion.div>

        {/* Information We Collect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Information We Collect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Mail,
                title: "Personal Information",
                items: [
                  "Email address (for newsletter subscription)",
                  "Name (optional, for personalization)",
                  "Location data (if you choose to share)",
                  "Social media handles (if you connect accounts)"
                ],
                color: "text-[#00BFFF]"
              },
              {
                icon: Globe,
                title: "Usage Information",
                items: [
                  "Pages visited and time spent",
                  "Device and browser information",
                  "IP address and location",
                  "Cookies and tracking data"
                ],
                color: "text-[#FF6F61]"
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer group"
              >
                <Card className="bg-white shadow-soft border-0 rounded-3xl p-8 hover-lift transition-all duration-300 group-hover:shadow-xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#00BFFF]/10 to-[#FF6F61]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className={`w-8 h-8 ${section.color}`} />
                  </div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="font-poppins text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How We Use Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            How We Use Your Information
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Newsletter Delivery",
                description: "To send you our weekly travel newsletter with stories, tips, and updates about our adventures."
              },
              {
                title: "Website Improvement",
                description: "To analyze how our website is used and make improvements to provide a better user experience."
              },
              {
                title: "Personalization",
                description: "To personalize content and recommendations based on your interests and location."
              },
              {
                title: "Communication",
                description: "To respond to your questions, comments, and feedback about our content and services."
              }
            ].map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300">
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{use.title}</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">{use.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Information Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Information Sharing
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Lock className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">We Do Not Sell Your Data</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    We never sell, trade, or rent your personal information to third parties. Your data is used solely for the purposes outlined in this policy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-[#FF6F61] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Service Providers</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    We may share information with trusted service providers who help us operate our website and deliver our newsletter. These providers are bound by confidentiality agreements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Legal Requirements</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    We may disclose information if required by law or to protect our rights, property, or safety, or that of our users or the public.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Your Rights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Your Rights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Access Your Data",
                description: "You can request a copy of the personal information we have about you."
              },
              {
                title: "Update Information",
                description: "You can update or correct your personal information at any time."
              },
              {
                title: "Delete Your Data",
                description: "You can request deletion of your personal information from our systems."
              },
              {
                title: "Unsubscribe",
                description: "You can unsubscribe from our newsletter at any time using the link in our emails."
              }
            ].map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300 h-full">
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{right.title}</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">{right.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00BFFF] to-[#FF6F61] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-astrobia text-3xl font-bold mb-6">
            Questions About Privacy?
          </h2>
          <p className="font-poppins text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you have any questions about this privacy policy or how we handle your information, 
            please don't hesitate to contact us.
          </p>
          <div className="font-poppins text-white/80">
            <p>Email: privacy@threeamigos.com</p>
            <p>We'll respond to your inquiry within 48 hours.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 