import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
import { FaArrowRight, FaTrophy, FaCode, FaLightbulb, FaRocket, FaUsers, FaGithub } from "react-icons/fa";
import { GlowingEffect } from "../components/ui/GlowingEffect";
import { TracingBeam } from "../components/ui/TracingBeam";
import { BackgroundBeams } from "../components/ui/background-beams";

const Home = () => {
  return (
    <>
      <Head>
        <title>QUANT | Hackathon Team</title>
        <meta
          name="description"
          content="QUANT - A talented team of developers specializing in hackathons and innovative solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen relative bg-black text-white">
        {/* Background Beams */}
        <div className="fixed inset-0 w-full h-full z-0">
          <BackgroundBeams />
        </div>
        
        {/* Main Content with increased z-index */}
        <div className="relative z-10">
          <Navbar />
          
          <TracingBeam className="mt-8 px-4">
            {/* Hero Section - adjusted padding for the new navbar */}
            <section className="top-gradient pt-24 pb-32">
              <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 text-sm font-medium text-indigo-300"
                >
                  Award-Winning Hackathon Team
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl text-white"
                >
                  We are <span className="hero-text text-purple-300">QUANT</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mb-10 max-w-2xl text-lg text-gray-300"
                >
                  A team of three brilliant minds collaborating to create cutting-edge solutions in hackathons across the globe.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-wrap gap-4 justify-center"
                >
                  <Button 
                    className="bg-purple-600 text-white font-medium hover:bg-purple-700"
                    icon={<FaArrowRight />}
                    href="/projects"
                  >
                    View Our Projects
                  </Button>
                  <Button 
                    className="border border-purple-500 text-purple-300 bg-transparent hover:bg-purple-900/30"
                    href="/team"
                  >
                    Meet The Team
                  </Button>
                </motion.div>
              </div>
            </section>
            
            {/* Stats Section */}
            <section className="bg-black bg-opacity-80 py-20">
              <div className="w-full">
                <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl text-white">
                  Our Achievements
                </h2>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-center">
                  {[
                    { label: "Hackathons Participated", value: "15+" },
                    { label: "Awards Won", value: "8" },
                    { label: "Projects Completed", value: "20+" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 relative rounded-lg">
                      <GlowingEffect borderWidth={2} />
                      <p className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</p>
                      <p className="text-sm text-gray-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Team Section */}
            <section className="py-20 bg-gray-900">
              <div className="w-full">
                <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl text-white">
                  Meet The Team
                </h2>
                <p className="mb-16 text-center max-w-2xl mx-auto text-gray-300">
                  Three talented individuals with diverse skills working together to build innovative solutions
                </p>
                
                <div className="flex flex-col justify-center items-center space-y-16">
                  {/* Team Leader - Himanshu Singh Aswal */}
                  <TeamMember
                    key="leader"
                    index={0}
                    name="Himanshu Singh Aswal"
                    role="Team Lead & Full Stack Developer"
                    bio="Specialized in building scalable applications and system architecture. With over 5 years of experience in web development, I've led multiple teams to success in hackathons worldwide."
                    image="/himanshu-avatar.png"
                    skills={["React", "Node.js", "TypeScript", "AWS", "MongoDB", "System Design", "Team Leadership"]}
                    projects={[
                      { name: "AI-Powered Health Monitor", link: "#" },
                      { name: "Real-time Collaboration Platform", link: "#" },
                      { name: "Blockchain Identity Solution", link: "#" }
                    ]}
                    socialLinks={{
                      github: "https://github.com",
                      linkedin: "https://linkedin.com",
                      twitter: "https://twitter.com",
                      website: "https://example.com"
                    }}
                    isLeader={true}
                  />
                  
                  {/* Other Team Members */}
                  <div className="flex flex-col justify-center items-center space-y-16">
                    {[
                      {
                        name: "Shubham Singh",
                        role: "UX/UI Designer & Frontend Developer",
                        bio: "Creates beautiful interfaces with a focus on user experience and interaction design. My designs are focused on creating intuitive, accessible experiences that delight users while solving complex problems.",
                        image: "/shubham-avatar.png",
                        skills: ["UI/UX Design", "Figma", "React", "Animation", "Design Systems", "Prototyping", "User Research"],
                        projects: [
                          { name: "E-commerce Redesign", link: "#" },
                          { name: "Healthcare Dashboard", link: "#" },
                          { name: "Mobile Banking App", link: "#" }
                        ],
                        socialLinks: {
                          github: "https://github.com/shubhamsingh",
                          linkedin: "https://linkedin.com/in/shubhamsingh",
                          twitter: "https://twitter.com/shubhamsingh"
                        },
                        isLeader: true
                      },
                      {
                        name: "Utkarsh Nautiyal",
                        role: "Backend & ML Engineer",
                        bio: "Expert in database design, machine learning algorithms and scalable backends. I specialize in building robust data pipelines and implementing efficient ML models to extract insights from complex datasets.",
                        image: "/utkarsh-avatar.png",
                        skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Backend Development", "SQL", "NoSQL", "Docker"],
                        projects: [
                          { name: "Predictive Analytics Platform", link: "#" },
                          { name: "Natural Language Processing API", link: "#" },
                          { name: "Anomaly Detection System", link: "#" }
                        ],
                        socialLinks: {
                          github: "https://github.com/utkarsh",
                          linkedin: "https://linkedin.com/in/utkarsh",
                          website: "https://example.com/utkarsh"
                        },
                        isLeader: true
                      }
                    ].map((member, i) => (
                      <TeamMember
                        key={i}
                        index={i + 1}
                        name={member.name}
                        role={member.role}
                        bio={member.bio}
                        image={member.image}
                        skills={member.skills}
                        projects={member.projects}
                        socialLinks={member.socialLinks}
                        isLeader={member.isLeader}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            {/* Features Section */}
            <section className="py-20 bg-black bg-opacity-80">
              <div className="w-full">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-white">
                  What We Do
                </h2>
                <p className="mb-16 text-center max-w-2xl mx-auto text-gray-300">
                  Our collective expertise allows us to tackle complex challenges and deliver exceptional solutions
                </p>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Web Applications",
                      description: "Building responsive, intuitive web applications with modern frameworks",
                      icon: <FaCode className="text-purple-400 w-6 h-6" />
                    },
                    {
                      title: "Innovative Solutions",
                      description: "Creating outside-the-box solutions to complex problems",
                      icon: <FaLightbulb className="text-purple-400 w-6 h-6" />
                    },
                    {
                      title: "Rapid Prototyping",
                      description: "Quickly developing functional prototypes to validate ideas",
                      icon: <FaRocket className="text-purple-400 w-6 h-6" />
                    },
                    {
                      title: "Collaborative Approach",
                      description: "Working together efficiently to maximize our collective strengths",
                      icon: <FaUsers className="text-purple-400 w-6 h-6" />
                    }
                  ].map((feature, i) => (
                    <div key={i} className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm relative">
                      <GlowingEffect borderWidth={1} spread={20} />
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Recent Hackathons Section */}
            <section className="py-20 bg-gray-900">
              <div className="w-full">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-white">
                  Recent Hackathons
                </h2>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "TechCrunch Disrupt Hackathon",
                      date: "June 2023",
                      achievement: "1st Place",
                      description: "Built a deepfake detection system using computer vision and neural networks",
                      github: "https://github.com/LAWSA07/DeepFake-Detection"
                    },
                    {
                      name: "Global AI Hackathon",
                      date: "March 2023",
                      achievement: "2nd Place",
                      description: "Developed MedResAI, an AI-powered platform for drug discovery predictions",
                      github: "https://github.com/LAWSA07/medResAI"
                    },
                    {
                      name: "Google GDG Hackathon",
                      date: "January 2023",
                      achievement: "Best Technical Implementation",
                      description: "Created a plagiarism detection system for academic assignments",
                      github: "https://github.com/LAWSA07/Assignment-Plagarism-Detection"
                    }
                  ].map((hackathon, i) => (
                    <div key={i} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative">
                      <GlowingEffect borderWidth={1} spread={20} />
                      <div className={`h-48 bg-gradient-to-br ${
                        i === 0 ? "from-pink-900/40 to-red-900/40" : 
                        i === 1 ? "from-green-900/40 to-teal-900/40" : 
                        "from-blue-900/40 to-purple-900/40"
                      } flex items-center justify-center`}>
                        <div className="text-4xl text-white opacity-70">
                          {i === 0 ? <FaCode size={80} /> : 
                           i === 1 ? <FaLightbulb size={80} /> : 
                           <FaRocket size={80} />}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-xl text-white">{hackathon.name}</h3>
                          <div className="flex items-center">
                            <FaTrophy className="text-yellow-500 mr-1" />
                            <span className="text-sm font-medium text-purple-300">{hackathon.achievement}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{hackathon.date}</p>
                        <p className="text-gray-300 mb-3">{hackathon.description}</p>
                        <a 
                          href={hackathon.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-purple-400 hover:text-purple-300"
                        >
                          <FaGithub className="mr-2" /> View on GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Button 
                    href="/hackathons" 
                    className="border border-purple-500 text-purple-300 bg-transparent hover:bg-purple-900/30"
                  >
                    View All Hackathons
                  </Button>
                </div>
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="py-20 bg-black bg-opacity-80">
              <div className="w-full text-center">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl text-white">
                  Let&apos;s Build Something Amazing Together
                </h2>
                <p className="mb-10 max-w-2xl mx-auto text-gray-300">
                  Interested in collaborating with us? Have a project you&apos;d like to discuss?
                </p>
                <Button 
                  className="bg-purple-600 text-white font-medium hover:bg-purple-700"
                  href="/contact"
                >
                  Get In Touch
                </Button>
              </div>
            </section>
          </TracingBeam>
          
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home; 