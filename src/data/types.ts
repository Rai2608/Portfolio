export interface Profile {
  name: string;
  title: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  shortBio: string;
  fullBio: string[];
  formspreeId?: string;
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    technologiesMastered: string;
    codeQualityScore: string;
  };
  approach: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Frontend' | 'Cloud & Systems' | 'AI & Analytics';
  featured: boolean;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  roleSummary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: 'Expert' | 'Proficient' | 'Familiar';
    years: number;
    icon?: string;
  }[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationYear: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  icon?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  impact?: string;
}
