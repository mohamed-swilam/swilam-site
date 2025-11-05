import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Courses } from "@/components/Courses";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-72">
        <Hero />
        <Experience />
        <Projects />
        <Courses />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
