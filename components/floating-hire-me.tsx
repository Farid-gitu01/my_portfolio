"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { MessageSquarePlus, Sparkles } from "lucide-react"

export function FloatingHireMe() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 2, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="/contact" passHref>
        <div className="relative group">
          {/* Outer Breathing Glow Effect */}
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-blue-400 blur-xl rounded-full -z-10"
          />

          <Button 
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-xl shadow-blue-500/25 px-6 py-7 text-white border-none group flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
            size="lg"
          >
            <div className="relative">
              <MessageSquarePlus className="h-6 w-6 transition-transform group-hover:rotate-12" />
              {/* Notification Dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
              </span>
            </div>

            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100 opacity-80 mb-0.5">Available</span>
              <span className="font-black text-lg tracking-tight">Hire Me</span>
            </div>

            <Sparkles className="h-4 w-4 text-blue-200 hidden md:block group-hover:animate-spin-slow" />
          </Button>
        </div>
      </Link>
    </motion.div>
  )
}