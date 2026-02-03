"use client";

import { useState } from "react";

const aboutData = {
  bio: "I'm a Software Engineering Intern and third-year undergraduate at the University of Moratuwa, Faculty of IT. I'm passionate about building digital experiences that inspire and engage. I constantly improve my skills and take on projects that create real impact.",
  education: [
    {
      period: "2023 – Present",
      title: "BSc.(Hons) in Information Technology",
      institution: "University of Moratuwa, Faculty of IT",
      status: "Current",
    },
    {
      period: "2019 – 2021",
      title: "G.C.E Advanced Level Examination",
      institution: "Lyceum International School, Nuwara Eliya",
      subjects: "Combined Mathematics, Physics, ICT",
    },
    {
      period: "2011 – 2020",
      title: "G.C.E Ordinary Level Examination",
      institution: "N/ Good Shepherd Balika Maha Vidyalaya",
    },
  ],
  stats: [
    { icon: "🎓", label: "Education", value: "University of Moratuwa" },
    { icon: "⭐", label: "GPA", value: "3.49" },
    { icon: "💼", label: "Focus", value: "Full Stack & Secure Systems" },
  ],
};

export default function AboutSection() {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(0);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my background, education, and what drives me
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 via-transparent to-blue-500/10 border border-pink-500/20 dark:border-pink-500/30">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutData.bio}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {aboutData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.label}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-8">
            <span className="inline-flex items-center gap-3">
              <span className="text-3xl">📅</span>
              Education Timeline
            </span>
          </h3>

          <div className="space-y-3">
            {aboutData.education.map((item, idx) => (
              <div
                key={idx}
                className="group"
                onClick={() => setExpandedEducation(expandedEducation === idx ? null : idx)}
              >
                <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-semibold text-pink-500 mb-1">
                        {item.period}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        📍 {item.institution}
                      </p>
                    </div>
                    {item.status && (
                      <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-medium">
                        {item.status}
                      </span>
                    )}
                  </div>

                  {expandedEducation === idx && item.subjects && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Subjects:</span> {item.subjects}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
