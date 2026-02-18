import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Co-Founder, Fullstack Developer",
    company: "DeverCrowd",
    period: "03/2025 - 10/2025",
    responsibilities: [
      "Co-founded the startup and defined the product’s technical roadmap",
      "Designed and built the backend architecture using Node.js and Express.js",
      "Implemented secure authentication, authorization, and API protection",
      "Managed deployments, CI/CD, and cloud infrastructure",
      "Led the development team and coordinated product delivery",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2023 - Present",
    responsibilities: [
      "Developed full-stack applications using React, Next.js, Node.js, and Express",
      "Built and integrated RESTful APIs with secure authentication (JWT, OAuth)",
      "Designed and optimized MongoDB and SQL databases",
      "Created responsive UIs with Tailwind CSS",
      "Applied security best practices and deployed applications to production",
    ],
  },

  {
  title: "Bug Bounty Hunter & CTF Player",
  company: "HackerOne • Bugcrowd",
  period: "2023 - Present",
  responsibilities: [
    "Reported 30+ validated vulnerabilities across multiple platforms",
    "Listed on Hall of Fame pages on HackerOne and Bugcrowd",
    "Specialized in OWASP Top 10 and modern web exploitation",
    "Participated in CTF competitions (Web, OSINT, Network, Forensics)",
    "Developed custom Web challenge (Farm CTF)"
  ],
},
{
  title: "Competitive Programming Participant",
  company: "ECPC / ICPC Community",
  period: "2022 - Present",
  responsibilities: [
    "Participated in ECPC qualifiers and local ICPC contests",
    "Ranked 3rd in ICPC Obour Community contest",
    "Strengthened problem-solving and data structure skills"
  ],
},

];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          Experience
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          My professional journey
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-gradient border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-[var(--shadow-card-hover)] group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-primary mb-4 font-medium">{exp.company}</p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="text-primary mr-2 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
