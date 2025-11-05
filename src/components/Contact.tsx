import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@example.com",
    link: "mailto:john.doe@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohamedhamad1",
    link: "https://linkedin.com/in/mohamedhamad1",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mohamedhamad1",
    link: "https://github.com/mohamedhamad1",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@mohamedhamad1",
    link: "https://twitter.com/mohamedhamad1",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 text-lg text-center">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <Card className="card-gradient border-border p-8 hover:border-primary/50 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center pt-6 border-t border-border">
            <p className="text-muted-foreground mb-6">
              Prefer to send a quick message? Drop me an email and I'll get back to you as soon as possible.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("mailto:john.doe@example.com")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
