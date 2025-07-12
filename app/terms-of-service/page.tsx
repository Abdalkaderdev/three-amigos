"use client";

import { motion } from 'framer-motion';
import { FileText, Shield, Users, Globe, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsOfService() {
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
            <FileText className="w-5 h-5 text-[#00BFFF]" />
            <span className="font-poppins text-sm font-semibold text-[#00BFFF]">Legal Information</span>
          </div>
          <h1 className="font-astrobia text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Terms of Service
          </h1>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website and services.
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

        {/* Acceptance of Terms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Acceptance of Terms
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-6">
              <p className="font-poppins text-gray-600 leading-relaxed">
                By accessing and using the Three Amigos website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Your Agreement</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    By using our website, you agree to these terms and our privacy policy. These terms apply to all visitors, users, and others who access or use our service.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Use License */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Use License
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Personal Use",
                description: "You may view, download, and print content from our website for personal, non-commercial use only.",
                icon: Users,
                color: "text-[#00BFFF]"
              },
              {
                title: "No Commercial Use",
                description: "You may not use our content for commercial purposes without our express written permission.",
                icon: AlertTriangle,
                color: "text-[#FF6F61]"
              },
              {
                title: "No Modification",
                description: "You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from our website.",
                icon: Shield,
                color: "text-[#00BFFF]"
              }
            ].map((license, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <license.icon className={`w-6 h-6 ${license.color} mt-1 flex-shrink-0`} />
                    <div>
                      <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{license.title}</h3>
                      <p className="font-poppins text-gray-600 leading-relaxed">{license.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            User Responsibilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Respectful Behavior",
                description: "You agree to use our website in a respectful manner and not to engage in any harmful, offensive, or illegal activities."
              },
              {
                title: "Accurate Information",
                description: "When providing information to us, you agree to provide accurate, current, and complete information."
              },
              {
                title: "Security",
                description: "You are responsible for maintaining the confidentiality of any account information and passwords."
              },
              {
                title: "Compliance",
                description: "You agree to comply with all applicable laws and regulations when using our website and services."
              }
            ].map((responsibility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300 h-full">
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{responsibility.title}</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">{responsibility.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Disclaimers
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-[#FF6F61] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Content Accuracy</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of the content on our website.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Travel Information</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    Travel information, recommendations, and tips are provided for informational purposes only. We are not responsible for any decisions made based on this information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Service Availability</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    We do not guarantee that our website will be available at all times. We may suspend or discontinue the service at any time without notice.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Limitation of Liability */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Limitation of Liability
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <p className="font-poppins text-gray-600 leading-relaxed mb-6">
              In no event shall Three Amigos, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our website or services.
            </p>
            
            <div className="bg-[#F8F6F0] rounded-2xl p-6">
              <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Important Notice</h3>
              <p className="font-poppins text-gray-600 leading-relaxed">
                Our liability is limited to the maximum extent permitted by law. This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Changes to Terms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Changes to Terms
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-4">
              <p className="font-poppins text-gray-600 leading-relaxed">
                We reserve the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Continued Use</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    Your continued use of our website after any changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00BFFF] to-[#FF6F61] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-astrobia text-3xl font-bold mb-6">
            Questions About Terms?
          </h2>
          <p className="font-poppins text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you have any questions about these terms of service, please contact us for clarification.
          </p>
          <div className="font-poppins text-white/80">
            <p>Email: legal@threeamigos.com</p>
            <p>We'll respond to your inquiry within 48 hours.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 