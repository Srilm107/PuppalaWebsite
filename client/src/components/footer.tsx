import { useQuery } from "@tanstack/react-query";
import type { ProjectInfo } from "@shared/schema";

export default function Footer() {
  const { data: projectInfo } = useQuery<ProjectInfo>({
    queryKey: ["/api/project-info"],
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
            <h3 className="text-lg font-semibold mb-4">Portfolio Project</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A comprehensive web development project demonstrating the complete lifecycle 
              of creating a professional portfolio website.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("overview")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Project Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("timeline")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Timeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("milestones")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Milestone Reports
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gantt")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Gantt Chart
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Cumberland University</h3>
            <p className="text-slate-300 text-sm">
              Information Technology Field Experience<br />
              Course: EX30<br />
              Academic Year: 2025
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 {projectInfo?.studentName || "Lakshmi Durga Puppala"}. 
            Created for academic purposes at Cumberland University.
          </p>
        </div>
      </div>
    </footer>
  );
}
