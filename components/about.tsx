"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  const stats = [
    { number: "6+", label: "Open Source Projects" },
    { number: "100%", label: "Self-Taught" },
    { number: "∞", label: "Learning Mindset" },
    { number: "24/7", label: "Building & Improving" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-zinc-950/40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center space-y-3 mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-sm font-semibold tracking-wider text-zinc-400 uppercase"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          >
            Building Things Through Curiosity
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6 text-zinc-400 leading-relaxed">
            <p>
              I'm a self-taught full-stack developer from Indonesia who loves
              turning ideas into real software. Without a formal computer science
              background, I've learned by building projects, reading
              documentation, experimenting, and solving real-world problems.
            </p>

            <p>
              My interests revolve around Laravel, Next.js, Linux, automation,
              and trading technology. I enjoy creating applications that are
              practical, fast, and easy to maintain rather than simply following
              trends.
            </p>

            <p>
              Beyond web development, I contribute to open-source projects,
              build Linux tools, reverse engineer hardware when necessary, and
              continuously explore new technologies. For me, every project is an
              opportunity to learn something new.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                className="h-full"
              >
                <Card className="bg-zinc-900/40 border-zinc-800/80 backdrop-blur-sm shadow-xl hover:border-zinc-700/50 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-extrabold text-zinc-100">
                      {stat.number}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}