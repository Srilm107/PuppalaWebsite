import { 
  type Profile, type InsertProfile,
  type Skills, type InsertSkills,
  type Experience, type InsertExperience,
  type Education, type InsertEducation,
  type Projects, type InsertProjects,
  type Certifications, type InsertCertifications
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Profile methods
  getProfile(): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  
  // Skills methods
  getSkills(): Promise<Skills[]>;
  createSkills(skills: InsertSkills): Promise<Skills>;
  
  // Experience methods
  getExperience(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Education methods
  getEducation(): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
  
  // Projects methods
  getProjects(): Promise<Projects[]>;
  getProject(id: string): Promise<Projects | undefined>;
  createProject(project: InsertProjects): Promise<Projects>;
  
  // Certifications methods
  getCertifications(): Promise<Certifications[]>;
  createCertification(certification: InsertCertifications): Promise<Certifications>;
}

export class MemStorage implements IStorage {
  private profile: Profile | undefined;
  private skills: Map<string, Skills>;
  private experience: Map<string, Experience>;
  private education: Map<string, Education>;
  private projects: Map<string, Projects>;
  private certifications: Map<string, Certifications>;

  constructor() {
    this.profile = undefined;
    this.skills = new Map();
    this.experience = new Map();
    this.education = new Map();
    this.projects = new Map();
    this.certifications = new Map();
    
    // Initialize with actual portfolio data
    this.initializeData();
  }

  private async initializeData() {
    // Create profile
    const profileData: InsertProfile = {
      name: "Puppala Lakshmi Durga",
      title: "Software Developer & IT Management Student",
      email: "lpuppala81@students.cumberland.edu",
      phone: "2179535351",
      linkedin: "www.linkedin.com/in/lakshmi-durga-puppala-a81752208/",
      summary: "A proactive and results-driven individual with a strong foundation in technology and programming. Demonstrated ability to develop and implement software solutions through academic and professional projects. Experienced in software training, database management, and web application development. Known for effective communication, teamwork, and delivering quality results under deadlines.",
      location: "United States"
    };
    
    this.profile = { id: randomUUID(), ...profileData };

    // Create skills
    const skillsData: InsertSkills[] = [
      {
        category: "Programming Languages",
        items: ["C", "Python", "C#"]
      },
      {
        category: "Web Development",
        items: ["HTML", "CSS", "Angular"]
      },
      {
        category: "Database Management",
        items: ["MySQL", "DBMS"]
      },
      {
        category: "Software Development",
        items: ["Quality Assurance", "Project Execution"]
      },
      {
        category: "Soft Skills",
        items: ["Organization", "Planning", "Time Management"]
      },
      {
        category: "Languages",
        items: ["English: Fluent", "Telugu: Native", "Hindi: Intermediate"]
      }
    ];

    for (const skillData of skillsData) {
      const skill: Skills = { id: randomUUID(), ...skillData };
      this.skills.set(skill.id, skill);
    }

    // Create experience
    const experienceData: InsertExperience[] = [
      {
        company: "Amzur Infotech Technology",
        position: "Software Trainee",
        location: "Vijayawada, India",
        startDate: "2022",
        endDate: "2023",
        description: [
          "Developed and implemented features for the Library Management System project, streamlining resource tracking",
          "Acquired hands-on experience in C# and Angular for front-end and back-end development",
          "Enhanced knowledge of MySQL for database management and ensured system reliability through Quality Assurance (QA)",
          "Utilized software models to effectively design and execute project components"
        ]
      }
    ];

    for (const expData of experienceData) {
      const exp: Experience = { id: randomUUID(), ...expData };
      this.experience.set(exp.id, exp);
    }

    // Create education
    const educationData: InsertEducation[] = [
      {
        institution: "Cumberland University",
        degree: "Ms in Information Technology Management",
        year: "Present",
        location: "United States"
      },
      {
        institution: "KL University",
        degree: "B.Tech in Electronics and Computer Engineering",
        year: "2023",
        location: "India"
      },
      {
        institution: "Triveni Junior College",
        degree: "Class XII",
        year: "2019",
        location: "India"
      },
      {
        institution: "Navodaya High School",
        degree: "Class X",
        year: "2017",
        location: "India"
      }
    ];

    for (const eduData of educationData) {
      const edu: Education = { id: randomUUID(), ...eduData };
      this.education.set(edu.id, edu);
    }

    // Create projects
    const projectsData: InsertProjects[] = [
      {
        title: "Student Assignment Submission Portal",
        duration: "Oct - Nov 2021",
        category: "Web Development",
        technologies: ["HTML", "CSS", "Database Integration"],
        description: [
          "Designed and developed a user-friendly web platform for submitting assignments using HTML, CSS, and Database integration",
          "Streamlined assignment management for students and faculty by providing an efficient, centralized solution"
        ]
      },
      {
        title: "E-Commerce Web Application",
        duration: "Jun - Jul 2021",
        category: "Web Development",
        technologies: ["Web Technologies", "UI/UX Design", "Backend Operations"],
        description: [
          "Built a responsive e-commerce platform to simulate real-world online shopping experiences",
          "Gained knowledge of domain structures, user interfaces, and backend operations for real-time applications"
        ]
      },
      {
        title: "Library Management System",
        duration: "2022-2023",
        category: "Software Development",
        technologies: ["C#", "Angular", "MySQL"],
        description: [
          "Developed and implemented features for streamlining resource tracking",
          "Utilized software models to effectively design and execute project components",
          "Ensured system reliability through comprehensive Quality Assurance testing"
        ]
      }
    ];

    for (const projectData of projectsData) {
      const project: Projects = { id: randomUUID(), ...projectData };
      this.projects.set(project.id, project);
    }

    // Create certifications
    const certificationsData: InsertCertifications[] = [
      {
        name: "Cambridge English: Business Certificates (BEC)",
        issuer: "Cambridge Assessment English",
        year: "2023"
      },
      {
        name: "AWS Academy Cloud Foundations",
        issuer: "AWS Academy",
        year: "2023"
      }
    ];

    for (const certData of certificationsData) {
      const cert: Certifications = { id: randomUUID(), ...certData };
      this.certifications.set(cert.id, cert);
    }
  }

  async getProfile(): Promise<Profile | undefined> {
    return this.profile;
  }

  async createProfile(insertProfile: InsertProfile): Promise<Profile> {
    const id = randomUUID();
    const profile: Profile = { ...insertProfile, id };
    this.profile = profile;
    return profile;
  }

  async getSkills(): Promise<Skills[]> {
    return Array.from(this.skills.values());
  }

  async createSkills(insertSkills: InsertSkills): Promise<Skills> {
    const id = randomUUID();
    const skills: Skills = { ...insertSkills, id };
    this.skills.set(id, skills);
    return skills;
  }

  async getExperience(): Promise<Experience[]> {
    return Array.from(this.experience.values());
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = randomUUID();
    const experience: Experience = { ...insertExperience, id };
    this.experience.set(id, experience);
    return experience;
  }

  async getEducation(): Promise<Education[]> {
    return Array.from(this.education.values());
  }

  async createEducation(insertEducation: InsertEducation): Promise<Education> {
    const id = randomUUID();
    const education: Education = { ...insertEducation, id };
    this.education.set(id, education);
    return education;
  }

  async getProjects(): Promise<Projects[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Projects | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProjects): Promise<Projects> {
    const id = randomUUID();
    const project: Projects = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getCertifications(): Promise<Certifications[]> {
    return Array.from(this.certifications.values());
  }

  async createCertification(insertCertification: InsertCertifications): Promise<Certifications> {
    const id = randomUUID();
    const certification: Certifications = { ...insertCertification, id };
    this.certifications.set(id, certification);
    return certification;
  }
}

export const storage = new MemStorage();
