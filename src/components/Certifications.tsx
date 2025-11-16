import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "eLearning Junior Penetration Tester (eJPT)",
    issuer: "NetRiders",
    date: "2024",
    credential: "AWS-SA-2024-XXX",
    link: "#",
  },

];

export const Certifications = () => { 
  return (
    <section id="certifications" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Certifications</h2>
        <p className="text-muted-foreground mb-12 text-lg">Professional credentials</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="card-gradient border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                    <p className="text-muted-foreground text-xs mb-1">
                      Issued: {cert.date}
                    </p>
                    <p className="text-muted-foreground text-xs mb-3">
                      Credential ID: {cert.credential}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-3 text-xs"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1.5" />
                      Verify
                    </Button>
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
