"use client";

import React from "react";
import { Monitor, Server, Terminal, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-colors" />,
      skills: [
        "Vue.js",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "Inertia.js",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-colors" />,
      skills: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST API",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Linux & Tools",
      icon: <Terminal className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-colors" />,
      skills: [
        "Linux",
        "Git",
        "GitHub",
        "Bash",
        "Docker",
        "Nginx",
        "PyUSB",
        "Python",
      ],
    },
    {
      title: "Specialized Focus",
      icon: <Compass className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-colors" />,
      skills: [
        "Reverse Engineering",
        "System Programming",
        "Trading Systems",
        "Electron",
        "DevOps",
        "UI/UX",
      ],
    },
  ];

  const badgeUrls: Record<string, string> = {
    "Vue.js": "https://img.shields.io/badge/Vue.js-111111?style=flat-square&logo=vuedotjs&logoColor=4FC08D",
    "Next.js": "https://img.shields.io/badge/Next.js-111111?style=flat-square&logo=nextdotjs&logoColor=white",
    "React": "https://img.shields.io/badge/React-111111?style=flat-square&logo=react&logoColor=61DAFB",
    "TypeScript": "https://img.shields.io/badge/TypeScript-111111?style=flat-square&logo=typescript&logoColor=3178C6",
    "JavaScript": "https://img.shields.io/badge/JavaScript-111111?style=flat-square&logo=javascript&logoColor=F7DF1E",
    "Tailwind CSS": "https://img.shields.io/badge/Tailwind_CSS-111111?style=flat-square&logo=tailwindcss&logoColor=38BDF8",
    "Bootstrap": "https://img.shields.io/badge/Bootstrap-111111?style=flat-square&logo=bootstrap&logoColor=7952B3",
    "Inertia.js": "https://img.shields.io/badge/Inertia.js-111111?style=flat-square&logo=inertia&logoColor=9553E6",
    "HTML": "https://img.shields.io/badge/HTML5-111111?style=flat-square&logo=html5&logoColor=E34C26",
    "CSS": "https://img.shields.io/badge/CSS3-111111?style=flat-square&logo=css3&logoColor=1572B6",
    "Laravel": "https://img.shields.io/badge/Laravel-111111?style=flat-square&logo=laravel&logoColor=FF2D20",
    "PHP": "https://img.shields.io/badge/PHP-111111?style=flat-square&logo=php&logoColor=777BB4",
    "MySQL": "https://img.shields.io/badge/MySQL-111111?style=flat-square&logo=mysql&logoColor=4479A1",
    "REST API": "https://img.shields.io/badge/REST_API-111111?style=flat-square&logo=insomnia&logoColor=5849BE",
    "Node.js": "https://img.shields.io/badge/Node.js-111111?style=flat-square&logo=nodedotjs&logoColor=339933",
    "Express.js": "https://img.shields.io/badge/Express.js-111111?style=flat-square&logo=express&logoColor=white",
    "Linux": "https://img.shields.io/badge/Linux-111111?style=flat-square&logo=linux&logoColor=FCC624",
    "Git": "https://img.shields.io/badge/Git-111111?style=flat-square&logo=git&logoColor=F05032",
    "GitHub": "https://img.shields.io/badge/GitHub-111111?style=flat-square&logo=github&logoColor=white",
    "Bash": "https://img.shields.io/badge/Bash-111111?style=flat-square&logo=gnubash&logoColor=white",
    "Docker": "https://img.shields.io/badge/Docker-111111?style=flat-square&logo=docker&logoColor=2496ED",
    "Nginx": "https://img.shields.io/badge/Nginx-111111?style=flat-square&logo=nginx&logoColor=009639",
    "PyUSB": "https://img.shields.io/badge/PyUSB-111111?style=flat-square&logo=python&logoColor=3776AB",
    "Python": "https://img.shields.io/badge/Python-111111?style=flat-square&logo=python&logoColor=3776AB",
    "UI/UX": "https://img.shields.io/badge/UI/UX-111111?style=flat-square&logo=figma&logoColor=F24E1E",
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-3 gap-12 items-start">
        {/* Left Column: Heading and Description */}
        <div className="md:col-span-1 space-y-4 md:sticky md:top-28">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">Learning Journey</h2>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-tight">
            What I'm Learning
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            Saya percaya belajar adalah proses seumur hidup. Berikut adalah teknologi, bahasa pemrograman, dan konsep yang sedang aktif saya pelajari dan gunakan dalam proyek-proyek saya.
          </p>
        </div>

        {/* Right Column: Stack of rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="md:col-span-2 space-y-10"
        >
          {categories.map((category, i) => (
            <div
              key={i}
              className="group relative flex flex-col sm:grid sm:grid-cols-3 gap-4 pb-8 border-b border-zinc-900/60 last:border-0"
            >
              {/* Category Info */}
              <div className="flex items-center gap-3 sm:col-span-1 self-start">
                <div className="p-2 bg-zinc-900/40 border border-zinc-800/80 rounded-lg group-hover:border-zinc-700/80 group-hover:bg-zinc-900/60 transition-colors duration-300">
                  {category.icon}
                </div>
                <h4 className="text-base font-bold text-zinc-300 tracking-tight group-hover:text-zinc-100 transition-colors duration-300">
                  {category.title}
                </h4>
              </div>

              {/* Badges Container */}
              <div className="sm:col-span-2 flex flex-wrap gap-2 pt-2 sm:pt-0">
                {category.skills.map((skill, skillIndex) => {
                  const url = badgeUrls[skill];
                  if (!url) return null;
                  return (
                    <motion.div
                      key={skillIndex}
                      variants={badgeVariants}
                      className="inline-block"
                    >
                      <img
                        src={url}
                        alt={skill}
                        className="h-6.5 select-none pointer-events-none rounded-sm transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
