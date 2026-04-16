import { HeroSection } from "@/components/hero-section"
import { AboutMeSection } from "@/components/about-me-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Hero Section - Full Width Impact */}
      <HeroSection />

      {/* 2. Main Content Container */}
      <div className="container mx-auto px-6 space-y-32 md:space-y-48 pb-24 relative z-10">
        
        {/* About Section - Professional Introduction */}
        <section id="about" className="scroll-mt-32">
          <AboutMeSection />
        </section>

        {/* Skills - Wrapped in a 'Healthy' Professional Card */}
        <section id="skills" className="scroll-mt-32">
          <div className="p-8 md:p-16 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-blue-500/5 relative overflow-hidden">
            {/* Subtle background decorative element for the skills card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 blur-3xl rounded-full -mr-32 -mt-32" />
            <SkillsSection />
          </div>
        </section>

        {/* Projects - Selected Works Showcase */}
        <section id="projects" className="scroll-mt-32">
          <ProjectsSection />
        </section>

        {/* Career Summary - Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 scroll-mt-32 items-start">
          <section id="resume" className="scroll-mt-32 h-full">
            <div className="bg-slate-50/50 p-8 md:p-12 rounded-[3rem] border border-slate-100 h-full">
               <ResumeSection />
            </div>
          </section>
          
          <section id="experience" className="scroll-mt-32 h-full">
             <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 h-full">
                <ExperienceSection />
             </div>
          </section>
        </div>

        {/* Contact CTA - Styled as a High-Impact Blue Card */}
        <section 
          id="contact" 
          className="scroll-mt-32 bg-blue-600 rounded-[3rem] p-8 md:p-20 text-white shadow-2xl shadow-blue-200 overflow-hidden relative"
        >
           {/* Dynamic background glow effects */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48 animate-pulse" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-[80px] rounded-full -ml-32 -mb-32" />
           
           <div className="relative z-10">
             <ContactSection />
           </div>
        </section>
        
      </div>

      {/* Global Background Decorations */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-50/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-slate-50/50 rounded-full blur-[100px]" />
      </div>
    </div>
  )
}