"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code2, Database, Bug, GitBranch, Laptop, Braces, 
  Server, Shield, Terminal, Cloud, Wind, Workflow, Palette, Cpu 
} from 'lucide-react'

interface Skill {
  name: string
  icon: React.ElementType
}

interface SkillCategory {
  title: string
  skills: Skill[]
  accentColor: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    accentColor: "blue",
    skills: [
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Braces },
      { name: "Python", icon: Terminal },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend",
    accentColor: "sky",
    skills: [
      { name: "React.js", icon: Laptop },
      { name: "Next.js", icon: Cpu },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Framer Motion", icon: Workflow },
    ],
  },
  {
    title: "Backend",
    accentColor: "indigo",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Firebase", icon: Cloud },
      { name: "Supabase", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Cybersecurity",
    accentColor: "slate",
    skills: [
      { name: "Kali Linux", icon: Terminal },
      { name: "Nmap", icon: Shield },
      { name: "Wireshark", icon: Bug },
      { name: "Burp Suite", icon: Shield },
    ],
  },
  {
    title: "Tools & Others",
    accentColor: "blue",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Docker", icon: Cloud },
      { name: "Figma", icon: Palette },
      { name: "REST APIs", icon: Braces },
    ],
  },
]

const SkillItem = ({ skill }: { skill: Skill }) => (
  <motion.div
    className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="bg-blue-50 p-2 rounded-xl">
      <skill.icon className="w-5 h-5 text-blue-600" />
    </div>
    <span className="font-bold text-slate-700 text-sm tracking-tight">
      {skill.name}
    </span>
  </motion.div>
)

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-50/50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-2xl text-blue-600 mb-6">
            <Cpu size={16} className="font-bold" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Competencies</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            My Tech <span className="text-blue-600">Arsenal.</span>
          </h2>
          <p className="text-lg text-slate-500 mt-6 font-medium max-w-2xl mx-auto leading-relaxed">
            A comprehensive list of the tools and languages I use to build <span className="text-slate-900">secure, high-performance</span> digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 rounded-[2.5rem] overflow-hidden group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-8 h-1 bg-blue-600 rounded-full" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}