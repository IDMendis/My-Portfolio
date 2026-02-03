"use client";

import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-[#0B1120]/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="font-bold text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Tharu Shidev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-pink-500 transition">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-pink-500 transition">About</a>
          <a href="#skills" className="text-sm font-medium hover:text-pink-500 transition">Skills</a>
          <a href="#projects" className="text-sm font-medium hover:text-pink-500 transition">Projects</a>
          <a href="#contact" className="text-sm font-medium hover:text-pink-500 transition">Contact</a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B1120] border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#home" className="text-sm font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-sm font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="text-sm font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
