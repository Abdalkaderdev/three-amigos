"use client";

import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Globe, Users, FileText, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Disclaimer() {
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
          <div className="inline-flex items-center space-x-2 bg-[#FF6F61]/10 rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-[#FF6F61]" />
            <span className="font-poppins text-sm font-semibold text-[#FF6F61]">Important Information</span>
          </div>
          <h1 className="font-astrobia text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Disclaimer
          </h1>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read this disclaimer carefully before using our website and content.
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

        {/* General Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            General Disclaimer
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-[#FF6F61] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">Information Accuracy</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.
                  </p>
                </div>
              </div>
              
              <div className="bg-[#F8F6F0] rounded-2xl p-6">
                <p className="font-poppins text-gray-700 leading-relaxed">
                  <span className="font-semibold">Important:</span> Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Travel Information Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Travel Information Disclaimer
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Travel Recommendations",
                description: "Our travel recommendations, tips, and suggestions are based on our personal experiences and research. Travel conditions, prices, and availability can change rapidly.",
                icon: Globe,
                color: "text-[#00BFFF]"
              },
              {
                title: "Safety Information",
                description: "While we share safety tips and advice, we cannot guarantee your safety while traveling. Always research current conditions and follow local guidelines.",
                icon: Shield,
                color: "text-[#FF6F61]"
              },
              {
                title: "Pricing and Availability",
                description: "Prices, availability, and travel information mentioned on our website may be outdated. Always verify current information before making travel decisions.",
                icon: FileText,
                color: "text-[#00BFFF]"
              }
            ].map((disclaimer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <disclaimer.icon className={`w-6 h-6 ${disclaimer.color} mt-1 flex-shrink-0`} />
                    <div>
                      <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{disclaimer.title}</h3>
                      <p className="font-poppins text-gray-600 leading-relaxed">{disclaimer.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* External Links Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            External Links Disclaimer
          </h2>
          
          <Card className="bg-white shadow-soft border-0 rounded-3xl p-8">
            <div className="space-y-6">
              <p className="font-poppins text-gray-600 leading-relaxed">
                Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F8F6F0] rounded-2xl p-6">
                  <h3 className="font-astrobia text-lg font-bold text-gray-800 mb-3">No Endorsement</h3>
                  <p className="font-poppins text-gray-600 text-sm">
                    Links to external websites do not constitute an endorsement of the views, information, products, or services offered by those websites.
                  </p>
                </div>
                
                <div className="bg-[#F8F6F0] rounded-2xl p-6">
                  <h3 className="font-astrobia text-lg font-bold text-gray-800 mb-3">Use at Your Own Risk</h3>
                  <p className="font-poppins text-gray-600 text-sm">
                    You access external websites at your own risk and should review their terms of service and privacy policies.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Professional Advice Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-astrobia text-3xl font-bold text-gray-800 mb-8">
            Professional Advice Disclaimer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Not Professional Advice",
                description: "The content on this website is not intended to be a substitute for professional advice, including but not limited to legal, financial, medical, or travel advice.",
                icon: Users,
                color: "text-[#00BFFF]"
              },
              {
                title: "Consult Professionals",
                description: "Always seek the advice of qualified professionals regarding any questions you may have about legal, financial, medical, or travel matters.",
                icon: Info,
                color: "text-[#FF6F61]"
              }
            ].map((advice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-soft border-0 rounded-2xl p-6 hover-lift transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#00BFFF]/10 to-[#FF6F61]/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <advice.icon className={`w-8 h-8 ${advice.color}`} />
                  </div>
                  <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3">{advice.title}</h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">{advice.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <div className="space-y-6">
              <p className="font-poppins text-gray-600 leading-relaxed">
                To the fullest extent permitted by applicable law, Three Amigos and its team members shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Loss of profits, data, or use",
                  "Business interruption",
                  "Personal injury or property damage",
                  "Any damages arising from the use of our content",
                  "Any damages arising from travel decisions made based on our content"
                ].map((liability, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-poppins text-gray-600 flex items-start"
                  >
                    <span className="w-2 h-2 bg-[#FF6F61] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {liability}
                  </motion.li>
                ))}
              </ul>
              
              <div className="bg-[#F8F6F0] rounded-2xl p-6">
                <p className="font-poppins text-gray-700 leading-relaxed">
                  <span className="font-semibold">Important:</span> This limitation of liability applies to all claims, whether based on warranty, contract, tort, or any other legal theory, and whether or not we have been advised of the possibility of such damages.
                </p>
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
            Questions About This Disclaimer?
          </h2>
          <p className="font-poppins text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you have any questions about this disclaimer or need clarification on any points, please contact us.
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