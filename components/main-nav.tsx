"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="flex items-center gap-8">
      {/* Logo Area */}
      <Link href="/" className="group flex items-center gap-2">
        <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-lg font-black text-xl transition-transform group-hover:rotate-12">
          F
        </div>
        <span className="text-slate-900 font-bold text-xl tracking-tighter group-hover:text-blue-600 transition-colors">
          FARID<span className="text-blue-600">.</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-semibold transition-colors rounded-xl",
                isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-blue-50 rounded-xl -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* Mobile Indicator (Optional subtle dot) */}
      <div className="md:hidden">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">
          {links.find((l) => l.href === pathname)?.label || "Menu"}
        </span>
      </div>
    </nav>
  )
}