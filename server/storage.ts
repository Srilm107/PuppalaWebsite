import { type Milestone, type InsertMilestone, type ProjectInfo, type InsertProjectInfo } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Milestone methods
  getMilestones(): Promise<Milestone[]>;
  getMilestone(id: string): Promise<Milestone | undefined>;
  createMilestone(milestone: InsertMilestone): Promise<Milestone>;
  
  // Project info methods
  getProjectInfo(): Promise<ProjectInfo | undefined>;
  createProjectInfo(projectInfo: InsertProjectInfo): Promise<ProjectInfo>;
}

export class MemStorage implements IStorage {
  private milestones: Map<string, Milestone>;
  private projectInfo: ProjectInfo | undefined;

  constructor() {
    this.milestones = new Map();
    this.projectInfo = undefined;
    
    // Initialize with actual project data
    this.initializeData();
  }

  private async initializeData() {
    // Create project info
    const projectData: InsertProjectInfo = {
      studentName: "Lakshmi Durga Puppala",
      courseName: "Information Technology Field Experience – EX30",
      institution: "Cumberland University",
      projectTitle: "Portfolio Website Development Project",
      projectDescription: "A comprehensive web development project undertaken as part of the Information Technology Field Experience (EX30) course at Cumberland University. This project demonstrates the complete lifecycle of developing a professional portfolio website.",
      startDate: "June 29, 2025",
      endDate: "August 10, 2025",
      currentProgress: 75,
    };
    
    this.projectInfo = { id: randomUUID(), ...projectData };

    // Create milestones based on the reports
    const milestonesData: InsertMilestone[] = [
      {
        title: "Planning & Design",
        description: "Completed the foundational planning phase including website structure, design sketches, content gathering, and visual design decisions.",
        status: "completed",
        completionDate: "June 29, 2025",
        deadline: "June 29, 2025",
        milestoneNumber: 1,
        tasks: [
          "Website structure planning",
          "Design sketches creation", 
          "Content and media gathering",
          "Visual design decisions finalization"
        ],
        achievements: [
          "Finished all planned tasks on schedule",
          "Created clear and solid plan for entire project",
          "Established strong foundation for development phase"
        ],
        learnings: "Dedicating time to detailed planning at the beginning is incredibly valuable, as it prevents confusion and saves a lot of time later on. Having the design sketches and a clear structure before writing code gives us a confident and clear guide to follow.",
        nextSteps: "Core Development and Design phase - setting up development environment, writing HTML/CSS code, building main pages, and adding JavaScript interactivity."
      },
      {
        title: "Core Development & Design", 
        description: "Development of main website structure with HTML/CSS, responsive design implementation, and cross-browser testing.",
        status: "completed",
        completionDate: "July 13, 2025",
        deadline: "July 13, 2025",
        milestoneNumber: 2,
        tasks: [
          "HTML and CSS code writing",
          "Responsive design implementation",
          "Cross-browser compatibility testing",
          "Core pages development (Home, Projects, Contact)"
        ],
        achievements: [
          "Core pages built and fully functional",
          "Responsive design working on all devices",
          "Clean and working website version created",
          "Strong foundation established for next phase"
        ],
        learnings: "The practical importance of writing clean and well-commented code. This practice makes it much easier to manage and update the website later. Gained hands-on experience with responsive design and media queries.",
        nextSteps: "Content Integration & Case Studies - creating detailed project case studies, writing content for other sections, integrating graphics and implementing interactive elements."
      },
      {
        title: "Content Integration & Case Studies",
        description: "Content creation, project case studies development, interactive elements implementation, and media integration.",
        status: "completed", 
        completionDate: "July 27, 2025",
        deadline: "July 27, 2025",
        milestoneNumber: 3,
        tasks: [
          "Project case studies creation",
          "Content writing for other sections",
          "Interactive elements implementation",
          "Graphics and media integration"
        ],
        achievements: [
          "Website feels like complete portfolio rather than template",
          "All necessary text and visuals integrated smoothly",
          "Portfolio functional and populated with case studies",
          "Website ready for final testing"
        ],
        learnings: "How important good storytelling is when creating project case studies. It's not just about showing the final product but also explaining the process and challenges. Learned to implement JavaScript for portfolio filtering and optimize images for web.",
        nextSteps: "Testing, Optimization & Launch - comprehensive testing, SEO optimization, final testing, and deployment to live server."
      },
      {
        title: "Testing, Optimization & Launch",
        description: "Comprehensive testing across devices and browsers, SEO optimization, and final deployment to live server.",
        status: "in-progress",
        completionDate: undefined,
        deadline: "August 10, 2025", 
        milestoneNumber: 4,
        tasks: [
          "Comprehensive device & browser testing",
          "SEO optimization implementation",
          "Final testing of all links and forms",
          "Website deployment to live server"
        ],
        achievements: [],
        learnings: "",
        nextSteps: "Final project completion and documentation."
      }
    ];

    for (const milestoneData of milestonesData) {
      const milestone: Milestone = { id: randomUUID(), ...milestoneData };
      this.milestones.set(milestone.id, milestone);
    }
  }

  async getMilestones(): Promise<Milestone[]> {
    return Array.from(this.milestones.values()).sort((a, b) => a.milestoneNumber - b.milestoneNumber);
  }

  async getMilestone(id: string): Promise<Milestone | undefined> {
    return this.milestones.get(id);
  }

  async createMilestone(insertMilestone: InsertMilestone): Promise<Milestone> {
    const id = randomUUID();
    const milestone: Milestone = { ...insertMilestone, id };
    this.milestones.set(id, milestone);
    return milestone;
  }

  async getProjectInfo(): Promise<ProjectInfo | undefined> {
    return this.projectInfo;
  }

  async createProjectInfo(insertProjectInfo: InsertProjectInfo): Promise<ProjectInfo> {
    const id = randomUUID();
    const projectInfo: ProjectInfo = { ...insertProjectInfo, id };
    this.projectInfo = projectInfo;
    return projectInfo;
  }
}

export const storage = new MemStorage();
