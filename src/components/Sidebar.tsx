import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "intro", label: "Introduction" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "courses", label: "Courses" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden p-2 bg-card rounded-lg border border-border hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-card border-r border-border z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 lg:w-72`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Logo/Name */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-gradient mb-1">John Doe</h1>
            <p className="text-muted-foreground text-sm">Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-secondary transition-all duration-200 group"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2025 John Doe
              <br />
              All rights reserved
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
