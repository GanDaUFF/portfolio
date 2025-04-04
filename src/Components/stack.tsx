"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = [
    {
      name: "Frontend",
      icon: "💻",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "Tailwind CSS", level: 95, color: "#38B2AC" },
      ],
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Express", level: 80, color: "#000000" },
        { name: "Prisma", level: 75, color: "#2D3748" },
        { name: "API REST", level: 90, color: "#FF6C37" },
      ],
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 80, color: "#336791" },
        { name: "MongoDB", level: 75, color: "#47A248" },
        { name: "MySQL", level: 70, color: "#4479A1" },
        { name: "Redis", level: 65, color: "#DC382D" },
      ],
    },
    {
      name: "DevOps",
      icon: "🚀",
      skills: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: "Docker", level: 75, color: "#2496ED" },
        { name: "CI/CD", level: 70, color: "#4285F4" },
        { name: "AWS", level: 65, color: "#FF9900" },
      ],
    },
  ]

  return (
    <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 flex flex-col shadow-xl overflow-x-hidden relative">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 z-10">
        Minha Stack Tecnológica
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow z-10">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="space-y-1"
                  onMouseEnter={() => setHoveredIndex(categoryIndex * 10 + skillIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skill.color,
                        width: `${skill.level}%`,
                        boxShadow:
                          hoveredIndex === categoryIndex * 10 + skillIndex ? `0 0 10px ${skill.color}` : "none",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

