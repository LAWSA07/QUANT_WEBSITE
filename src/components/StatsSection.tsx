import React from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from './ui/GlowingEffect';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Manga Comic Panels Background */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/images/manga/manga-panels-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "contrast(0.8) brightness(0.5) grayscale(0.3)"
        }}
      ></div>
      
      {/* Dark overlay for readability */}
      <div 
        className="absolute inset-0 z-0 opacity-70 bg-gradient-to-t from-black via-black/60 to-black"
      ></div>
      
      {/* Corner Gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-transparent z-0"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/10 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-green-500/10 to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-pink-500/10 to-transparent z-0"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 right-[15%] w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-[20%] w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-10"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl text-white">
          Our Achievements
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-center">
          {[
            { label: "Hackathons Participated", value: "15+" },
            { label: "Awards Won", value: "8" },
            { label: "Projects Completed", value: "20+" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-lg"></div>
              <p className="text-4xl font-bold text-purple-400 mb-2 relative">{stat.value}</p>
              <p className="text-sm text-gray-300 relative">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 