"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Scroll listener for styling navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Intersection Observer for tracking current active section spy
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -50% 0px", // Trigger when section occupies the top half area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["about", "projects", "skills", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section;
    const base = "transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all";
    
    if (isScrolled) {
      return `${base} ${
        isActive
          ? "text-zinc-100 after:w-full after:bg-zinc-100"
          : "text-zinc-400 hover:text-zinc-100 after:w-0 hover:after:w-full after:bg-zinc-100"
      }`;
    } else {
      // Transparent background: stays light on mobile (dark bg), but switches to dark/light on desktop
      return `${base} ${
        isActive
          ? "text-zinc-100 after:w-full after:bg-zinc-100 md:text-zinc-950 md:after:bg-zinc-950"
          : "text-zinc-400 hover:text-zinc-100 after:w-0 hover:after:w-full after:bg-zinc-100 md:text-zinc-700 md:hover:text-zinc-950 md:after:bg-zinc-950"
      }`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-zinc-950/60 backdrop-blur-xl border-zinc-800/50 py-3 shadow-lg shadow-black/10"
          : "bg-zinc-950/60 backdrop-blur-xl border-zinc-800/50 py-3 shadow-lg shadow-black/10 md:bg-transparent md:backdrop-blur-none md:border-transparent md:py-5 md:shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent tracking-tight hover:opacity-90 transition-opacity"
        >
          Alfanro
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className={getLinkClass("about")}>
            About
          </a>
          <a href="#projects" className={getLinkClass("projects")}>
            Projects
          </a>
          <a href="#skills" className={getLinkClass("skills")}>
            Journey
          </a>
          <a href="#contact" className={getLinkClass("contact")}>
            Contact
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg md:hidden transition-colors text-zinc-400 hover:text-zinc-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-900 md:hidden overflow-hidden z-40"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 text-base font-medium">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className={`transition-colors py-2 border-b border-zinc-900/50 ${
                  activeSection === "about" ? "text-zinc-100 font-bold" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className={`transition-colors py-2 border-b border-zinc-900/50 ${
                  activeSection === "projects" ? "text-zinc-100 font-bold" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className={`transition-colors py-2 border-b border-zinc-900/50 ${
                  activeSection === "skills" ? "text-zinc-100 font-bold" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                Journey
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={`transition-colors py-2 ${
                  activeSection === "contact" ? "text-zinc-100 font-bold" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
