"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Starfield Background */}
      <div className="absolute inset-0 -z-20 dark:block hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full star"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 h-screen flex flex-col items-center justify-center">
        <div className="text-center slide-in-up">
          {/* Greeting Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <span className="text-sm text-pink-500">Welcome to my portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I am{" "}
            <span className="gradient-text">a Problem Solver</span>
          </h1>

          {/* Profile Image */}
          <div className="my-10 inline-block floating">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-pink-500/30 overflow-hidden glow">
              <div className="w-full h-full bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-blue-500/30 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Welcome to my portfolio! I create digital experiences that inspire and engage.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Connected
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-full border-2 border-pink-500/50 text-pink-500 font-semibold hover:bg-pink-500/10 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-16">
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/10 transition-all duration-300" title="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/10 transition-all duration-300" title="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/10 transition-all duration-300" title="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-9.56-11.858 11.858 0 01-3.388 1.35 5.921 5.921 0 00-10.37 5.401 16.82 16.82 0 01-12.337-6.41 5.917 5.917 0 001.836 7.907 5.888 5.888 0 01-2.685-.74v.074c0 2.868 2.043 5.266 4.753 5.81a5.92 5.92 0 01-2.676.101 5.934 5.934 0 005.544 4.121 11.88 11.88 0 01-7.357 2.537c-.48 0-.953-.028-1.418-.084a16.777 16.777 0 009.101 2.691c10.823 0 16.73-8.96 16.73-16.73 0-.255-.006-.51-.019-.764a11.964 11.964 0 002.929-3.063z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/10 transition-all duration-300" title="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23.5C5.925 23.5.5 18.075.5 12S5.925.5 12 .5 23.5 5.925 23.5 12 18.075 23.5 12 23.5z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/10 transition-all duration-300" title="Portfolio">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-pink-500 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
