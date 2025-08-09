// Shared portfolio data for all API endpoints
import { randomUUID } from 'crypto';

class MemStorage {
  constructor() {
    this.profile = undefined;
    this.skills = new Map();
    this.experience = new Map();
    this.education = new Map();
    this.projects = new Map();
    this.certifications = new Map();
    
    this.initializeData();
  }

  initializeData() {
    // Create profile
    const profileData = {
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
    const skillsData = [
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
      const skill = { id: randomUUID(), ...skillData };
      this.skills.set(skill.id, skill);
    }

    // Create experience
    const experienceData = [
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
      const exp = { id: randomUUID(), ...expData };
      this.experience.set(exp.id, exp);
    }

    // Create education
    const educationData = [
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
      const edu = { id: randomUUID(), ...eduData };
      this.education.set(edu.id, edu);
    }

    // Create projects
    const projectsData = [
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
      const project = { id: randomUUID(), ...projectData };
      this.projects.set(project.id, project);
    }

    // Create certifications
    const certificationsData = [
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
      const cert = { id: randomUUID(), ...certData };
      this.certifications.set(cert.id, cert);
    }
  }

  async getProfile() {
    return this.profile;
  }

  async getSkills() {
    return Array.from(this.skills.values());
  }

  async getExperience() {
    return Array.from(this.experience.values());
  }

  async getEducation() {
    return Array.from(this.education.values());
  }

  async getProjects() {
    return Array.from(this.projects.values());
  }

  async getProject(id) {
    return this.projects.get(id);
  }

  async getCertifications() {
    return Array.from(this.certifications.values());
  }
}

export const storage = new MemStorage(); 