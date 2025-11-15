import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "DeverCrowd Platform",
    description:
      "Full-stack platform with secure authentication and scalable backend",
    image: project1,
    tags: ["MERN", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    details:
      "A full-stack system featuring secure authentication, user roles, scalable REST APIs, and a responsive frontend. Built with MERN stack and optimized for production-level performance.",
    github: "https://github.com/DeverCrowd/UpdatedDeverCrowd",
    demo: "https://devercrowd.com",
  },
  {
    title: "Full User Auth Methods API",
    description: "Authentication system supporting multiple login methods",
    image: project2,
    tags: ["Node.js", "Express", "JWT", "OAuth2", "Sessions", "MongoDB"],
    details:
      "A complete authentication backend implementing JWT, OAuth2, sessions, cookies, password hashing, and role-based access control. Designed for secure and scalable production use.",
    github: "https://github.com/mohamed-swilam/userAuths",
    demo: "#",
  },
  {
    title: "Events Tracker API",
    description: "REST API for managing and tracking events",
    image: project3,
    tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
    details:
      "RESTful API that allows users to create, manage, filter, and track events. Includes secure user access, validation, and optimized database queries for high performance.",
    github: "https://github.com/mohamed-swilam/events",
    demo: "#",
  },
  {
    title: "Blog Handler API",
    description: "Backend for managing posts, categories, and roles",
    image: project3,
    tags: ["Node.js", "Express", "MongoDB"],
    details:
      "A clean and scalable CRUD backend for blog posts with categories, user permissions, and secure routes. Built with best practices in API design and clean architecture.",
    github: "https://github.com/mohamedhamad1/blog",
    demo: "#",
  },
  {
    title: "Receipt Management System",
    description: "Secure backend to store and retrieve receipts",
    image: project3,
    tags: ["Node.js", "Express", "Multer", "MongoDB"],
    details:
      "A backend service for uploading, organizing, and retrieving receipts with secure file handling and structured data storage.",
    github: "https://github.com/mohamed-swilam/Receipt-Management",
    demo: "#",
  },
  {
    title: "Farm CTF Challenge",
    description: "Custom CTF challenge focused on web exploitation",
    image: project3,
    tags: ["Security", "Node.js", "Web Exploitation"],
    details:
      "A custom single CTF challenge designed for the Web category, featuring a unique vulnerability, custom logic, and a realistic exploitation path.",
    github: "https://github.com/mohamed-swilam/dontexpectit",
    demo: "#",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          Projects
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Some of my recent work
        </p>

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
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

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
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedProject?.description}
            </DialogDescription>
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
              <Button
                variant="default"
                onClick={() => window.open(selectedProject?.demo, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(selectedProject?.github, "_blank")}
              >
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
