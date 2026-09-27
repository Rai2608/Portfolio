import { Project } from './types';
import jobConnectImg from '../assets/Job_connect.png';
import urlAuditorImg from '../assets/URL_auditor.png';

export const projectsData: Project[] = [
  {
    id: "job-connect-portal",
    title: "JobConnect – Verified Job Platform",
    tagline: "Admin-verified recruitment platform eliminating fraudulent postings and fake profiles",
    category: "Full Stack",
    featured: true,
    problem: "Job seekers frequently face deceptive listings and unverified recruiters, while hiring managers receive spam applications from unauthenticated candidates.",
    solution: "Built a full-stack platform featuring a dual verification layer where both recruiters and job candidates must be approved by an administrator before posting or applying. Integrated secure JWT authentication with access and refresh tokens.",
    impact: "Dramatically curtailed scam postings and fake profiles through proactive admin verification, connecting candidates with trustworthy career opportunities.",
    technologies: ["MongoDB", "Express.js", "Angular 18", "Node.js", "TypeScript", "JWT (Access + Refresh)"],
    metrics: [
      { label: "Admin Verification", value: "100%" },
      { label: "Auth Layer", value: "JWT Dual" },
      { label: "Frontend", value: "Angular 18" }
    ],
    githubUrl: "https://github.com/Rai2608/Job-connect",
    imageUrl: jobConnectImg
  },
  {
    id: "url-auditor-security",
    title: "URL_Auditor – URL Security & Phishing Detector",
    tagline: "Automated URL security analyzer extracting domain heuristics and phishing indicators",
    category: "Full Stack",
    featured: true,
    problem: "Deceptive links, credential phishing campaigns, and concealed redirect chains pose severe security risks to internet users before visiting web destinations.",
    solution: "Developed an automated URL inspection engine that parses domain, protocol, redirect paths, and lexical URL structures using Cheerio and native fetch to identify suspicious anomalies.",
    impact: "Produces comprehensive risk assessments and instant security reports, empowering users to evaluate URL safety before clicking.",
    technologies: ["Node.js", "Express.js", "Native Fetch", "Cheerio HTML Parser", "HTML5", "JavaScript", "Vercel"],
    metrics: [
      { label: "Live Deployment", value: "Vercel" },
      { label: "Inspection Engine", value: "Cheerio" },
      { label: "Risk Score", value: "Instant" }
    ],
    liveUrl: "https://urlauditor.vercel.app/",
    githubUrl: "https://github.com/Rai2608",
    imageUrl: urlAuditorImg
  },
  {
    id: "diasense-ai-diagnostics",
    title: "Diasense AI – Diagnostic Health Assistant",
    tagline: "Machine learning health assistant predicting potential conditions from user symptoms",
    category: "AI & Analytics",
    featured: true,
    problem: "Individuals experiencing early or ambiguous symptoms frequently face difficulty evaluating urgency and potential underlying health conditions.",
    solution: "Engineered an intelligent medical prediction pipeline utilizing Python ML models, feature engineering, and a high-performance FastAPI backend connected to an intuitive React Native (Expo) mobile interface.",
    impact: "Achieved a 15% lift in user satisfaction during evaluation testing and provided instant real-time diagnostic predictions with high architectural scalability.",
    technologies: ["Python", "FastAPI", "React Native (Expo)", "Scikit-Learn", "REST APIs", "Pandas"],
    metrics: [
      { label: "Satisfaction Lift", value: "+15%" },
      { label: "Backend API", value: "FastAPI" },
      { label: "Mobile Client", value: "Expo" }
    ],
    githubUrl: "https://github.com/Rai2608",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "customer-churn-predictor",
    title: "Customer Churn Prediction Engine",
    tagline: "End-to-end classification model identifying customer attrition risk with 87% F1 score",
    category: "AI & Analytics",
    featured: false,
    problem: "SaaS and subscription businesses struggle to detect customer dissatisfaction early enough to implement proactive retention strategies.",
    solution: "Engineered a machine learning pipeline applying data preprocessing, feature encoding, scaling, and classification algorithms in Python.",
    impact: "Delivered a benchmark 87% F1 score on validation datasets, yielding interpretable feature importance for key churn drivers.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook"],
    metrics: [
      { label: "F1 Score", value: "87%" },
      { label: "Pipeline", value: "End-to-End" },
      { label: "Data Libs", value: "Pandas/NumPy" }
    ],
    githubUrl: "https://github.com/Rai2608",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];
