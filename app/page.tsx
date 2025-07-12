"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Plane, MapPin, Users, Camera, Heart, Star, Globe, Mail, Instagram, Youtube, Twitter, Compass, Mountain, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileCard from '@/components/cards/ProfileCard';
import Link from 'next/link';

const adventures = [
  {
    id: 1,
    title: "Tokyo Street Food Adventure",
    description: "Exploring the vibrant street food scene in Shibuya with our taste buds as our guide.",
    image: "https://images.pexels.com/photos/4253297/pexels-photo-4253297.jpeg",
    date: "December 2024",
    location: "Tokyo, Japan",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Northern Lights in Iceland",
    description: "Chasing the Aurora Borealis across the stunning landscapes of Iceland.",
    image: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
    date: "November 2024",
    location: "Reykjavik, Iceland",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Santorini Sunset Vibes",
    description: "Capturing the most breathtaking sunsets from the cliffs of Oia.",
    image: "https://images.pexels.com/photos/161815/santorini-oia-sunset-greece-161815.jpeg",
    date: "October 2024",
    location: "Santorini, Greece",
    readTime: "10 min read"
  }
];

const destinations = [
  {
    id: 1,
    name: "Japan",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg",
    description: "From Tokyo's neon lights to Kyoto's ancient temples",
    rating: 4.9,
    visits: 3,
    category: "Asia"
  },
  {
    id: 2,
    name: "Iceland",
    image: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
    description: "Land of fire and ice, waterfalls and northern lights",
    rating: 4.8,
    visits: 2,
    category: "Europe"
  },
  {
    id: 3,
    name: "Greece",
    image: "https://images.pexels.com/photos/161815/santorini-oia-sunset-greece-161815.jpeg",
    description: "Mediterranean magic with stunning islands and history",
    rating: 4.7,
    visits: 4,
    category: "Europe"
  },
  {
    id: 4,
    name: "Thailand",
    image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
    description: "Tropical paradise with amazing food and culture",
    rating: 4.6,
    visits: 2,
    category: "Asia"
  }
];

const teamMembers = [
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

const latestPosts = [
  {
    id: 1,
    title: "10 Must-Try Street Foods in Tokyo",
    excerpt: "From ramen to takoyaki, discover the best street food spots in Tokyo's bustling districts.",
    image: "https://images.pexels.com/photos/4253297/pexels-photo-4253297.jpeg",
    date: "2 days ago",
    readTime: "5 min read",
    author: "Raza",
    category: "Food & Culture"
  },
  {
    id: 2,
    title: "Chasing Aurora: Our Iceland Adventure",
    excerpt: "Everything you need to know about seeing the Northern Lights in Iceland.",
    image: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
    date: "1 week ago",
    readTime: "8 min read",
    author: "Wala",
    category: "Adventure"
  },
  {
    id: 3,
    title: "Santorini on a Budget: Complete Guide",
    excerpt: "How to experience the magic of Santorini without breaking the bank.",
    image: "https://images.pexels.com/photos/161815/santorini-oia-sunset-greece-161815.jpeg",
    date: "2 weeks ago",
    readTime: "6 min read",
    author: "Abd",
    category: "Travel Tips"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00BFFF] via-[#87CEEB] to-[#FF6F61] overflow-hidden"
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-gradient-card opacity-20"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Brand Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Compass className="w-5 h-5" />
              <span className="font-poppins text-sm font-semibold">Travel Vloggers & Adventure Seekers</span>
            </motion.div>

            <h1 className="font-astrobia text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Three Amigos
            </h1>
            
            <motion.p 
              className="font-poppins text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed opacity-95"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Join Wala, Raza, and Abd on epic adventures around the globe. 
              From street food tours to mountain peaks, we're here to inspire your next journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button 
                asChild
                size="lg" 
                className="bg-[#00BFFF] text-white hover:bg-[#0099CC] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="/about">
                  Meet the Amigos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#00BFFF] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-xl"
              >
                <Link href="/blog">
                  Read Our Stories <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex justify-center space-x-8 text-sm"
            >
              <div className="text-center">
                <div className="font-astrobia text-2xl font-bold">30+</div>
                <div className="opacity-80">Countries</div>
              </div>
              <div className="text-center">
                <div className="font-astrobia text-2xl font-bold">500+</div>
                <div className="opacity-80">Adventures</div>
              </div>
              <div className="text-center">
                <div className="font-astrobia text-2xl font-bold">50K+</div>
                <div className="opacity-80">Followers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced Animated Airplane */}
        <motion.div 
          className="absolute top-20 right-10 text-white/70"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Plane size={48} />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-[#F8F6F0] relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-card opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#00BFFF]/10 rounded-full px-6 py-3 mb-6">
              <Mountain className="w-5 h-5 text-[#00BFFF]" />
              <span className="font-poppins text-sm font-semibold text-[#00BFFF]">Our Journey in Numbers</span>
            </div>
            <h2 className="font-astrobia text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              From Humble Beginnings to Global Adventures
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here's what we've accomplished together on our incredible journey around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: "25+", label: "Countries Visited", color: "text-[#00BFFF]" },
              { icon: Camera, number: "500+", label: "Photos Shared", color: "text-[#FF6F61]" },
              { icon: Users, number: "50K+", label: "Community Members", color: "text-[#00BFFF]" },
              { icon: Heart, number: "100+", label: "Adventures Completed", color: "text-[#FF6F61]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-soft hover-lift transition-all duration-300 group-hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#00BFFF]/10 to-[#FF6F61]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`font-astrobia text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <p className="font-poppins text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recent Adventures Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#FF6F61]/10 rounded-full px-6 py-3 mb-6">
              <Coffee className="w-5 h-5 text-[#FF6F61]" />
              <span className="font-poppins text-sm font-semibold text-[#FF6F61]">Latest Adventures</span>
            </div>
            <h2 className="font-astrobia text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Recent Travel Stories
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Check out our latest travel stories and get inspired for your next adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <motion.div
                key={adventure.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="cursor-pointer group"
              >
                <Card className="h-full bg-white shadow-soft border-0 rounded-3xl overflow-hidden hover-lift transition-all duration-300 group-hover:shadow-xl">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={adventure.image} 
                      alt={adventure.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF6F61] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {adventure.readTime}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{adventure.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="font-astrobia text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-[#00BFFF] transition-colors duration-300">
                      {adventure.title}
                    </CardTitle>
                    <CardDescription className="text-[#FF6F61] font-semibold">
                      {adventure.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-poppins text-gray-600 line-clamp-3 leading-relaxed">
                      {adventure.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors duration-300 w-full font-semibold"
                      asChild
                    >
                      <Link href="/blog">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Destinations */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-[#F5F5DC] relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-card opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#00BFFF]/10 rounded-full px-6 py-3 mb-6">
              <Globe className="w-5 h-5 text-[#00BFFF]" />
              <span className="font-poppins text-sm font-semibold text-[#00BFFF]">Featured Destinations</span>
            </div>
            <h2 className="font-astrobia text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Favorite Places
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These destinations have captured our hearts and created unforgettable memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer group"
              >
                <Card className="bg-white shadow-soft border-0 rounded-3xl overflow-hidden hover-lift transition-all duration-300 group-hover:shadow-xl">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {destination.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-astrobia text-xl font-bold text-gray-800 group-hover:text-[#00BFFF] transition-colors duration-300">{destination.name}</h3>
                      <div className="flex items-center text-[#FF6F61]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-semibold">{destination.rating}</span>
                      </div>
                    </div>
                    <p className="font-poppins text-gray-600 text-sm mb-4 leading-relaxed">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">{destination.visits} visits</span>
                      <MapPin className="w-4 h-4 text-[#00BFFF]" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#FF6F61]/10 rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-[#FF6F61]" />
              <span className="font-poppins text-sm font-semibold text-[#FF6F61]">Meet the Team</span>
            </div>
            <h2 className="font-astrobia text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Three Friends, One Mission
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each of us brings something unique to create the ultimate travel experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <ProfileCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                  specialties={member.specialties}
                  social={member.social}
                  travelStyle={member.travelStyle}
                  delay={index * 0.2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest Blog Posts */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-[#F8F6F0] relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-card opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#00BFFF]/10 rounded-full px-6 py-3 mb-6">
              <Coffee className="w-5 h-5 text-[#00BFFF]" />
              <span className="font-poppins text-sm font-semibold text-[#00BFFF]">Latest Stories</span>
            </div>
            <h2 className="font-astrobia text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Fresh Travel Insights
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover tips, stories, and inspiration from our latest adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer group"
              >
                <Card className="bg-white shadow-soft border-0 rounded-3xl overflow-hidden hover-lift transition-all duration-300 group-hover:shadow-xl">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF6F61] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.author}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                      <span className="text-sm text-[#FF6F61] font-semibold">{post.readTime}</span>
                    </div>
                    <h3 className="font-astrobia text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#00BFFF] transition-colors duration-300">{post.title}</h3>
                    <p className="font-poppins text-gray-600 line-clamp-3 mb-6 leading-relaxed">{post.excerpt}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors duration-300 font-semibold"
                      asChild
                    >
                      <Link href="/blog">
                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-[#00BFFF] to-[#FF6F61] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-card opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Mail className="w-5 h-5 text-white" />
              <span className="font-poppins text-sm font-semibold text-white">Join Our Adventure</span>
            </div>
            <h2 className="font-astrobia text-4xl md:text-5xl font-bold text-white mb-6">
              Never Miss an Adventure
            </h2>
            <p className="font-poppins text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get weekly travel inspiration, exclusive stories, and insider tips delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-white/50 transition-all duration-300 font-poppins"
              />
              <Button 
                className="bg-[#FF6F61] text-white hover:bg-[#E55A4C] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 font-poppins hover:scale-105 shadow-lg"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="font-poppins text-white/70 text-sm mt-4">
              No spam, just pure travel inspiration. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-16 bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="font-astrobia text-2xl font-bold text-white mb-8">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram", color: "bg-[#00BFFF] hover:bg-[#0099CC]" },
                { icon: Youtube, href: "#", label: "YouTube", color: "bg-[#FF6F61] hover:bg-[#E55A4C]" },
                { icon: Twitter, href: "#", label: "Twitter", color: "bg-[#00BFFF] hover:bg-[#0099CC]" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl text-white transition-all duration-300 hover:shadow-lg ${social.color}`}
                >
                  <social.icon size={24} />
                  <span className="font-poppins font-semibold">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}