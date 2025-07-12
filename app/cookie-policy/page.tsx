"use client";

import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function CookiePolicy() {
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
            <Cookie className="w-5 h-5 text-[#00BFFF]" />
            <span className="font-poppins text-sm font-semibold text-[#00BFFF]">Cookie Information</span>
          </div>
          <h1 className="font-astrobia text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Cookie Policy
          </h1>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn how we use cookies and similar technologies to enhance your browsing experience.
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

        {/* What Are Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            What Are Cookies?
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-6">
              <p className="font-poppins text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Database className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-astrobia text-lg font-bold text-gray-800 mb-2">Small Data Files</h3>
                    <p className="font-poppins text-gray-600 text-sm">Tiny text files stored on your device</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Settings className="w-6 h-6 text-[#FF6F61] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-astrobia text-lg font-bold text-gray-800 mb-2">Remember Preferences</h3>
                    <p className="font-poppins text-gray-600 text-sm">Store your settings and choices</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Types of Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Types of Cookies We Use
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: "Essential Cookies",
                description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.",
                examples: ["Session management", "Security features", "Basic functionality"],
                color: "text-[#00BFFF]"
              },
              {
                icon: Eye,
                title: "Analytics Cookies",
                description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
                examples: ["Page views", "User behavior", "Performance metrics"],
                color: "text-[#FF6F61]"
              },
              {
                icon: Globe,
                title: "Functional Cookies",
                description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
                examples: ["Language preferences", "Theme settings", "Personalized content"],
                color: "text-[#00BFFF]"
              },
              {
                icon: Shield,
                title: "Marketing Cookies",
                description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
                examples: ["Ad targeting", "Social media integration", "Campaign tracking"],
                color: "text-[#FF6F61]"
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer group"
              >
                <Card className="bg-white shadow-soft border-0 rounded-3xl p-8 hover-lift transition-all duration-300 group-hover:shadow-xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#00BFFF]/10 to-[#FF6F61]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className={`w-8 h-8 ${type.color}`} />
                  </div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-4">{type.title}</h3>
                  <p className="font-poppins text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="font-poppins text-gray-600 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cookie Management */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Managing Your Cookies
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Browser Settings",
                description: "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies, though this may affect website functionality.",
                icon: Settings,
                color: "text-[#00BFFF]"
              },
              {
                title: "Cookie Consent",
                description: "When you first visit our website, you'll see a cookie consent banner. You can change your preferences at any time.",
                icon: Shield,
                color: "text-[#FF6F61]"
              },
              {
                title: "Third-Party Cookies",
                description: "Some cookies are set by third-party services we use. You can manage these through your browser settings or the third-party service directly.",
                icon: Globe,
                color: "text-[#00BFFF]"
              }
            ].map((management, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <management.icon className={`w-6 h-6 ${management.color} mt-1 flex-shrink-0`} />
                    <div>
                      <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{management.title}</h3>
                      <p className="font-poppins text-gray-600 leading-relaxed">{management.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cookie Duration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Cookie Duration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Session Cookies",
                description: "These cookies are temporary and are deleted when you close your browser. They help maintain your session while you're on our website.",
                duration: "Until browser closes"
              },
              {
                title: "Persistent Cookies",
                description: "These cookies remain on your device for a set period or until you delete them. They remember your preferences for future visits.",
                duration: "Up to 2 years"
              }
            ].map((duration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300 h-full">
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{duration.title}</h3>
                  <p className="font-poppins text-gray-600 mb-4 leading-relaxed">{duration.description}</p>
                  <div className="bg-[#F8F6F0] rounded-xl p-3">
                    <p className="font-poppins text-sm text-gray-700">
                      <span className="font-semibold">Duration:</span> {duration.duration}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Updates to Policy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Updates to This Policy
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-4">
              <p className="font-poppins text-gray-600 leading-relaxed">
                We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              
              <div className="bg-[#F8F6F0] rounded-2xl p-6">
                <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Stay Informed</h3>
                <p className="font-poppins text-gray-600 leading-relaxed">
                  We will notify you of any material changes to this policy by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00BFFF] to-[#FF6F61] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-astrobia text-3xl font-bold mb-6">
            Questions About Cookies?
          </h2>
          <p className="font-poppins text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you have any questions about how we use cookies or this cookie policy, please don't hesitate to contact us.
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