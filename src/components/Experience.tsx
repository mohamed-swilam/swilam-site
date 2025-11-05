import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    responsibilities: [
      "Led development of enterprise-scale web applications using React and Node.js",
      "Architected microservices infrastructure handling 10M+ daily requests",
      "Mentored team of 5 junior developers",
      "Reduced application load time by 60% through optimization",
      "Implemented CI/CD pipelines improving deployment efficiency",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    responsibilities: [
      "Built responsive web applications using React and TypeScript",
      "Collaborated with UX designers to implement pixel-perfect interfaces",
      "Integrated RESTful APIs and GraphQL endpoints",
      "Improved code quality through code reviews and best practices",
      "Achieved 98% customer satisfaction rate",
    ],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    responsibilities: [
      "Developed and maintained web applications using modern JavaScript frameworks",
      "Participated in agile development processes",
      "Debugged and resolved production issues",
      "Contributed to open-source projects",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
        <p className="text-muted-foreground mb-12 text-lg">My professional journey</p>

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
                      <li key={idx} className="flex items-start text-muted-foreground">
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
