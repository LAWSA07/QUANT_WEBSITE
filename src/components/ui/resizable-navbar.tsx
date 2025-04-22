"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface ResizableNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  navItems?: Array<{ label: string; href: string }>;
  rightElement?: React.ReactNode;
  changeWhenScrolled?: boolean;
  initialBgColor?: string;
  scrolledBgColor?: string;
  initialTextColor?: string;
  scrolledTextColor?: string;
  initialBorderRadius?: string;
  scrolledBorderRadius?: string;
  initialWidth?: string;
  scrolledWidth?: string;
  initialPadding?: string;
  scrolledPadding?: string;
}

export const ResizableNavbar = React.forwardRef<
  HTMLDivElement,
  ResizableNavbarProps
>(
  (
    {
      logo = "QUANT",
      navItems = [
        { label: "About Us", href: "/about" },
        { label: "Hackathons", href: "/hackathons" },
        { label: "Projects", href: "/projects" },
        { label: "Team", href: "/team" },
      ],
      rightElement,
      changeWhenScrolled = true,
      initialBgColor = "bg-white/80 backdrop-blur-sm",
      scrolledBgColor = "bg-white/95 backdrop-blur-md shadow-lg",
      initialTextColor = "text-gray-700",
      scrolledTextColor = "text-gray-700",
      initialBorderRadius = "rounded-3xl",
      scrolledBorderRadius = "rounded-xl",
      initialWidth = "w-[90%]",
      scrolledWidth = "w-[95%]",
      initialPadding = "py-4 px-6",
      scrolledPadding = "py-2 px-4",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { scrollY } = useScroll();

    const scrollYThreshold = 50;

    const hasScrolled = useTransform(
      scrollY,
      (value) => value > scrollYThreshold
    );

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      if (!changeWhenScrolled) return;
      return hasScrolled.onChange((value) => {
        setScrolled(value);
      });
    }, [hasScrolled, changeWhenScrolled]);

    return (
      <div
        ref={ref}
        className={cn("fixed top-4 left-0 right-0 z-50 mx-auto", className)}
        {...props}
      >
        <NavBody
          scrolled={scrolled}
          initialBgColor={initialBgColor}
          scrolledBgColor={scrolledBgColor}
          initialBorderRadius={initialBorderRadius}
          scrolledBorderRadius={scrolledBorderRadius}
          initialWidth={initialWidth}
          scrolledWidth={scrolledWidth}
          initialPadding={initialPadding}
          scrolledPadding={scrolledPadding}
        >
          <div className="flex w-full items-center justify-between">
            <NavLogo
              scrolled={scrolled}
              initialTextColor={initialTextColor}
              scrolledTextColor={scrolledTextColor}
            >
              {logo}
            </NavLogo>

            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              <NavItems
                navItems={navItems}
                scrolled={scrolled}
                initialTextColor={initialTextColor}
                scrolledTextColor={scrolledTextColor}
              />
            </div>

            {rightElement && (
              <div className="hidden md:flex">{rightElement}</div>
            )}

            <MobileNav
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              navItems={navItems}
              rightElement={rightElement}
              initialTextColor={initialTextColor}
            />
          </div>
        </NavBody>
      </div>
    );
  }
);

ResizableNavbar.displayName = "ResizableNavbar";

// Sub-components
interface NavBodyProps {
  scrolled: boolean;
  initialBgColor: string;
  scrolledBgColor: string;
  initialBorderRadius: string;
  scrolledBorderRadius: string;
  initialWidth: string;
  scrolledWidth: string;
  initialPadding: string;
  scrolledPadding: string;
  children: React.ReactNode;
}

const NavBody = ({
  scrolled,
  initialBgColor,
  scrolledBgColor,
  initialBorderRadius,
  scrolledBorderRadius,
  initialWidth,
  scrolledWidth,
  initialPadding,
  scrolledPadding,
  children,
}: NavBodyProps) => {
  return (
    <motion.nav
      className={cn(
        "transition-all duration-300",
        scrolled ? scrolledBgColor : initialBgColor,
        scrolled ? scrolledBorderRadius : initialBorderRadius,
        scrolled ? scrolledWidth : initialWidth,
        scrolled ? scrolledPadding : initialPadding
      )}
      initial={false}
      animate={{
        transform: `translateX(-50%) translateY(${scrolled ? '0' : '5px'})`,
      }}
      transition={{ duration: 0.3 }}
      style={{
        left: "50%"
      }}
    >
      {children}
    </motion.nav>
  );
};

interface NavLogoProps {
  scrolled: boolean;
  initialTextColor: string;
  scrolledTextColor: string;
  children: React.ReactNode;
}

const NavLogo = ({
  scrolled,
  initialTextColor,
  scrolledTextColor,
  children,
}: NavLogoProps) => {
  return (
    <Link href="/" className={cn("flex-shrink-0 font-bold text-xl text-purple-600")}>
      {children}
    </Link>
  );
};

interface NavItemsProps {
  navItems: Array<{ label: string; href: string }>;
  scrolled: boolean;
  initialTextColor: string;
  scrolledTextColor: string;
}

const NavItems = ({
  navItems,
  scrolled,
  initialTextColor,
  scrolledTextColor,
}: NavItemsProps) => {
  return (
    <>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "inline-flex items-center px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-all",
            scrolled ? scrolledTextColor : initialTextColor,
            "hover:text-purple-600"
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: Array<{ label: string; href: string }>;
  rightElement?: React.ReactNode;
  initialTextColor: string;
}

const MobileNav = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navItems,
  rightElement,
  initialTextColor,
}: MobileNavProps) => {
  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
        aria-controls="mobile-menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <motion.path
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { d: "M6 18L18 6M6 6l12 12" },
              closed: { d: "M4 6h16M4 12h16M4 18h16" },
            }}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <MobileNavMenu
        isMobileMenuOpen={isMobileMenuOpen}
        navItems={navItems}
        rightElement={rightElement}
        initialTextColor={initialTextColor}
      />
    </div>
  );
};

interface MobileNavMenuProps {
  isMobileMenuOpen: boolean;
  navItems: Array<{ label: string; href: string }>;
  rightElement?: React.ReactNode;
  initialTextColor: string;
}

const MobileNavMenu = ({
  isMobileMenuOpen,
  navItems,
  rightElement,
  initialTextColor,
}: MobileNavMenuProps) => {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isMobileMenuOpen ? "auto" : 0,
        opacity: isMobileMenuOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden md:hidden absolute top-full left-0 right-0 bg-white rounded-b-xl shadow-lg mt-2"
    >
      {isMobileMenuOpen && (
        <div className="pt-2 pb-3 space-y-1 px-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "block px-3 py-2 text-base font-medium rounded-lg hover:bg-purple-50",
                initialTextColor,
                "hover:text-purple-600"
              )}
            >
              {item.label}
            </Link>
          ))}
          {rightElement && <div className="mt-3">{rightElement}</div>}
        </div>
      )}
    </motion.div>
  );
}; 