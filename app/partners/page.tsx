"use client";

import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import SectionHeader from '@/components/sections/SectionHeader';
import PartnerCard from '@/components/cards/PartnerCard';
import NewsletterSection from '@/components/sections/NewsletterSection';

const partners = [
  {
    id: 1,
    name: "Adventure Gear Co.",
    description: "Premium outdoor equipment for serious adventurers. From lightweight tents to durable backpacks, we trust their gear for every expedition.",
    logo: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg",
    category: "Equipment"
  },
  {
    id: 2,
    name: "Global SIM Cards",
    description: "Stay connected anywhere in the world with reliable data coverage. Perfect for sharing your adventures in real-time.",
    logo: "https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg",
    category: "Technology"
  },
  {
    id: 3,
    name: "Wanderlust Hotels",
    description: "Boutique accommodations in unique destinations. Each property tells a story and offers authentic local experiences.",
    logo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    category: "Accommodation"
  },
  {
    id: 4,
    name: "TravelSafe Insurance",
    description: "Comprehensive travel insurance for peace of mind. We never travel without their reliable coverage and 24/7 support.",
    logo: "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg",
    category: "Insurance"
  },
  {
    id: 5,
    name: "FoodieMap App",
    description: "Discover the best local food wherever you go. This app has led us to some of the most incredible culinary experiences.",
    logo: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "Technology"
  },
  {
    id: 6,
    name: "EcoTravel Tours",
    description: "Sustainable tourism experiences that give back to local communities. Responsible travel that makes a positive impact.",
    logo: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    category: "Tours"
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Meet Our Partners"
            subtitle="Discover the amazing brands we trust and recommend for your adventures. These partnerships help us bring you the best travel experiences and recommendations."
          />
        </motion.div>

        {/* Partners Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <PartnerCard
                id={partner.id}
                name={partner.name}
                description={partner.description}
                logo={partner.logo}
                category={partner.category}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] rounded-3xl p-8 md:p-12 text-center text-white mb-16"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="mb-6"
          >
            <Handshake className="text-white mx-auto" size={60} />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="astrobia text-3xl md:text-4xl font-bold mb-4"
          >
            Become a Partner
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
          >
            Ready to reach passionate travelers and adventure seekers? 
            Let's create something amazing together.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-[#00BFFF] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Partnership Inquiry
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00BFFF] transition-colors">
              Download Media Kit
            </button>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <NewsletterSection
            title="Stay Updated"
            subtitle="Get the latest partner announcements and exclusive travel deals delivered to your inbox"
          />
        </motion.div>
      </div>
    </div>
  );
} 