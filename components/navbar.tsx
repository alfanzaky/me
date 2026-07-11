"use client";

import React, { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/60 backdrop-blur-xl border-b border-zinc-800/50 py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent tracking-tight hover:opacity-90 transition-opacity"
        >
          Alfanro
        </a>

        {/* Desktop Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#about"
            className="hover:text-zinc-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-zinc-100 after:transition-all hover:after:w-full"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-zinc-100 after:transition-all hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-zinc-100 after:transition-all hover:after:w-full"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-zinc-100 after:transition-all hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
