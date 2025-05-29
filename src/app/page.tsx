import BlogSection from "@/components/Blog";
import Contact from "@/components/Contact";
import ExperienceEducation from "@/components/ExperienceEducation";
import Hero from "@/components/Hero";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero className="px-8 sm:px-14" />
      <Projects className="px-8 sm:px-14" />
      <Skills className="px-8 sm:px-14" />
      <ExperienceEducation className="px-8 sm:px-14" />
      <OpenSource className="px-8 sm:px-14" />
      <BlogSection className="px-8 sm:px-14" />
      <Contact className="px-8 sm:px-14" />
    </main>
  );
}
