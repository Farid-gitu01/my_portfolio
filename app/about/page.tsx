import { Metadata } from "next"
import { AboutMeSection } from "@/components/about-me-section"

/**
 * Metadata specifically for the About Page.
 * This improves SEO and makes the tab title look professional.
 */
export const metadata: Metadata = {
  title: "About Me | Mohammad Farid",
  description: "Discover the journey of Mohammad Farid, a Full Stack Developer and Ethical Hacker specializing in secure, high-impact digital solutions.",
}

export default function AboutPage() {
  return (
    /**
     * pt-20: Offsets the fixed Navbar height.
     * min-h-screen: Ensures the white background spans the full viewport.
     * overflow-x-hidden: Prevents accidental horizontal scrolling from animations.
     */
    <div className="min-h-screen bg-white pt-20 overflow-x-hidden">
      <main>
        {/* Your refined AboutMeSection component */}
        <AboutMeSection />
        
        {/* Note: Since this is now a dedicated page, you can 
            eventually add extra components here like 
            'WorkPhilosophy' or 'EducationHistory'.
        */}
      </main>
    </div>
  )
}