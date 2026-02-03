"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Embula – Restaurant Website",
    description:
      "A restaurant website featuring a dynamic food menu showcase, shopping cart, and secure online payments. It includes a table reservation system allowing customers to pre-book dine-in slots and an AI-powered chatbot for menu navigation, reservations, and customer support.",
    image: "🍽️",
    tags: ["Next.js", "Tailwind CSS", "Spring Boot", "MySQL", "AI"],
    category: "Full Stack Development",
    github: "https://github.com/IDMendis",
    live: "https://embula.com",
  },
  {
    id: 2,
    title: "Carely – Healthcare Appointment System",
    description:
      "A semi-intelligent healthcare platform for appointment scheduling with ML-based specialist recommendations. Streamlines patient-doctor interactions with smart appointment matching.",
    image: "🏥",
    tags: ["MERN", "FastAPI", "Machine Learning", "MongoDB"],
    category: "AI & Healthcare",
    github: "https://github.com/IDMendis",
  },
  {
    id: 3,
    title: "Garage Management System",
    description:
      "Role-based garage management platform with secure authentication and comprehensive service handling. Features customer management, service tracking, and billing systems.",
    image: "🚗",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full Stack Development",
    github: "https://github.com/IDMendis",
  },
  {
    id: 4,
    title: "StockCast – Real-Time Broadcasting",
    description:
      "High-performance distributed system using Java NIO for real-time data broadcasting. Handles massive concurrent connections with optimized network protocols.",
    image: "📊",
    tags: ["Java", "Spring Boot", "WebSocket", "TCP/UDP"],
    category: "Backend Systems",
    github: "https://github.com/IDMendis",
  },
  {
    id: 5,
    title: "Project Aegis – Blockchain Esports",
    description:
      "Decentralized esports tournament platform built with blockchain technology. Enables secure tournament management, transparent prize distribution, and NFT-based achievements.",
    image: "⛓️",
    tags: ["Next.js", "FastAPI", "Solidity", "Polygon"],
    category: "Web3 Development",
    github: "https://github.com/IDMendis",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with product catalog, user authentication, payment integration, and order management. Includes admin dashboard for inventory management.",
    image: "🛒",
    tags: ["React", "Firebase", "Stripe", "Tailwind CSS"],
    category: "Full Stack Development",
    github: "https://github.com/IDMendis",
  },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = filteredProjects[currentIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical journey through various domains - from web
            development to IoT systems. Each project represents a unique challenge
            and learning experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-pink-500/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Left - Featured Project Image/Icon */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-pink-500/30 flex items-center justify-center overflow-hidden group cursor-pointer hover:border-pink-500/60 transition-all duration-300">
              <div className="text-9xl group-hover:scale-110 transition-transform duration-300">
                {currentProject.image}
              </div>
            </div>
          </div>

          {/* Right - Project Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-semibold mb-4">
                {currentProject.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {currentProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {currentProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-gray-700 dark:text-gray-300 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 font-semibold"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {currentProject.live && (
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-pink-500 w-8" : "bg-gray-400"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400">
            Project {currentIndex + 1} of {filteredProjects.length}
          </p>
        </div>
      </div>
    </section>
  );
}
