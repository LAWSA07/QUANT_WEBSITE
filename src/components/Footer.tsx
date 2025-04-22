import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const navigationLinks = [
    { 
      title: "Navigation", 
      links: [
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Projects", href: "/projects" },
        { name: "Hackathons", href: "/hackathons" },
        { name: "Contact", href: "/contact" }
      ] 
    },
    { 
      title: "Resources", 
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Tech Stack", href: "/tech-stack" }
      ] 
    },
    { 
      title: "Social", 
      links: [
        { name: "GitHub", href: "https://github.com/quant-team" },
        { name: "LinkedIn", href: "https://linkedin.com/company/quant-team" },
        { name: "Twitter", href: "https://twitter.com/quant_team" },
        { name: "Instagram", href: "https://instagram.com/quant_hackathon" }
      ] 
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <span className="text-2xl font-extrabold tracking-tight text-purple-600">QUANT</span>
            <p className="text-sm text-slate-500 mt-4">
              A team of innovative developers
              <br />building award-winning solutions
              <br />at hackathons worldwide.
            </p>
          </div>
          
          {/* Navigation Sections */}
          {navigationLinks.map((section, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-lg font-medium">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-purple-600 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © QUANT Team {year}. All rights reserved.
          </p>
          <p className="mt-4 text-sm text-slate-500 md:mt-0">
            Crafting digital solutions at hackathons since 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 