import { Metadata } from "next"
import { BlogSection } from "@/components/blog-section"

export const metadata: Metadata = {
  title: "Blog & Insights | Mohammad Farid",
  description: "Read the latest articles on web development, cybersecurity, and system architecture by Mohammad Farid.",
}

export default function BlogPage() {
  return (
    /**
     * pt-20: Space for fixed navbar
     * bg-slate-50/30: Very subtle off-white to make the white blog cards pop
     */
    <div className="min-h-screen bg-slate-50/30 pt-20 overflow-x-hidden">
      <main>
        {/* Your refined BlogSection component */}
        <BlogSection />
      </main>
      
      {/* Optional: Newsletter sign-up or Footer can go here */}
    </div>
  )
}