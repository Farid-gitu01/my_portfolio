import { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact | Farid Choche",
  description: "Get in touch with Farid Choche for software development projects, collaborations, or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-50/30">
      <main>
        <ContactSection />
      </main>
    </div>
  )
}