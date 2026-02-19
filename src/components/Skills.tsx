import { Card } from "@/components/ui/card";
import { useState } from "react";

const skillCategories = [
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Nest.js" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "MySQL" },
      { name: "TypeORM" },
      { name: "Redis" },           
      { name: "Socket.IO" },       
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML & CSS" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },       
    ],
  },
  {
    category: "Cyber Security",
    skills: [
      { name: "CTF (Web, OSINT, Forensics, Network)" },
      { name: "Web & Network Penetration Testing" },
      { name: "Bug Bounty Hunting" },
      { name: "OWASP Top 10" },
      { name: "Burp Suite" },
      { name: "Wireshark" },
      { name: "Metasploit Basics" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker" },
      // { name: "Kubernetes Basics" },
      { name: "Cloudinary" },
      { name: "CI/CD Pipelines" },
      { name: "Linux Advanced Commands" },
      { name: "Postman" },
      { name: "Git & GitHub" },
    ],
  },
  {
    category: "Soft / Problem Solving",
    skills: [
      { name: "ECPC Participant" },
      { name: "Team Collaboration and Leading" },
      { name: "Agile / Scrum Basics" },
      { name: "Time Management" },
    ],
  },
];


export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          Skills
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="card-gradient border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-1 ">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/5 hover:bg-primary/40 duration-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
