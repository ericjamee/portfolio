/**
 * SITE DATA CONFIGURATION
 * Update this file to customize your portfolio content
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

// PERSONAL INFORMATION - Update with your details
export const personalInfo = {
  name: "James Erickson",
  title: "Full-Stack Developer",
  tagline: "Building reliable, elegant software from front to back.",
  bio: `I'm a full-stack developer currently studying Information Systems at BYU. 
  I specialize in building modern web applications using React, .NET, and cloud technologies 
  like Azure and AWS. My approach to development centers on creating simple, scalable, 
  and user-focused solutions that solve real problems.`,
  philosophy: `I believe great software is both powerful and intuitive. Whether working on the 
  front-end or back-end, I prioritize clean code, thoughtful architecture, and exceptional 
  user experiences. My goal is to build systems that are maintainable, performant, and 
  delightful to use.`,
  education: "Information Systems, Brigham Young University",
  location: "Provo, Utah",
  // You can replace this with your actual image path later
  image: "/images/profile.jpg",
};

// CONTACT INFORMATION - Update with your links
export const contactInfo: ContactInfo = {
  email: "jamesee2@byu.edu",
  linkedin: "https://linkedin.com/in/JamesEdErickson",
  github: "https://github.com/jameserickson",
};

// PROJECTS - Add your projects here
// Replace placeholder images with your actual project screenshots
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, .NET Core, and Azure. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["React", ".NET Core", "Azure", "SQL Server"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Built using React, Node.js, and AWS services with WebSocket support.",
    image: "/images/projects/taskmanager.jpg",
    tags: ["React", "Node.js", "AWS", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for business intelligence. Features interactive charts, data visualization, and custom reporting capabilities.",
    image: "/images/projects/analytics.jpg",
    tags: ["React", "TypeScript", "D3.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API for a social media platform with authentication, posts, comments, and real-time notifications. Built with .NET and deployed on Azure.",
    image: "/images/projects/api.jpg",
    tags: [".NET", "Azure", "Redis", "SignalR"],
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 5,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts and nutrition. Syncs data across devices using cloud storage.",
    image: "/images/projects/fitness.jpg",
    tags: ["React Native", "Firebase", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI API. Features include blog post generation, content optimization, and SEO suggestions.",
    image: "/images/projects/ai-content.jpg",
    tags: ["React", "Python", "OpenAI", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
];

// SKILLS - Update with your skills
export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  backend: [".NET", "C#", "Node.js", "Express", "RESTful APIs"],
  cloud: ["Azure", "AWS", "Docker", "Kubernetes"],
  database: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "GitHub Actions", "Jest", "Postman"],
};

// RESUME - Update with your resume file
export const resumeInfo = {
  // Place your resume.pdf in the /public/files/ directory
  pdfUrl: "/files/James Erickson Resume.pdf",
  lastUpdated: "October 2025",
};

