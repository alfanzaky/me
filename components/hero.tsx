"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Ambient Glow on the left */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid md:grid-cols-2 min-h-screen w-full z-10">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center px-6 sm:px-16 lg:px-24 pt-32 pb-20 space-y-6">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs text-zinc-300 backdrop-blur-sm">
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
          <p className="text-zinc-400 max-w-lg leading-relaxed text-sm sm:text-base">
            I craft high-performance, responsive web applications with minimalist and premium designs. Focused on clean code and robust user experiences.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
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

        {/* Right Column: Full Screen Photo */}
        <div className="relative h-[450px] md:h-full w-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Alfanro portrait"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle dark gradient overlay to blend the image into the dark page background */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none md:hidden" />
        </div>
      </div>
    </section>
  );
}
