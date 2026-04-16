"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, ShieldCheck, Zap } from "lucide-react"

export function HeroSection() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Modern Background: Subtle Grid + Soft Blue Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f7ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Available for new projects</span>
        </motion.div>

        {/* Avatar with Professional Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative p-1 bg-gradient-to-b from-blue-400 to-white rounded-full shadow-2xl">
            <Image
              src="/portfolio.jpg"
              alt="Mohammad Farid"
              width={160}
              height={160}
              className="rounded-full border-4 border-white object-cover aspect-square"
              priority
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Mohammad <span className="text-blue-600">Farid</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-slate-600 flex items-center justify-center gap-3">
            <Zap className="text-blue-500 h-6 w-6" fill="currentColor" />
            Full Stack Developer
            <span className="h-2 w-2 rounded-full bg-slate-300 hidden md:block" />
            <ShieldCheck className="text-blue-500 h-6 w-6" />
            Ethical Hacker
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl text-center leading-relaxed"
        >
          Building <span className="text-slate-900 font-semibold">secure, resilient architecture</span> for the next generation of web applications. I turn complex vulnerabilities into robust digital solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-5"
        >
          <Button
            onClick={handleScrollToProjects}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-xl shadow-blue-200 transition-all hover:translate-y-[-2px]"
          >
            Explore Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-10 py-7 text-lg font-bold rounded-2xl border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm transition-all"
            >
              Resume
              <Download className="ml-2 h-5 w-5 text-blue-600" />
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}