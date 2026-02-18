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
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

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
    underDev: false,
  },
  {
    title: "Secure Mail",
    description:
      "A cybersecurity-focused email platform with real-time threat detection.",
    image: project2,
    tags: ["Node.js", "NestJS", "PostgreSQL", "JWT", "OAuth2","IMAP / SMTP"],
    details:
      "Developed a secure email client that integrates real-time cybersecurity scanning to detect phishing attempts, malicious attachments, and suspicious links. Implemented strong authentication using JWT, OAuth2, and session management, along with an admin dashboard for monitoring users, emails, and security alerts.",
    github: "https://github.com/The-Team-Dream/SecureMail",
    demo: "",
    underDev: true,
  },
  // {
  //   title: "Swichat",
  //   description:
  //     "A real-time chat application with stories similar to WhatsApp.",
  //   image: project3,
  //   tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.IO"],
  //   details:
  //     "Built a real-time chat platform that allows users to exchange messages instantly using WebSockets. The application includes a stories feature similar to WhatsApp, where users can upload images or videos that expire after 24 hours. Implemented user authentication, chat privacy, and scalable data handling using MongoDB and Mongoose.",
  //   github: "https://github.com/mohamed-swilam/Swichat",
  //   demo: "",
  //   underDev: true,
  // },
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
                  {project.demo && (
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
                  )}
                  {project.github && (
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
                      {project.underDev && (
                    <p className="text-gray-500 text-xs">{"(Under Development)"}</p>
                      )}
                    </Button>
                  )}
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
              {selectedProject?.demo && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    window.open(selectedProject?.demo, "_blank");
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View
                </Button>
              )}
              {selectedProject?.github && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    window.open(selectedProject?.github, "_blank");
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                  {selectedProject?.underDev && (
                    <p className="text-gray-500 text-xs">{"(Under Development)"}</p>
                  )}
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
