"use client"

import { motion, Variants } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

interface Blog {
  title: string
  description: string
  imageUrl: string
  link: string
  tag: string
}

const blogs: Blog[] = [
  {
    title: "How I Built a Hospital Management System in Next.js",
    description: "A deep dive into the architecture, challenges, and solutions encountered while developing a robust medical platform.",
    imageUrl: "/blogs/hospital-system.jpg",
    link: "#",
    tag: "Case Study"
  },
  {
    title: "Securing Web Applications – Basics for Beginners",
    description: "An introductory guide to fundamental security practices, covering vulnerabilities and protective measures for modern apps.",
    imageUrl: "/blogs/web-security.jpg",
    link: "#",
    tag: "Security"
  },
  {
    title: "Leveraging Framer Motion for Stunning UI Animations",
    description: "Explore how motion can transform static UIs into dynamic experiences with minimal code and maximum impact.",
    imageUrl: "/blogs/framer-motion.jpg",
    link: "#",
    tag: "Design"
  },
]

// Explicitly typed variants for 0 errors
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const BlogCard = ({ blog }: { blog: Blog }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="h-full"
  >
    <Card className="group flex flex-col h-full overflow-hidden bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 rounded-[2.5rem]">
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 backdrop-blur-md text-blue-600 text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full shadow-sm border border-blue-50">
            {blog.tag}
          </span>
        </div>
        
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={blog.imageUrl || "/placeholder.svg"}
            alt={blog.title}
            width={400}
            height={250}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </CardHeader>

      <CardContent className="p-8 flex-grow flex flex-col">
        <CardTitle className="text-xl font-bold mb-3 text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
          {blog.title}
        </CardTitle>
        <CardDescription className="text-slate-500 leading-relaxed text-sm flex-grow">
          {blog.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="p-8 pt-0">
        <Link href={blog.link} passHref className="w-full">
          <Button 
            variant="ghost" 
            className="w-full justify-between rounded-2xl bg-slate-50 hover:bg-blue-600 hover:text-white group/btn transition-all duration-300 py-6"
          >
            <span className="font-bold">Read Full Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  </motion.div>
)

export function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-50/50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                <BookOpen size={18} />
              </div>
              <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">Knowledge Base</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Latest <span className="text-blue-600">Insights.</span>
            </h2>
            <p className="text-lg text-slate-500 mt-6 leading-relaxed font-medium">
              Documenting the intersection of <span className="text-slate-900">secure development</span> and modern engineering.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <Button variant="outline" className="rounded-2xl border-slate-200 text-slate-600 hover:bg-white hover:border-blue-300 hover:text-blue-600 px-8 py-7 font-bold transition-all shadow-sm">
              All Articles
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}