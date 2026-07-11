"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projectList = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution featuring real-time checkout, secure Stripe payments, and complex inventory management dashboards.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      githubUrl: "#",
      demoUrl: "#",
      accent: "from-zinc-800 to-zinc-900",
    },
    {
      title: "Task Management App",
      description: "A collaborative project manager with real-time drag-and-drop kanban boards, live chat, and automated notifications.",
      tags: ["React", "Node.js", "WebSocket", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#",
      accent: "from-zinc-800 to-zinc-900",
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chatbot assistant trained on internal documentation to assist with real-time operations and customer support.",
      tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
      githubUrl: "#",
      demoUrl: "#",
      accent: "from-zinc-800 to-zinc-900",
    },
    {
      title: "Developer Portfolio Gen",
      description: "An open-source generator that allows creators to build custom portfolios directly from their GitHub profile metadata.",
      tags: ["Next.js", "TailwindCSS", "GraphQL", "Vercel"],
      githubUrl: "#",
      demoUrl: "#",
      accent: "from-zinc-800 to-zinc-900",
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive visual reports, charting real-time system performance, user engagement, and marketing funnel drop-off points.",
      tags: ["D3.js", "ClickHouse", "Express", "TypeScript"],
      githubUrl: "#",
      demoUrl: "#",
      accent: "from-zinc-800 to-zinc-900",
    },
    {
      title: "Mobile Banking System",
      description: "A highly secure mobile finance app featuring biometric log-in, multi-currency wallets, and instant transactional ledgers.",
      tags: ["React Native", "Firebase", "NestJS", "Docker"],
      githubUrl: "#",
      demoUrl: "#",
      accent: "from-zinc-800 to-zinc-900",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">My Work</h2>
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Featured Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, i) => (
            <Card
              key={i}
              className="bg-zinc-900/30 border-zinc-800/80 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div>
                {/* Visual Header */}
                <div className={`h-32 bg-gradient-to-br ${project.accent} border-b border-zinc-800/80 rounded-t-xl relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                  <span className="text-zinc-600 font-mono text-lg tracking-widest uppercase select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
                    {project.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>

                <CardHeader className="pt-6">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg font-bold text-zinc-100 group-hover:text-zinc-50 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-3 text-zinc-400 pt-0.5">
                      <a href={project.githubUrl} className="hover:text-zinc-100 transition-colors" title="View Source">
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
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 text-xs px-2.5 py-0.5 border border-zinc-700/30"
                    >
                      {tag}
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
