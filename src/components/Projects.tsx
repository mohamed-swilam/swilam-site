import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with interactive charts",
    image: project1,
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    details: "A comprehensive analytics dashboard featuring real-time data visualization, custom chart components, and responsive design. Built with React and TypeScript for type safety and maintainability.",
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Commerce App",
    description: "Modern e-commerce mobile application",
    image: project2,
    tags: ["React Native", "Redux", "Firebase"],
    details: "Full-featured mobile commerce application with product catalog, shopping cart, payment integration, and user authentication. Optimized for both iOS and Android platforms.",
    github: "#",
    demo: "#",
  },
  {
    title: "Business Intelligence Tool",
    description: "Data visualization and reporting platform",
    image: project3,
    tags: ["Next.js", "PostgreSQL", "D3.js"],
    details: "Enterprise-grade business intelligence tool providing advanced data analytics, custom report generation, and interactive visualizations. Handles large datasets with optimized query performance.",
    github: "#",
    demo: "#",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Projects</h2>
        <p className="text-muted-foreground mb-12 text-lg">Some of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-gradient border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] group cursor-pointer hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, "_blank");
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, "_blank");
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full rounded-lg"
            />
            <p className="text-foreground/80">{selectedProject?.details}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="default" onClick={() => window.open(selectedProject?.demo, "_blank")}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
              <Button variant="outline" onClick={() => window.open(selectedProject?.github, "_blank")}>
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
