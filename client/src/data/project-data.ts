// This file contains static project data that matches the milestone reports
// It's used as a fallback or reference for the actual data stored in the backend

export const projectData = {
  student: {
    name: "Lakshmi Durga Puppala",
    course: "Information Technology Field Experience – EX30",
    institution: "Cumberland University",
  },
  project: {
    title: "Portfolio Website Development Project",
    description: "A comprehensive web development project undertaken as part of the Information Technology Field Experience (EX30) course at Cumberland University. This project demonstrates the complete lifecycle of developing a professional portfolio website.",
    duration: "8 weeks",
    startDate: "June 29, 2025",
    endDate: "August 10, 2025",
    currentProgress: 75,
  },
  milestones: [
    {
      number: 1,
      title: "Planning & Design",
      status: "completed",
      completionDate: "June 29, 2025",
      deadline: "June 29, 2025",
      description: "Completed the foundational planning phase including website structure, design sketches, content gathering, and visual design decisions.",
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
      number: 2,
      title: "Core Development & Design",
      status: "completed", 
      completionDate: "July 13, 2025",
      deadline: "July 13, 2025",
      description: "Development of main website structure with HTML/CSS, responsive design implementation, and cross-browser testing.",
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
      number: 3,
      title: "Content Integration & Case Studies",
      status: "completed",
      completionDate: "July 27, 2025", 
      deadline: "July 27, 2025",
      description: "Content creation, project case studies development, interactive elements implementation, and media integration.",
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
      number: 4,
      title: "Testing, Optimization & Launch",
      status: "in-progress",
      completionDate: null,
      deadline: "August 10, 2025",
      description: "Comprehensive testing across devices and browsers, SEO optimization, and final deployment to live server.",
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
  ]
};
