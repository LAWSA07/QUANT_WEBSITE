import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import { GlowingEffect } from './ui/GlowingEffect';
import { LinkPreview } from './ui/link-preview';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
  skills: string[];
  projects?: { name: string; link: string }[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  isLeader?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image,
  index,
  skills,
  projects = [],
  socialLinks = {},
  isLeader = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Add a client-side only rendering check
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get background color based on index
  const getMemberColor = () => {
    switch (index) {
      case 1:
        return "bg-blue-200"; // Lighter blue for Shubham
      case 2:
        return "bg-green-200"; // Lighter green for Utkarsh
      case 3:
        return "bg-yellow-200"; // Lighter yellow for Himanshu
      default:
        return "bg-red-200"; // Lighter red for Leader
    }
  };

  // Get gradient class name based on index for modal background
  const getGradient = () => {
    switch (index) {
      case 1:
        return "bg-gradient-to-r from-blue-300 to-purple-300";
      case 2:
        return "bg-gradient-to-r from-green-300 to-teal-300";
      case 3:
        return "bg-gradient-to-r from-yellow-300 to-orange-300";
      default:
        return "bg-gradient-to-r from-purple-300 to-indigo-300";
    }
  };

  // Get overlay gradient color
  const getOverlayGradient = () => {
    switch (index) {
      case 1:
        return "from-blue-200/70 via-white/40 to-white/10";
      case 2:
        return "from-green-200/70 via-white/40 to-white/10";
      case 3:
        return "from-yellow-200/70 via-white/40 to-white/10";
      default:
        return "from-white/70 via-white/40 to-white/10";
    }
  };

  // Get badge background color
  const getBadgeColor = () => {
    switch (index) {
      case 1:
        return "bg-blue-300";
      case 2:
        return "bg-green-300";
      case 3:
        return "bg-yellow-300";
      default:
        return "bg-purple-300";
    }
  };

  // Animation variants
  const memberVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? 100 : -100,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
        delay: index * 0.2
      } 
    }
  };

  const detailsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  // Lighter background color for better visibility
  // Original dark blue: rgb(20, 28, 40)
  // Lighter version for better visibility
  const darkBgColor = "rgb(240, 248, 255)"; // Light aliceblue color
  
  // For manga styling, add speech bubble effect
  const speechBubbleStyle = {
    position: 'relative',
    borderRadius: '20px',
    padding: '10px',
    background: 'white',
    border: '2px solid #000',
    filter: 'drop-shadow(3px 3px 2px rgba(0,0,0,0.3))'
  };

  // Generate social media profile descriptions
  const getSocialDescription = (type: string) => {
    switch (type) {
      case 'github':
        return `Check out ${name}'s projects and contributions on GitHub`;
      case 'linkedin':
        return `View ${name}'s professional experience and skills on LinkedIn`;
      case 'twitter':
        return `Follow ${name} on Twitter for updates and insights`;
      case 'website':
        return `Visit ${name}'s personal website to learn more`;
      default:
        return '';
    }
  };

  return (
    <>
      <motion.div
        className="w-full max-w-4xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={memberVariants}
      >
        <div 
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform shadow-3d relative"
          onClick={() => setIsOpen(true)}
          style={{ 
            transformStyle: "preserve-3d",
            willChange: "transform",
            backgroundColor: darkBgColor,
            position: "relative",
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: '#000',
            boxShadow: '8px 8px 0px #000'
          }}
        >
          <GlowingEffect borderWidth={2} spread={30} />
          
          {/* Manga Panel Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: "url('/images/manga/manga-panel-texture.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay"
            }}></div>
          </div>
          
          {/* Comic Speech Bubbles (Decorative) */}
          <div className="absolute -top-10 -right-5 w-20 h-20 opacity-30 z-0">
            <div className="manga-speech-bubble w-full h-full"></div>
          </div>
          
          {/* Corner Gradients */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-tl-xl z-0"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-xl z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/20 to-transparent rounded-bl-xl z-0"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-br-xl z-0"></div>
          
          {/* Floating Elements - Manga style action lines */}
          <motion.div 
            className="absolute top-6 right-8 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 z-0"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-12 left-10 w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-30 z-0"
            animate={{
              y: [0, 8, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="flex flex-col md:flex-row relative z-10">
            <div className="md:w-1/2 relative">
              <div className={`relative h-80 md:h-full w-full ${getMemberColor()} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative" style={{ backgroundColor: 'white' }}>
                    <GlowingEffect variant="both" borderWidth={3} spread={40} />
                    <img 
                      src={image}
                      alt={name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-slate-700" style={{ backgroundColor: darkBgColor }}>
              <h3 className="font-bold text-3xl md:text-4xl mb-2 font-leader" 
                  style={{ 
                    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
                    letterSpacing: "0.05em",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
                  }}>{name}</h3>
              <p className="text-purple-600 text-xl mb-4">{role}</p>
              <p className="text-gray-600 mb-4 line-clamp-3">{bio}</p>
              <div className="flex space-x-2 mt-2">
                {/* Only render social links on the client side to prevent hydration errors */}
                {isClient && (
                  <>
                    {socialLinks.github && (
                      <LinkPreview 
                        href={socialLinks.github} 
                        title={`${name}'s GitHub`}
                        description={getSocialDescription('github')}
                      >
                        <span className="text-gray-500 hover:text-purple-500 transition-colors">
                          <FaGithub size={24} />
                        </span>
                      </LinkPreview>
                    )}
                    {socialLinks.linkedin && (
                      <LinkPreview 
                        href={socialLinks.linkedin} 
                        title={`${name}'s LinkedIn`}
                        description={getSocialDescription('linkedin')}
                      >
                        <span className="text-gray-500 hover:text-purple-500 transition-colors">
                          <FaLinkedin size={24} />
                        </span>
                      </LinkPreview>
                    )}
                    {socialLinks.twitter && (
                      <LinkPreview 
                        href={socialLinks.twitter} 
                        title={`${name}'s Twitter`}
                        description={getSocialDescription('twitter')}
                      >
                        <span className="text-gray-500 hover:text-purple-500 transition-colors">
                          <FaTwitter size={24} />
                        </span>
                      </LinkPreview>
                    )}
                    {socialLinks.website && (
                      <LinkPreview 
                        href={socialLinks.website} 
                        title={`${name}'s Website`}
                        description={getSocialDescription('website')}
                      >
                        <span className="text-gray-500 hover:text-purple-500 transition-colors">
                          <FaGlobe size={24} />
                        </span>
                      </LinkPreview>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
            <motion.div 
              className="rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto relative"
              variants={detailsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: darkBgColor }}
            >
              {/* Modal Corner Gradients */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-tl-lg z-0"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-lg z-0"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/20 to-transparent rounded-bl-lg z-0"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-br-lg z-0"></div>
              
              <div className="relative z-10">
                <div className={`h-48 md:h-64 ${getGradient()} overflow-hidden relative`}>
                  {/* Modal Floating Elements */}
                  <motion.div 
                    className="absolute top-10 right-32 w-14 h-14 bg-white rounded-full opacity-20"
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-10 left-1/4 w-10 h-10 bg-white rounded-full opacity-20"
                    animate={{
                      y: [0, 12, 0],
                      x: [0, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  
                  <div className="absolute bottom-0 translate-y-1/2 left-8">
                    <img 
                      src={image} 
                      alt={name} 
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white" 
                    />
                  </div>
                </div>
                
                <button 
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-16 px-8 pb-8 text-slate-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-purple-600">{role}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    {/* Only render social links on the client side to prevent hydration errors */}
                    {isClient && (
                      <>
                        {socialLinks.github && (
                          <LinkPreview 
                            href={socialLinks.github} 
                            title={`${name}'s GitHub`}
                            description={getSocialDescription('github')}
                          >
                            <span className="text-gray-500 hover:text-purple-500 transition-colors">
                              <FaGithub size={20} />
                            </span>
                          </LinkPreview>
                        )}
                        {socialLinks.linkedin && (
                          <LinkPreview 
                            href={socialLinks.linkedin} 
                            title={`${name}'s LinkedIn`}
                            description={getSocialDescription('linkedin')}
                          >
                            <span className="text-gray-500 hover:text-purple-500 transition-colors">
                              <FaLinkedin size={20} />
                            </span>
                          </LinkPreview>
                        )}
                        {socialLinks.twitter && (
                          <LinkPreview 
                            href={socialLinks.twitter} 
                            title={`${name}'s Twitter`}
                            description={getSocialDescription('twitter')}
                          >
                            <span className="text-gray-500 hover:text-purple-500 transition-colors">
                              <FaTwitter size={20} />
                            </span>
                          </LinkPreview>
                        )}
                        {socialLinks.website && (
                          <LinkPreview 
                            href={socialLinks.website} 
                            title={`${name}'s Website`}
                            description={getSocialDescription('website')}
                          >
                            <span className="text-gray-500 hover:text-purple-500 transition-colors">
                              <FaGlobe size={20} />
                            </span>
                          </LinkPreview>
                        )}
                      </>
                    )}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-gray-600">{bio}</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {projects.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <ul className="space-y-2">
                      {projects.map((project, i) => (
                        <li key={i} className="flex">
                          <div className="mr-2">•</div>
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:underline"
                          >
                            {project.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamMember; 