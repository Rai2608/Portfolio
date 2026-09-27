import { Profile } from './types';
import profileImg from '../assets/profile_pic.jpeg';

export const profileData: Profile = {
  name: "Paramita Das",
  title: "Computer Science Engineer & Backend Systems Developer",
  role: "Backend Systems, Machine Learning & Full Stack Developer",
  headline: "CS Student | Backend Systems Intern | Intelligent Systems & ML Engineering",
  location: "West Bengal, India",
  email: "paro12959@gmail.com",
  phone: "+91 7001305565",
  github: "https://github.com/Rai2608",
  linkedin: "https://www.linkedin.com/in/paramita-das-14116b2b4/",
  shortBio: "Computer Science undergraduate building intelligent systems that handle real-world data. Experienced in Python, FastAPI, Node.js, C++, and full-stack ML deployment. Former Backend Systems Intern focused on pipeline optimization and reverse engineering.",
  fullBio: [
    "Hello! I'm Paramita Das, a Computer Science student at JIS College of Engineering (B.Tech CSE, 2024-2028, SGPA: 8.93) with a passion for designing intelligent backend systems and machine learning applications that operate on real-world data.",
    "I have engineered and published multiple end-to-end applications, including a verified full-stack job portal (JobConnect), an automated security and phishing risk analyzer (URL_Auditor), an AI-assisted diagnostic symptom prediction system (Diasense AI), and a high-accuracy customer churn predictor (87% F1 score).",
    "Recently, as an SDE Intern (Backend Systems), I developed high-performance services with Python and FastAPI, reverse-engineered complex workflows to modernize application architecture, streamlined file-processing pipelines, and implemented software protection and code obfuscation techniques."
  ],
  stats: {
    yearsExperience: "2+",
    projectsCompleted: "4+",
    technologiesMastered: "14+",
    codeQualityScore: "8.93 SGPA"
  },
  approach: [
    {
      title: "Backend Performance & Optimization",
      description: "Developing scalable REST APIs with FastAPI and Node.js, optimizing file-processing workflows, and architecting resilient services.",
      icon: "Server"
    },
    {
      title: "Intelligent Systems & Machine Learning",
      description: "Building production-grade ML pipelines with Python, Scikit-learn, Pandas, and NumPy for diagnostic and predictive intelligence.",
      icon: "Zap"
    },
    {
      title: "Security & Trust Engineering",
      description: "Implementing verification layers, anti-phishing heuristic analysis, code obfuscation, and reverse-engineering safeguards.",
      icon: "ShieldCheck"
    },
    {
      title: "Full-Stack Reliability & Clean Code",
      description: "Bridging responsive frontends (React, Angular 18, React Native) with robust backend databases (MongoDB, MySQL) and Docker containers.",
      icon: "Code2"
    }
  ]
};

export const avatarUrl = profileImg;
