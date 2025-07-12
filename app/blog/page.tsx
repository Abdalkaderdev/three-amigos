"use client";

import { motion } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import NewsletterSection from '@/components/sections/NewsletterSection';
import BlogCard from '@/components/cards/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "Getting Lost in Göreme",
    snippet: "When our GPS failed in the heart of Turkey's Cappadocia region, what started as a navigation nightmare turned into the most magical adventure of our trip. We discovered hidden cave churches, secret viewpoints, and a local family who invited us for tea.",
    image: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg",
    location: "Göreme, Turkey",
    date: "December 15, 2024",
    readTime: "8 min read",
    author: "Abd"
  },
  {
    id: 2,
    title: "Spice Markets of Marrakech",
    snippet: "The intoxicating aromas of saffron, cumin, and cinnamon led us through the labyrinthine souks of Marrakech's medina. We learned the art of haggling, discovered the secret to perfect mint tea, and tasted spices that told stories of ancient trade routes.",
    image: "https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg",
    location: "Marrakech, Morocco",
    date: "November 28, 2024",
    readTime: "12 min read",
    author: "Raza"
  },
  {
    id: 3,
    title: "24 Hours in Duhok",
    snippet: "From sunrise at the ancient citadel to midnight conversations with Kurdish locals, we packed an entire adventure into one unforgettable day in Iraqi Kurdistan. This hidden gem taught us that the best stories come from places you least expect.",
    image: "https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg",
    location: "Duhok, Iraq",
    date: "October 22, 2024",
    readTime: "10 min read",
    author: "Wala"
  }
];

export default function Blog() {
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
            title="Travel Stories"
            subtitle="Adventures, insights, and inspiration from around the globe. Get ready to add some serious destinations to your bucket list."
          />
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <BlogCard
                id={post.id}
                title={post.title}
                snippet={post.snippet}
                image={post.image}
                location={post.location}
                date={post.date}
                readTime={post.readTime}
                author={post.author}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <NewsletterSection
            title="Never Miss an Adventure"
            subtitle="Get our latest travel stories and tips delivered straight to your inbox"
          />
        </motion.div>
      </div>
    </div>
  );
} 