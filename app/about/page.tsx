"use client";

import { motion } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import ProfileCard from '@/components/cards/ProfileCard';

const amigos = [
  {
    name: "Wala",
    role: "The Sunrise Chaser",
    bio: "Meet Wala, our resident photography wizard who wakes up at 4 AM just to catch the perfect golden hour shot. This guy can turn a rainy day into a masterpiece and has a sixth sense for finding the most Instagram-worthy spots. His camera bag weighs more than his suitcase, and he's not sorry about it.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    specialties: ["Golden Hour Photography", "Drone Mastery", "Street Portraits"],
    social: { instagram: "@wala_travels", youtube: "@WalaAdventures" },
    travelStyle: "The Planner - Always has backup batteries and knows exactly where the sun will rise"
  },
  {
    name: "Raza",
    role: "The Culinary Daredevil",
    bio: "Raza is our fearless food explorer who believes 'when in doubt, eat it.' This human garbage disposal has tried everything from fermented shark in Iceland to fried tarantulas in Cambodia. His superpower? Finding the best street food spots that even locals don't know about. Warning: don't travel with him if you're on a diet.",
    image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg",
    specialties: ["Street Food Hunting", "Local Market Tours", "Spice Mastery"],
    social: { instagram: "@raza_eats", youtube: "@RazaFoodTours" },
    travelStyle: "The Foodie - Plans entire trips around meal times and has a stomach of steel"
  },
  {
    name: "Abd",
    role: "The Adventure Architect",
    bio: "Abd is the mastermind who turns 'let's go somewhere' into epic adventures. This guy can navigate any city without a map, speaks five languages (and makes up the rest), and has a knack for finding the most off-the-beaten-path experiences. When things go wrong, he calls it 'adding character to the story.'",
    image: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg",
    specialties: ["Route Planning", "Local Connections", "Adventure Sports"],
    social: { instagram: "@abd_adventures", youtube: "@AbdExplores" },
    travelStyle: "The Adventurer - Lives by the motto 'the best stories start with getting lost'"
  }
];

export default function About() {
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
            title="Meet the Three Amigos"
            subtitle="Three friends, countless adventures, and endless stories to share. We're passionate travelers who believe the best journeys are the ones shared with great company."
          />
        </motion.div>

        {/* Amigos Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {amigos.map((amigo, index) => (
            <motion.div
              key={amigo.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ProfileCard
                name={amigo.name}
                role={amigo.role}
                bio={amigo.bio}
                image={amigo.image}
                specialties={amigo.specialties}
                social={amigo.social}
                travelStyle={amigo.travelStyle}
                delay={index * 0.2}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F8F6F0] to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#00BFFF] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FF6F61] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#00BFFF] rounded-full"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="astrobia text-4xl md:text-5xl font-bold text-[#00BFFF] mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Story Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00BFFF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">The Beginning</h3>
                      <p className="text-gray-600 leading-relaxed">
                        It all started with a spontaneous weekend trip to the mountains. What was supposed to be a simple hiking adventure 
                        turned into an epic journey of discovery, friendship, and countless laughs. That's when we realized we had something special – 
                        a shared passion for exploration and a knack for turning ordinary moments into extraordinary memories.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">The Journey</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Three years and thirty countries later, we're still going strong. Each of us brings something unique to the table: 
                        Wala captures the beauty, Raza discovers the flavors, and Abd plans the perfect adventure. Together, we create 
                        content that inspires others to step out of their comfort zones and explore this amazing world.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Our Mission</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our mission is simple: to show you that the world is more accessible, more beautiful, and more delicious than you might think. 
                        Whether you're planning your first solo trip or your fiftieth family vacation, we're here to inspire and guide you every step of the way.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-fit"
              >
                <h3 className="font-bold text-xl text-gray-800 mb-6 text-center">Our Numbers</h3>
                <div className="space-y-6">
                  {[
                    { number: "30+", label: "Countries Explored", color: "text-[#00BFFF]" },
                    { number: "3", label: "Years Together", color: "text-[#FF6F61]" },
                    { number: "100K+", label: "Adventure Seekers", color: "text-[#00BFFF]" },
                    { number: "∞", label: "Stories to Share", color: "text-[#FF6F61]" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#00BFFF] to-[#FF6F61] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Ready to Join Our Adventure?</h3>
                <p className="text-white/90 mb-4">
                  Follow our journey and discover the world through our eyes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#00BFFF] px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Follow Our Journey
                  </button>
                  <button className="border-2 border-white text-white px-6 py-2 rounded-xl font-semibold hover:bg-white hover:text-[#00BFFF] transition-colors">
                    Subscribe to Updates
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 