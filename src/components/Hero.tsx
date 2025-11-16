import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center animate-fade-in">
        {/* Profile Picture */}
        <div className="mb-8 animate-scale-in">
          <div className="lg:w-64 lg:h-64 w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-cyan-400 p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Mohamed Hamad"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient">Mohamed Hamad</span>
        </h1>
        <h2
          className="text-2xl md:text-3xl text-foreground/80 mb-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Security-Focused Full Stack Developer
        </h2>
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Full-stack and security-focused engineer specializing in backend
          development, penetration testing, and building reliable systems with
          best-practice security and clean architecture.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col items-center gap-4 justify-center animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          {/* <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button> */}
          {/* <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            CV
          </Button> */}

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("experience")}
            className="animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
