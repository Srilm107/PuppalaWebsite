import { useQuery } from "@tanstack/react-query";
import { Mail, Phone, Linkedin, Heart } from "lucide-react";
import type { Profile } from "@shared/schema";

export default function PortfolioFooter() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {profile?.name || "Lakshmi Durga Puppala"}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {profile?.title || "Software Developer & IT Management Student"}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Passionate about creating innovative software solutions and continuously 
              learning new technologies to solve real-world problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="space-y-3">
              {profile?.email && (
                <a 
                  href={`mailto:${profile.email}`}
                  className="flex items-center text-slate-300 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-3" />
                  {profile.email}
                </a>
              )}
              {profile?.phone && (
                <a 
                  href={`tel:${profile.phone}`}
                  className="flex items-center text-slate-300 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mr-3" />
                  {profile.phone}
                </a>
              )}
              {profile?.linkedin && (
                <a 
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-300 hover:text-white transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4 mr-3" />
                  LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center">
            © 2025 {profile?.name || "Lakshmi Durga Puppala"}. Made with 
            <Heart className="h-4 w-4 mx-1 text-red-500" /> 
            and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}