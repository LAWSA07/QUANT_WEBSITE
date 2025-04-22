"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { FaBars } from "react-icons/fa";
import { Button } from "./Button";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Use default values for server-side rendering
  const navbarStyle = mounted ? {
    borderRadius: scrolled ? "12px" : "24px",
    width: scrolled ? "95%" : "90%",
    transform: `translateX(-50%) translateY(${scrolled ? '0' : '5px'})`,
    left: "50%"
  } : {
    borderRadius: "24px",
    width: "90%",
    transform: "translateX(-50%) translateY(5px)",
    left: "50%"
  };
  
  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-300 max-w-6xl ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg" 
        : "bg-white/80 backdrop-blur-sm"
    }`}
    style={navbarStyle}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 text-purple-600 font-bold text-xl">
              QUANT
            </Link>
          </div>

          {/* Centered nav links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-all">
              About Us
            </Link>
            <Link href="/hackathons" className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-all">
              Hackathons
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-all">
              Projects
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-all">
              Team
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button 
              href="/contact" 
              variant="default"
              className={`${scrolled ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} transition-colors`}
            >
              Contact Us
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1 px-4">
          <Link href="/about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-purple-50">
            About Us
          </Link>
          <Link href="/hackathons" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-purple-50">
            Hackathons
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-purple-50">
            Projects
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-purple-50">
            Team
          </Link>
          <div className="mt-3">
            <Button href="/contact" variant="default" className="w-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 