"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "📜" },
      { name: "C#", icon: "#️⃣" },
      { name: "SQL", icon: "🗄️" },
      { name: "TypeScript", icon: "📘" },
    ],
  },
  {
    title: "Web Technologies",
    icon: "🌐",
    skills: [
      { name: "HTML", icon: "🏗️" },
      { name: "CSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "✨" },
      { name: "Material UI", icon: "🎭" },
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▶️" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🛣️" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "FastAPI", icon: "⚡" },
      { name: "MongoDB", icon: "📊" },
      { name: "MySQL", icon: "🐬" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🔧",
    skills: [
      { name: "Git", icon: "📝" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Postman", icon: "📮" },
      { name: "Firebase", icon: "🔥" },
      { name: "Figma", icon: "🎨" },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const currentCategory = skillsData[activeCategory];
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(currentCategory.skills.length / itemsPerSlide);

  const handlePrev = () => {
    setItemOffset((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setItemOffset((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const visibleSkills = currentCategory.skills.slice(
    itemOffset * itemsPerSlide,
    (itemOffset + 1) * itemsPerSlide
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I use
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(idx);
                setItemOffset(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-pink-500/50"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {visibleSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1"
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                aria-label="Previous skills"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {[...Array(totalSlides)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setItemOffset(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      itemOffset === idx ? "bg-pink-500 w-8" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                aria-label="Next skills"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
