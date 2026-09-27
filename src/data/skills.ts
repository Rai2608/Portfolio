import { SkillCategory } from './types';

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Layout",
    skills: [
      { name: "Python", level: "Expert", years: 3 },
      { name: "C++", level: "Proficient", years: 3 },
      { name: "JavaScript / TypeScript", level: "Proficient", years: 2 },
      { name: "Java", level: "Proficient", years: 2 },
      { name: "SQL", level: "Proficient", years: 2 },
      { name: "HTML5 & CSS3", level: "Expert", years: 3 }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: "Expert", years: 2 },
      { name: "Node.js & Express.js", level: "Proficient", years: 2 },
      { name: "RESTful API Architecture", level: "Expert", years: 2 },
      { name: "JWT Authentication", level: "Proficient", years: 2 },
      { name: "Pipeline Optimization", level: "Proficient", years: 1 },
      { name: "Code Obfuscation & Security", level: "Proficient", years: 1 }
    ]
  },
  {
    category: "Data Science & Machine Learning",
    icon: "Zap",
    skills: [
      { name: "Scikit-learn", level: "Proficient", years: 2 },
      { name: "Pandas & NumPy", level: "Proficient", years: 2 },
      { name: "Feature Engineering", level: "Proficient", years: 2 },
      { name: "Jupyter Notebook", level: "Expert", years: 2 },
      { name: "Model Evaluation (F1, Precision)", level: "Proficient", years: 2 }
    ]
  },
  {
    category: "Frameworks & Frontend",
    icon: "Layout",
    skills: [
      { name: "Angular 18", level: "Proficient", years: 1 },
      { name: "React", level: "Proficient", years: 2 },
      { name: "React Native (Expo)", level: "Proficient", years: 1 },
      { name: "Cheerio (Web Scraping)", level: "Proficient", years: 1 }
    ]
  },
  {
    category: "Databases & DevOps",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Proficient", years: 2 },
      { name: "MySQL", level: "Proficient", years: 2 },
      { name: "Docker", level: "Proficient", years: 1 },
      { name: "Git / GitHub / GitLab Workflow", level: "Expert", years: 3 },
      { name: "CI/CD & Postman", level: "Proficient", years: 2 },
      { name: "SQL Query Optimization", level: "Proficient", years: 2 }
    ]
  }
];
