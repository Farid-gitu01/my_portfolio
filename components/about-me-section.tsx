"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Code2, Sparkles } from "lucide-react"

export function AboutMeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* LEFT COLUMN: Visual/Badge */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Healthy Glow Effect */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-[3rem] rotate-6 blur-2xl" />
              
              {/* Main Decorative Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-white rounded-[3rem] border border-blue-100 flex items-center justify-center shadow-inner group overflow-hidden">
                <Code2 className="w-32 h-32 text-blue-600/20 absolute -bottom-4 -right-4 rotate-12 transition-transform group-hover:scale-110" />
                <ShieldCheck className="w-24 h-24 text-blue-600 drop-shadow-xl" strokeWidth={1.5} />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-slate-800 leading-tight">
                  Security <br/> Focused
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Introduction</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Crafting secure, <span className="text-blue-600">high-impact</span> digital solutions.
              </h2>
              <div className="mt-4 h-1.5 w-20 bg-blue-600 rounded-full" />
            </motion.div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <motion.p variants={itemVariants}>
                I am a passionate **Full Stack Developer** dedicated to building
                secure, scalable applications. By blending creative frontend design with 
                robust backend architecture, I turn complex ideas into elegant digital realities.
              </motion.p>
              
              <motion.p variants={itemVariants} className="p-6 bg-blue-50/50 rounded-2xl border-l-4 border-blue-600 italic">
                "As an ethical hacker, I don't just build features; I build trust. I integrate cybersecurity best practices into every line of code to ensure your digital experience is safe and impactful."
              </motion.p>
            </div>

            {/* Micro-Stats or Highlights */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-4">Full-Stack</div>
                <div className="text-sm text-slate-500 font-medium">Development</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-4">Ethical</div>
                <div className="text-sm text-slate-500 font-medium">Hacking</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}