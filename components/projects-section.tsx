"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface Project {
  title: string
  description: string
  techTags: string[]
  liveDemoLink?: string
  githubLink?: string
  imageUrl: string
}

const projects: Project[] = [
  {
    title: "Hospital Management System",
    description: "A high-performance medical platform with role-based dashboards, secure data handling, and real-time scheduling. [cite: 25, 26, 32]",
    techTags: ["Next.js", "Firebase", "Tailwind", "Lucide React"],
    liveDemoLink: "https://clinic-management-system-alpha-seven.vercel.app/",
    githubLink: "https://github.com/Farid-gitu01/clinic-management-system",
    imageUrl: "/hospital.png", // Corrected: Remove "/public"
  },
  {
    title: "Clinic Management System",
    description: "Cloud-based appointment management featuring automated patient records and an intuitive admin control panel. [cite: 26, 43]",
    techTags: ["Next.js", "Firebase", "Node.js", "Framer Motion"],
    liveDemoLink: "https://clinic-management-system-alpha-seven.vercel.app/",
    githubLink: "https://github.com/Farid-gitu01/clinic-management-system",
    imageUrl: "/hospital.png", // Corrected: Remove "/public"
  },
  {
    title: "Instagram Clone",
    description: "A full-scale social experience featuring image processing, real-time feed updates, and interactive user profiles.",
    techTags: ["Next.js", "Supabase", "Cloudinary", "Tailwind CSS"],
    liveDemoLink: "#",
    githubLink: "#",
    imageUrl: "/instagram.png", // Corrected: Remove "/public"
  },
  {
    title: "Ethical Hacking Demo Lab",
    description: "A specialized security environment documenting network penetration tests, vulnerability scans, and security hardening.",
    techTags: ["Kali Linux", "Python", "Nmap", "Pentesting"],
    liveDemoLink: "#",
    githubLink: "#",
    imageUrl: "/hacking.png", // Corrected: Remove "/public"
  },
]

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    whileHover={{ y: -12 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="h-full"
  >
    <Card className="flex flex-col h-full bg-white border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden group">
      <CardHeader className="p-0 relative">
        <div className="aspect-video overflow-hidden bg-slate-100">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={340}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </CardHeader>

      <CardContent className="p-8 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techTags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-blue-50 text-blue-600 border-none px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-slate-500 leading-relaxed font-medium">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-8 pt-0">
        <div className="flex gap-2">
          {project.githubLink && project.githubLink !== "#" && (
            <Link href={project.githubLink} target="_blank" passHref>
              <Button variant="outline" size="icon" className="rounded-xl border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all">
                <Github className="w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>
        {project.liveDemoLink && project.liveDemoLink !== "#" && (
          <Link href={project.liveDemoLink} target="_blank" passHref>
            <Button className="rounded-xl bg-slate-900 hover:bg-blue-600 text-white flex items-center gap-2 px-6 transition-all shadow-lg shadow-slate-200 hover:shadow-blue-200">
              Live Preview <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  </motion.div>
)

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}