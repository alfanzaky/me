"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    // Simulate submission
    setStatus("Message sent successfully!");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <div className="space-y-3 mb-12">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">Get In Touch</h2>
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Let's Collaborate
          </p>
          <p className="text-zinc-400 max-w-md mx-auto text-sm">
            Have a project in mind, want to discuss a job opportunity, or just want to say hello? Drop me a message.
          </p>
        </div>

        <Card className="bg-zinc-900/30 border-zinc-800/80 backdrop-blur-sm shadow-2xl text-left">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-zinc-100">Send Message</CardTitle>
            <CardDescription className="text-zinc-400 text-xs">
              I'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Your Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800/80 rounded-lg text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Alfanro, I'd like to discuss..."
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800/80 rounded-lg text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all placeholder:text-zinc-600 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-4.5 h-4.5" />
                Send Message
              </Button>

              {status && (
                <p className={`text-xs text-center mt-3 ${status.includes("successfully") ? "text-emerald-400" : "text-rose-400"}`}>
                  {status}
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#"
            className="w-10 h-10 bg-zinc-900/40 border border-zinc-800/80 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700/80 transition-all"
            title="GitHub"
          >
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
          <a
            href="#"
            className="w-10 h-10 bg-zinc-900/40 border border-zinc-800/80 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700/80 transition-all"
            title="LinkedIn"
          >
            <svg
              className="w-4.5 h-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-zinc-900/40 border border-zinc-800/80 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700/80 transition-all"
            title="Twitter"
          >
            <svg
              className="w-4.5 h-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-10 h-10 bg-zinc-900/40 border border-zinc-800/80 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700/80 transition-all"
            title="Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
