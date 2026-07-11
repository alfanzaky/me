"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950/40 relative border-y border-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">About Me</h2>
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            My Journey & Background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio text */}
          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p>
              I am a software engineer dedicated to building seamless digital products. With over five years of experience, I specialize in crafting full-stack web applications, custom API solutions, and polished UI design.
            </p>
            <p>
              My design philosophy is rooted in minimalism, high performance, and deep respect for user interaction. I enjoy breaking down complex problems into clean, modular, and maintainable architectures.
            </p>
            <p>
              Outside of building applications, I focus on mentoring other developers, contributing to open-source software, and staying on the bleeding edge of web technologies.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, i) => (
              <Card
                key={i}
                className="bg-zinc-900/40 border-zinc-800/80 backdrop-blur-sm shadow-xl hover:border-zinc-700/50 hover:bg-zinc-900/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-extrabold text-zinc-100 tracking-tight">
                    {stat.number}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
