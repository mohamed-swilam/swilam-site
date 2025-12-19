import { Card } from "@/components/ui/card";
import { useState } from "react";

const skillCategories = [
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Nest.js", level: 88 },
      { name: "MongoDB / Mongoose", level: 85 },
      { name: "MySQL / MS MySql", level: 85 },

    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 99 },
      { name: "HTML & CSS", level: 99 },
      { name: "Tailwind CSS", level: 99 },
    ],
  },
  {
    category: "Cyber Security",
    skills: [
      { name: "Web Penetration Testing", level: 80 },
      { name: "Bug Bounty Hunting", level: 78 },
      { name: "OWASP Top 10", level: 85 },
      { name: "CTF (Web, OSINT, Forensics, Network)", level: 75 },
      { name: "Burp Suite", level: 82 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux Basics", level: 75 },
      { name: "Postman", level: 88 },
      { name: "Docker (Basics)", level: 60 },
      { name: "Problem Solving", level: 80 },
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
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      {hoveredSkill === skill.name && (
                        <span className="text-xs text-primary font-semibold animate-fade-in">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/50"
                        style={{
                          width:
                            hoveredSkill === skill.name
                              ? `${skill.level}%`
                              : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
