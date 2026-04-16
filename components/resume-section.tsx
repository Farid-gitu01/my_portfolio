"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Printer, ExternalLink, ZoomIn, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function ResumeSection() {
  // Details from your provided resume [cite: 1, 19, 21]
  const highlights = [
    "Diploma in CS Engineering [cite: 19]",
    "BE in Electronics & CS (Ongoing) [cite: 21]",
    "Full Stack Internship Experience [cite: 25]",
    "Fluent in English, Hindi, & Marathi [cite: 37, 38]"
  ]

  return (
    <section className="container mx-auto px-4 max-w-5xl">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Farid <span className="text-blue-600">Choche</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg mt-1">Software Developer [cite: 2]</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-3 w-full md:w-auto"
        >
          <Link href="/faridchoche_resume.pdf" target="_blank" className="flex-1 md:flex-none">
            <Button variant="outline" className="w-full rounded-xl border-slate-200 gap-2">
              <Printer className="w-4 h-4" /> Print
            </Button>
          </Link>
          <Link href="/faridchoche_resume.pdf" download className="flex-1 md:flex-none">
            <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 gap-2">
              <Download className="w-4 h-4" /> Download CV
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Professional Summary (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block lg:col-span-4 space-y-8"
        >
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" /> Key Highlights
            </h3>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="text-sm text-slate-600 leading-relaxed border-b border-slate-50 pb-2 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-100">
            <h3 className="font-bold text-xl mb-2">Hire Farid</h3>
            <p className="text-blue-100 text-sm mb-6">Expertise in Next.js, React, and MongoDB[cite: 13, 14, 15].</p>
            <Link href="/contact">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right: The High-Resolution Resume Image Viewer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 group relative"
        >
          {/* Magnifier Icon Overlay */}
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold text-slate-600">
               <ZoomIn className="w-4 h-4" /> Click to expand
             </div>
          </div>

          <Link href="/faridchoche_resume.pdf" target="_blank">
            <div className="relative w-full aspect-[1/1.41] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-blue-500/10">
              <Image
                src="/resume_image.png" // IMPORTANT: Take a screenshot of your PDF and name it this
                alt="Farid Choche Resume "
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </Link>
          
          <p className="text-center mt-6 text-slate-400 text-sm font-medium italic">
            Click the image to view the full-size document[cite: 8, 28].
          </p>
        </motion.div>
      </div>
    </section>
  )
}