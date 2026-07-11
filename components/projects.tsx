"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const projectList = [
    {
      title: "KA200DG Linux",
      description:
        "An open-source Linux driver and monitoring daemon for the KYO KA200DG LCD CPU cooler. Reverse engineered from the official Windows software using USB HID communication.",
      tags: ["Python", "Linux", "PyUSB", "USB HID", "Reverse Engineering"],
      githubUrl: "https://github.com/alfanzaky/ka200dg-linux",
      demoUrl: "#",
      accent: "from-blue-900 to-zinc-900",
    },
    {
      title: "Ultimate Linux Tool Project Manager",
      description:
        "A terminal-based development workspace manager that helps organize projects, automate development workflows, and improve productivity on Linux.",
      tags: ["Bash", "Linux", "CLI", "Automation"],
      githubUrl: "https://github.com/alfanzaky/Ultimate-Linux-Tool-Project-Manager",
      demoUrl: "#",
      accent: "from-zinc-800 to-black",
    },
    {
      title: "DrawdownLab",
      description:
        "A trading analytics platform focused on drawdown tracking, performance insights, broker management, and disciplined trading evaluation.",
      tags: ["Laravel", "Vue", "Finance", "Analytics"],
      githubUrl: "https://github.com/alfanzaky/DrawdownLab",
      demoUrl: "#",
      accent: "from-red-900 to-zinc-900",
    },
  ];

  const badgeUrls: Record<string, string> = {
    "Python": "https://img.shields.io/badge/Python-111111?style=flat-square&logo=python&logoColor=3776AB",
    "Linux": "https://img.shields.io/badge/Linux-111111?style=flat-square&logo=linux&logoColor=FCC624",
    "PyUSB": "https://img.shields.io/badge/PyUSB-111111?style=flat-square&logo=python&logoColor=3776AB",
    "Bash": "https://img.shields.io/badge/Bash-111111?style=flat-square&logo=gnubash&logoColor=white",
    "Automation": "https://img.shields.io/badge/Automation-111111?style=flat-square&logo=githubactions&logoColor=2088FF",
    "Laravel": "https://img.shields.io/badge/Laravel-111111?style=flat-square&logo=laravel&logoColor=FF2D20",
    "Vue": "https://img.shields.io/badge/Vue.js-111111?style=flat-square&logo=vuedotjs&logoColor=4FC08D",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center space-y-3 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wider text-zinc-400 uppercase"
          >
            My Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="bg-zinc-900/30 border-zinc-800/80 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-all duration-300 transform hover:-translate-y-1 group h-full">
                <div>
                  {/* Visual Header */}
                  <div className={`h-32 bg-gradient-to-br ${project.accent} border-b border-zinc-800/80 rounded-t-xl relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                    <span className="text-zinc-400 font-mono text-lg tracking-widest uppercase select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
                      {project.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>

                  <CardHeader className="pt-6">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg font-bold text-zinc-100 group-hover:text-zinc-50 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-3 text-zinc-400 pt-0.5">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors" title="View Source">
                          <svg
                            className="w-4.5 h-4.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </a>
                        <a href={project.demoUrl} className="hover:text-zinc-100 transition-colors" title="Live Demo">
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      </div>
                    </div>
                    <CardDescription className="text-zinc-400 text-sm leading-relaxed mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </div>

                <CardContent className="pt-0 pb-6">
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tagIndex) => {
                      const url = badgeUrls[tag];
                      if (!url) return null;
                      return (
                        <img
                          key={tagIndex}
                          src={url}
                          alt={tag}
                          className="h-6.5 select-none pointer-events-none rounded-sm transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                        />
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
