import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import SectionHeading from './ui/SectionHeading';
import { LinkPreview } from './ui/link-preview';

// Custom manga-style component for the background
const MangaBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Main background elements */}
      <div className="manga-speed-lines"></div>
      <div className="manga-burst-1"></div>
      <div className="manga-burst-2"></div>
      <div className="manga-burst-3"></div>
      
      {/* Add some custom style */}
      <style jsx>{`
        .manga-speed-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 5px,
            rgba(255, 255, 255, 0.05) 5px,
            rgba(255, 255, 255, 0.05) 6px
          );
          opacity: 0.5;
        }
        
        .manga-burst-1 {
          position: absolute;
          top: 20%;
          left: 20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
        }
        
        .manga-burst-2 {
          position: absolute;
          bottom: 30%;
          right: 20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
        }
        
        .manga-burst-3 {
          position: absolute;
          bottom: 10%;
          left: 30%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      bio: "John is an experienced software engineer with over 10 years of experience in web development. He specializes in React, Node.js, and cloud architecture.",
      image: "/images/team/john.png",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      projects: [
        { name: "E-commerce Platform", link: "#" },
        { name: "Healthcare Dashboard", link: "#" },
      ],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://johndoe.com"
      },
      isLeader: true
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      bio: "Jane is a creative designer with a passion for creating intuitive and beautiful user experiences. She has worked on numerous projects across various industries.",
      image: "/images/team/jane.png",
      skills: ["UI Design", "UX Research", "Figma", "Adobe XD"],
      projects: [
        { name: "Mobile Banking App", link: "#" },
        { name: "Travel Booking Interface", link: "#" },
      ],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      }
    },
    {
      name: "David Wilson",
      role: "Backend Developer",
      bio: "David is a backend specialist with deep knowledge of database optimization, API design, and server architecture. He loves solving complex performance problems.",
      image: "/images/team/david.png",
      skills: ["Python", "PostgreSQL", "Docker", "Kubernetes"],
      projects: [
        { name: "Data Processing Pipeline", link: "#" },
        { name: "Authentication System", link: "#" },
      ],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        website: "https://davidwilson.dev"
      }
    },
    {
      name: "Himanshu Singh Aswal",
      role: "AI & Machine Learning Engineer",
      bio: "Final-year B.Tech CSE student passionate about AI & ML, Blockchain Technology, and Full-Stack Development. Skilled in building intelligent automation solutions.",
      // Using a data URL placeholder instead of relying on an external file
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFEB3B'/%3E%3Ctext x='50%25' y='50%25' font-size='36' text-anchor='middle' alignment-baseline='middle' font-family='Arial, sans-serif' fill='%23212121'%3EHA%3C/text%3E%3C/svg%3E",
      skills: ["AI", "Machine Learning", "Blockchain", "Full-Stack Development"],
      projects: [
        { name: "Skin Disease Prediction", link: "#" },
        { name: "Deepfake Detection", link: "#" },
        { name: "Badminton Sprint Tracker", link: "#" },
      ],
      socialLinks: {
        github: "https://github.com/LAWSA07",
        linkedin: "https://www.linkedin.com/in/himanshu-singh-aswal-093186271/",
        twitter: "https://x.com/himanshu_bluray",
        website: "https://himanshusinghaswalpese.netlify.app/"
      }
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden" style={{ backgroundColor: "rgb(10, 10, 15)" }}>
      {/* Custom Manga Background */}
      <MangaBackground />
      
      {/* Dark overlay for readability */}
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-gradient-to-b from-black via-black/40 to-black"
      ></div>
      
      {/* Corner Gradients */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-purple-500/20 to-transparent z-0"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-blue-500/20 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-green-500/20 to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-pink-500/20 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl text-white">
          Our Team
        </h2>
        <p className="mb-16 text-center max-w-2xl mx-auto text-gray-300">
          Talented individuals with diverse skills working together to build innovative solutions
        </p>
        
        <div className="mt-16">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name} 
              index={index} 
              {...member} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 