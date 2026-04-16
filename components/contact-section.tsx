"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Mail, Send, MapPin, MessageCircle } from 'lucide-react'
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Available for projects</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto">
            Have a question or a proposal? Let's build something secure and beautiful together.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Let's talk about everything!</h3>
              <p className="text-slate-500 leading-relaxed">
                I'm currently looking for new opportunities. My inbox is always open whether you have a question or just want to say hi.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Me</p>
                  <Link href="mailto:faiz@example.com" className="text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                    faiz@example.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-blue-600 transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Socials</p>
                  <div className="flex gap-3 mt-1">
                    <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors"><Github size={18} /></Link>
                    <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors"><Linkedin size={18} /></Link>
                    <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors"><Twitter size={18} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-500/5"
          >
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium ml-1">Name</Label>
                  <Input id="name" placeholder="John Doe" className="rounded-xl border-slate-200 focus:ring-blue-500 py-6 px-4" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium ml-1">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl border-slate-200 focus:ring-blue-500 py-6 px-4" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-medium ml-1">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project..." rows={4} className="rounded-xl border-slate-200 focus:ring-blue-500 p-4 resize-none" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-7 rounded-2xl shadow-lg shadow-blue-200 transition-all hover:scale-[1.01] active:scale-[0.98]">
                Send Message <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}