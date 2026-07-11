"use client";

import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-zinc-950/20 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {currentYear} Alfanro. All rights reserved.</p>
        <p>Built with Next.js, TailwindCSS v4, & shadcn/ui</p>
      </div>
    </footer>
  );
}
