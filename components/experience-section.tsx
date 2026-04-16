"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  title: string
  subtitle: string
  date: string
  description: string
  icon: React.ElementType
  isOngoing?: boolean
}

const experiences: TimelineItemProps[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Freelance Projects",
    date: "Jan 2023 - Present",
    description: "Developed and deployed full-stack web applications for clients, focusing on robust backends and responsive frontends.",
    icon: Briefcase,
    isOngoing: true,
  },
  {
    title: "CEH (Certified Ethical Hacker)",
    subtitle: "EC-Council",
    date: "Ongoing",
    description: "Pursuing CEH certification to deepen knowledge in penetration testing, vulnerability assessment, and hacking methodologies.",
    icon: Award,
    isOngoing: true,
  },
  {
    title: "Google Cybersecurity Certificate",
    subtitle: "Google & Coursera",
    date: "Completed: 2023",
    description: "Acquired skills in network security, incident response, and security operations through Google's professional program.",
    icon: Award,
  },
  {
    title: "Full Stack Developer Bootcamp",
    subtitle: "Tech Academy",
    date: "Aug 2022 - Dec 2022",
    description: "Intensive training covering modern web development technologies like React, Node.js, databases, and deployment.",
    icon: GraduationCap,
  },
]

const TimelineItem = ({ title, subtitle, date, description, icon: Icon, isOngoing }: TimelineItemProps) => (
  <motion.div 
    className="relative pl-12 md:pl-20 pb-16 last:pb-0 group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    {/* The Vertical Line */}
    <div className="absolute left-[11px] md:left-[31px] top-0 h-full w-[2px] bg-slate-100 group-last:h-0" />

    {/* The Icon Dot */}
    <div className={cn(
      "absolute left-0 md:left-5 top-0 h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110",
      isOngoing ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-white border-2 border-slate-200"
    )}>
      <Icon className={cn("w-3 h-3 md:w-4 md:h-4", isOngoing ? "text-white" : "text-slate-400")} />
    </div>

    <div className="flex flex-col gap-3">
      {/* Date Pill */}
      <div className="flex items-center gap-2">
        <div className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
          isOngoing ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-500"
        )}>
          <Calendar className="w-3 h-3" />
          {date}
        </div>
        {isOngoing && (
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
        )}
      </div>

      {/* Content Card */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          {title}
          {!isOngoing && <CheckCircle2 className="w-5 h-5 text-blue-500/40" />}
        </h3>
        <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-tighter">{subtitle}</p>
        <p className="text-slate-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
)

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-2xl text-blue-600 mb-6">
            <Briefcase size={16} className="font-bold" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Career Path</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Experience & <span className="text-blue-600">Certifications.</span>
          </h2>
          <p className="text-lg text-slate-500 mt-6 font-medium leading-relaxed">
            A chronological look at my growth in software engineering and the cybersecurity landscape.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}