import { Metadata } from "next"
import { ExperienceSection } from "@/components/experience-section"

export const metadata: Metadata = {
  title: "Experience & Journey | Mohammad Farid",
  description: "A professional timeline of Mohammad Farid's career as a Full Stack Developer and certifications in Ethical Hacking.",
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white pt-20 overflow-x-hidden">
      <main>
        <ExperienceSection />
      </main>
    </div>
  )
}