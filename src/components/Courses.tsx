import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Clock } from "lucide-react";

const courses = [
  {
    title: "Advanced React & TypeScript",
    platform: "Frontend Masters",
    date: "2024",
    duration: "40 hours",
    description: "Deep dive into React patterns, TypeScript integration, and performance optimization",
  },
  {
    title: "Full Stack Open 2023",
    platform: "University of Helsinki",
    date: "2023",
    duration: "60 hours",
    description: "Comprehensive full-stack development covering React, Node.js, GraphQL, and testing",
  },
  {
    title: "AWS Solutions Architect",
    platform: "AWS Training",
    date: "2023",
    duration: "30 hours",
    description: "Cloud architecture, scalability, and AWS services best practices",
  },
  {
    title: "System Design & Architecture",
    platform: "Udemy",
    date: "2022",
    duration: "25 hours",
    description: "Designing scalable systems, microservices architecture, and distributed systems",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-20 px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Courses</h2>
        <p className="text-muted-foreground mb-12 text-lg">Continuous learning journey</p>

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
                  <p className="text-primary text-sm font-medium mb-3">{course.platform}</p>
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {course.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {course.duration}
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
