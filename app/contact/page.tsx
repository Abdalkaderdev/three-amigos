"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Youtube, Twitter, Mail, MapPin, Clock, Send, MessageCircle, Users } from 'lucide-react';
import SectionHeader from '@/components/sections/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00BFFF] via-[#FF6F61] to-[#F5F5DC] relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-card opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="font-astrobia text-5xl md:text-7xl font-bold text-white mb-6">
              Let's Connect
            </h1>
            <p className="font-poppins text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to share your travel stories, collaborate on adventures, or just say hello? 
              We're all ears and can't wait to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center space-x-4"
          >
            {[
              { icon: MessageCircle, title: "Quick Response", subtitle: "Within 24 hours" },
              { icon: Users, title: "Global Community", subtitle: "Travelers worldwide" },
              { icon: Send, title: "Direct Contact", subtitle: "Personal touch" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-3" />
                <p className="font-semibold">{feature.title}</p>
                <p className="text-sm opacity-90">{feature.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="min-h-screen bg-[#F8F6F0] py-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-astrobia text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you have a question, want to collaborate, or just want to share your travel experiences, 
              we'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-white shadow-soft border-0 rounded-3xl overflow-hidden hover-lift">
                <CardHeader className="bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] text-white p-8">
                  <CardTitle className="font-astrobia text-2xl md:text-3xl font-bold">
                    Get In Touch
                  </CardTitle>
                  <p className="font-poppins text-white/90 mt-2">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-colors duration-300 bg-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-colors duration-300 bg-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry, collaboration idea, or just say hello! We're excited to hear from you."
                        className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-colors duration-300 min-h-40 resize-none bg-white"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] hover:from-[#00BFFF]/90 hover:to-[#FF6F61]/90 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover-lift"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <Card className="bg-white shadow-soft border-0 rounded-3xl overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <h3 className="font-astrobia text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, bg: "bg-[#00BFFF]", text: "Email", value: "hello@threeamigos.travel" },
                      { icon: MapPin, bg: "bg-[#FF6F61]", text: "Location", value: "Currently traveling worldwide" },
                      { icon: Clock, bg: "bg-[#00BFFF]", text: "Response Time", value: "Usually within 24 hours" }
                    ].map((info, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-[#00BFFF]/10 to-[#FF6F61]/10"
                      >
                        <div className={`${info.bg} rounded-full p-3`}>
                          <info.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{info.text}</p>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white shadow-soft border-0 rounded-3xl overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <h3 className="font-astrobia text-2xl font-bold text-gray-800 mb-8">Follow Our Journey</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Instagram, color: "from-purple-500 to-pink-500", label: "Instagram", handle: "@threeamigos_travel" },
                      { icon: Youtube, color: "bg-red-500", label: "YouTube", handle: "Three Amigos Travel" },
                      { icon: Twitter, color: "bg-black", label: "Twitter", handle: "@threeamigos_travel" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-4 p-4 rounded-2xl text-white transition-all duration-300 hover:shadow-lg ${
                          social.color.includes('from') ? `bg-gradient-to-r ${social.color}` : social.color
                        }`}
                      >
                        <social.icon size={28} />
                        <div>
                          <p className="font-semibold text-lg">{social.label}</p>
                          <p className="text-sm opacity-90">{social.handle}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-card opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="font-astrobia text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Start Your Adventure?
          </h2>
          <p className="font-poppins text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of passionate travelers and adventurers. Whether you're planning your next trip, 
            looking for inspiration, or want to share your own stories, we're here to connect and inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              Join Our Community
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20"
            >
              Subscribe to Newsletter
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
} 