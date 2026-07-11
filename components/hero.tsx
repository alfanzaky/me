"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Ambient Glow on the left */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid md:grid-cols-2 min-h-screen w-full z-10">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center px-6 sm:px-16 lg:px-24 pt-12 pb-20 md:pt-32 space-y-6 order-2 md:order-1"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent animate-text-gradient">
              Alfanro
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-medium text-zinc-400 italic"
          >
            Saya adalah seorang pemikir
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-zinc-400 max-w-lg leading-relaxed text-sm sm:text-base"
          >
            "Saya bukan lulusan IT. Saya belajar dengan rasa penasaran, membangun dengan temuan masalah, dan saya sangat percaya bahwa tindakan nyata adalah guru terbaik."
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects">
              <Button size="sm" variant="ghost">
                View My Projects
              </Button>
            </a>
            <a href="#contact">
              <Button size="sm" variant="outline">
                Let's Talk
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Full Screen Photo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={photoVariants}
          className="relative h-[60vh] md:h-full w-full overflow-hidden order-1 md:order-2"
        >
          <Image
            src="/avatar.jpg"
            alt="Alfanro portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle dark gradient overlay to blend the image into the dark page background */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
