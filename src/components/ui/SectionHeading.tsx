import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  theme = 'dark'
}) => {
  const titleColor = theme === 'dark' ? 'text-white' : 'text-slate-800';
  const subtitleColor = theme === 'dark' ? 'text-gray-300' : 'text-slate-600';

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 