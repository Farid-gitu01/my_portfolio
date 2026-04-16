import { Metadata } from "next"
import { ProjectsSection } from "@/components/projects-section"

export const metadata: Metadata = {
  title: "My Projects | Mohammad Farid",
  description: "Explore a showcase of secure full-stack applications and cybersecurity projects built by Mohammad Farid.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 overflow-x-hidden">
      <main>
        <ProjectsSection />
      </main>
    </div>
  )
}