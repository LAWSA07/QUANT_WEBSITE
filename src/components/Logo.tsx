import React from "react";
import Link from 'next/link';

interface LogoProps {
  expanded?: boolean;
}

const Logo: React.FC<LogoProps> = ({ expanded = true }) => {
  return (
    <Link href="/" className="flex items-center text-purple-600">
      {/* Just the logo text - made more bold */}
      <span className="text-xl font-extrabold tracking-tight transition-opacity duration-300">
        Videa
      </span>
    </Link>
  );
};

export default Logo; 