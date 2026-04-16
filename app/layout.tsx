import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingHireMe } from "@/components/floating-hire-me"
import { ScrollProgress } from "@/components/scroll-progress"
import { MainNav } from "@/components/main-nav" // Ensure you create this component
import { ModeToggle } from "@/components/dark-mode-toggle"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faiz - Full Stack Developer & Ethical Hacker",
  description: "Portfolio of Faiz, a Full Stack Developer and Ethical Hacker, showcasing secure and scalable web applications.",
  keywords: ["Faiz", "Full Stack Developer", "Ethical Hacker", "Portfolio", "Next.js", "Tailwind CSS", "Framer Motion"],
  authors: [{ name: "Faiz" }],
  openGraph: {
    title: "Faiz - Full Stack Developer & Ethical Hacker",
    description: "Portfolio of Faiz, a Full Stack Developer and Ethical Hacker, showcasing secure and scalable web applications.",
    url: "https://faiz-portfolio.vercel.app", 
    siteName: "Faiz's Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Faiz's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz - Full Stack Developer & Ethical Hacker",
    description: "Portfolio of Faiz, a Full Stack Developer and Ethical Hacker, showcasing secure and scalable web applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-slate-50 font-sans antialiased selection:bg-blue-100 selection:text-blue-700", 
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Set default to light for the "healthy/clean" look
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Progress Bar */}
          <ScrollProgress />

          {/* Persistent Modern Header */}
          <header className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
            <div className="container mx-auto flex justify-between items-center">
              <MainNav />
              <ModeToggle />
            </div>
          </header>

          {/* Main Content Area */}
          <main className="relative flex flex-col w-full">
            {children}
          </main>

          {/* Persistent Components */}
          <FloatingHireMe />
          
          {/* Background Decorative Glow (Healthy Look) */}
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
            <div className="absolute bottom-0 right-[10%] w-[30%] h-[30%] rounded-full bg-sky-50/50 blur-[100px]" />
          </div>

        </ThemeProvider>
      </body>
    </html>
  )
}