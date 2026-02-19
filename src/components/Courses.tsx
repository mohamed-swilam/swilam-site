import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Clock } from "lucide-react";

const courses = [
  {
    title: "Backend & Security Fundamentals",
    platform: "MaharaTech",
    date: "2023",
    description:
      "Learned backend fundamentals including RESTful APIs, authentication, database integration, and backend architecture principles.",
  },
  {
    title: "Advanced Backend & Security Concepts (Self-Study)",
    platform: "Online Technical Resources",
    date: "2023",
    description:
      "Studied advanced authentication patterns, API security, scalable architecture, caching strategies, and performance optimization, Implemented secure, maintainable backend systems through curated online resources and practical projects",
  },
  {
    title: "Web Application Security & OWASP Top 10",
    platform: "PortSwigger Web Security Academy",
    date: "2024",
    description:
      "Completed hands-on labs covering XSS, SQL Injection, authentication flaws, access control, SSRF, and modern web exploitation techniques.",
  },
  {
    title: "eJPTv1 Prep",
    platform: "Netriders Academy",
    date: "2023",
    description:
      "Learned practical bug bounty methodologies including reconnaissance, automation, vulnerability discovery, and real-world exploitation techniques.",
  },
  {
    title: "Data Structures & Algorithms",
    platform: "Codeforces / ECPC Training",
    date: "2022 - 2024",
    description:
      "Practiced problem solving, dynamic programming, graphs, greedy algorithms, and competitive programming techniques.",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-20 px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          Courses
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Continuous learning journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="card-gradient border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {course.platform}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {course.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {course.date}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
