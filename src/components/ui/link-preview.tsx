import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

interface LinkPreviewProps {
  href: string;
  children: React.ReactNode;
  imageUrl?: string;
  title?: string;
  description?: string;
}

export const LinkPreview: React.FC<LinkPreviewProps> = ({
  href,
  children,
  imageUrl,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Determine the icon based on the URL
  const getIcon = () => {
    if (href.includes('github.com')) {
      return <FaGithub size={16} />;
    } else if (href.includes('linkedin.com')) {
      return <FaLinkedin size={16} />;
    } else if (href.includes('twitter.com') || href.includes('x.com')) {
      return <FaTwitter size={16} />;
    } else {
      return <FaGlobe size={16} />;
    }
  };

  // Determine the title based on the URL if not provided
  const getDefaultTitle = () => {
    if (href.includes('github.com')) {
      return 'GitHub Profile';
    } else if (href.includes('linkedin.com')) {
      return 'LinkedIn Profile';
    } else if (href.includes('twitter.com') || href.includes('x.com')) {
      return 'Twitter Profile';
    } else {
      return 'Website';
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {children}
      </a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-64 bg-black/80 backdrop-blur-lg border border-white/10 text-white p-4 rounded-lg shadow-lg left-1/2 -translate-x-1/2 bottom-full mb-2"
            style={{ 
              transformOrigin: 'bottom center',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-4 h-4 bg-black/80 backdrop-blur-lg rotate-45 border-r border-b border-white/10" />
            
            <div className="flex gap-3">
              <div className="text-blue-400">
                {getIcon()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{title || getDefaultTitle()}</p>
                {description && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">{description}</p>
                )}
                <p className="text-xs text-blue-400 mt-1 truncate">{href}</p>
              </div>
            </div>
            
            {imageUrl && (
              <div className="mt-3 rounded-md overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={title || getDefaultTitle()} 
                  className="w-full h-24 object-cover"
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 