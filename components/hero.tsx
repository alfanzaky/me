"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-zinc-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10 w-full">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs text-zinc-300 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            Available for new opportunities
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Alfanro
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-zinc-400">
            Full-Stack Software Engineer & UI/UX Designer
          </h2>
          <p className="text-zinc-400 max-w-lg leading-relaxed">
            I craft high-performance, responsive web applications with minimalist and premium designs. Focused on clean code and robust user experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#projects">
              <Button size="lg" className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors font-medium">
                View My Projects
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900/50 hover:text-zinc-100 transition-all">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>

        {/* Visual / Image Showcase */}
        <div className="flex-1 flex justify-center relative">
          {/* Decorative frame elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-700/20 to-transparent rounded-3xl blur-2xl -z-10 w-[320px] h-[320px] mx-auto" />
          <div className="relative group p-2 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-zinc-700/50 hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-2xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              <Image
                src="/avatar.png"
                alt="Alfanro avatar"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Overlay glow effect */}
            <div className="absolute inset-0 rounded-3xl border border-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
