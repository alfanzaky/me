"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const socialLinks = [
    {
      name: "WhatsApp",
      description: "Chat langsung untuk diskusi cepat atau konsultasi.",
      url: "#",
      icon: (
        <svg className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.762.457 3.417 1.257 4.869L2 22l5.289-1.388c1.39.756 2.975 1.196 4.664 1.196 5.523 0 10.05-4.481 10.05-10.004C22.004 6.48 17.527 2 12.004 2zm0 18.008c-1.503 0-2.915-.401-4.14-1.1l-.297-.174-3.08.808.822-3.003-.191-.304a8.012 8.012 0 0 1-1.229-4.231c0-4.422 3.6-8.022 8.026-8.022 4.422 0 8.022 3.6 8.022 8.022 0 4.426-3.6 8.026-8.022 8.026z"
          />
        </svg>
      ),
      hoverGlow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]",
    },
    {
      name: "LinkedIn",
      description: "Terhubung secara profesional dan perluas jaringan karir.",
      url: "YOUR_LINKEDIN_LINK_HERE", // Silakan ganti manual
      icon: (
        <svg className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      ),
      hoverGlow: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]",
    },
    {
      name: "Instagram",
      description: "Ikuti aktivitas harian dan visual proyek terbaru saya.",
      url: "#",
      icon: (
        <svg className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
          />
        </svg>
      ),
      hoverGlow: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.08)]",
    },
    {
      name: "Telegram",
      description: "Hubungi langsung melalui jalur obrolan Telegram.",
      url: "https://t.me/blinks_id",
      icon: (
        <svg className="w-8 h-8 text-sky-400 group-hover:text-sky-300 transition-colors" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.18l-1.92 9.07c-.14.65-.53.81-1.08.5L11.6 15.5l-1.42 1.37c-.16.16-.29.29-.6.29l.21-3.01 5.48-4.95c.24-.22-.05-.34-.37-.13l-6.78 4.27-2.92-.91c-.64-.2-.65-.64.13-.94l11.39-4.39c.53-.19.99.13.82.97z"
          />
        </svg>
      ),
      hoverGlow: "hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-zinc-950">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-zinc-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-16">
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Let's Connect
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {socialLinks.map((social, i) => (
            <motion.div key={i} variants={cardVariants}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-sm p-6 rounded-2xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 group ${social.hoverGlow}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-950/45 border border-zinc-800/80 rounded-xl group-hover:border-zinc-700/80 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <div className="text-left space-y-1">
                    <h3 className="text-base font-bold text-zinc-100 group-hover:text-zinc-50 transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-[200px]">
                      {social.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
