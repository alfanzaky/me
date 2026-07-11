"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML5/CSS3", "Vue.js", "Framer Motion"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "FastAPI", "Go", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "AWS", "GitHub Actions", "Vercel", "Linux", "Nginx", "Kubernetes"],
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git & GitHub", "Figma", "Postman", "Jest", "Agile/Scrum", "RESTful Design"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/40 border-y border-zinc-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">My Toolkit</h2>
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Skills & Technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <Card
              key={i}
              className="bg-zinc-900/30 border-zinc-800/80 backdrop-blur-sm shadow-xl hover:border-zinc-700/50 hover:bg-zinc-900/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-bold text-zinc-100 tracking-tight">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-zinc-800/40 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/40 px-2.5 py-0.5 rounded-md font-normal text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
