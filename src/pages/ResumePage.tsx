import React, { useRef } from 'react';
import { Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import styles from './ResumePage.module.css';

export const ResumePage: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.resumePage}>
      {/* Top Banner with Action Controls */}
      <section className={`${styles.actionBar} no-print`}>
        <div className={`container ${styles.actionContainer}`}>
          <div>
            <Badge variant="primary" size="sm">
              ATS-Optimized Format
            </Badge>
            <h1 className={styles.actionTitle}>Official Curriculum Vitae</h1>
            <p className={styles.actionDesc}>
              Matches official resume document • Verified credentials & achievements.
            </p>
          </div>

          <div className={styles.actionBtns}>
            <a href="/resume.pdf" download="Paramita_Das_Resume.pdf">
              <Button variant="primary" size="md" icon={<Download size={18} />}>
                Download PDF
              </Button>
            </a>

            <Button
              variant="secondary"
              size="md"
              onClick={handlePrint}
              icon={<Printer size={18} />}
            >
              Print
            </Button>
          </div>
        </div>
      </section>

      {/* Printable Resume Document Container */}
      <section className={styles.docSection}>
        <div className="container">
          <div ref={resumeRef} className={styles.resumeDoc} id="printable-resume">
            {/* 1. Header */}
            <header className={styles.docHeader}>
              <h1 className={styles.candidateName}>{profileData.name}</h1>
              <p className={styles.candidateTitle}>{profileData.title}</p>

              <div className={styles.contactBar}>
                <span className={styles.contactItem}>
                  <MapPin size={13} /> {profileData.location}
                </span>
                <span className={styles.contactDot}>|</span>
                <a href={`mailto:${profileData.email}`} className={styles.contactItem}>
                  <Mail size={13} /> {profileData.email}
                </a>
                <span className={styles.contactDot}>|</span>
                <span className={styles.contactItem}>
                  <Phone size={13} /> {profileData.phone}
                </span>
                <span className={styles.contactDot}>|</span>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactItem}
                >
                  <GithubIcon size={13} /> github.com/Rai2608
                </a>
                <span className={styles.contactDot}>|</span>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactItem}
                >
                  <LinkedinIcon size={13} /> linkedin.com/in/paramita-das
                </a>
              </div>
            </header>

            {/* 2. Professional Summary */}
            <section className={styles.resumeSection}>
              <h2 className={styles.sectionHeading}>Summary</h2>
              <p className={styles.summaryText}>
                CS student building intelligent systems that handle real-world data. Published 3 end-to-end
                projects: customer churn predictor (sklearn, 87% F1), health monitoring mobile app (React
                Native, 15% user satisfaction lift), and AI diagnostic assistant (FastAPI backend). Recent
                backend systems intern optimising pipelines for scale. Proficient in Python, C++, data
                engineering, and full-stack ML deployment.
              </p>
            </section>

            {/* 3. Work Experience */}
            <section className={styles.resumeSection}>
              <h2 className={styles.sectionHeading}>Work Experience</h2>
              <div className={styles.experienceList}>
                {experienceData.map((exp) => (
                  <div key={exp.id} className={styles.expEntry}>
                    <div className={styles.entryHeader}>
                      <div>
                        <h3 className={styles.entryTitle}>{exp.title}</h3>
                        <p className={styles.entryCompany}>April 2026 – June 2026</p>
                      </div>
                      <span className={styles.entryDates}>April 2026 – June 2026</span>
                    </div>

                    <ul className={styles.entryBullets}>
                      <li>Developed backend services using Python and FastAPI.</li>
                      <li>Reverse-engineered workflows to understand and improve application architecture.</li>
                      <li>Optimised file-processing workflows for better performance.</li>
                      <li>Improved error handling, validation, and backend stability.</li>
                      <li>Worked on code obfuscation and software-protection solutions.</li>
                    </ul>

                    <p className={styles.entryTechNote}>
                      <strong>Technologies:</strong> Python, FastAPI, React, REST APIs, Git/GitHub, Code Obfuscation & Reverse Engineering
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Projects */}
            <section className={styles.resumeSection}>
              <h2 className={styles.sectionHeading}>Projects</h2>
              <div className={styles.projectsResumeList}>
                {/* Project 1 */}
                <div className={styles.projectEntry}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.entryTitle}>JobConnect – Job Portal</h3>
                    <span className={styles.entryDates}>August 2026</span>
                  </div>
                  <p className={styles.techStackLine}>
                    <strong>Technologies:</strong> MongoDB, Express, Angular, Node.js, Angular 18, TypeScript, JWT (access + refresh)
                  </p>
                  <ul className={styles.entryBullets}>
                    <li>Built a job platform where both candidates and recruiters are verified by an admin before joining.</li>
                    <li>Reduced fake profiles and fraudulent job postings through a verification layer.</li>
                    <li>Helped job seekers connect with more trustworthy and relevant opportunities.</li>
                  </ul>
                  <p className={styles.linkLine}>
                    <strong>Link:</strong> <a href="https://github.com/Rai2608/Job-connect" target="_blank" rel="noreferrer">https://github.com/Rai2608/Job-connect</a>
                  </p>
                </div>

                {/* Project 2 */}
                <div className={styles.projectEntry}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.entryTitle}>URL_Auditor – Security & Phishing Analyzer</h3>
                    <span className={styles.entryDates}>July 2026</span>
                  </div>
                  <p className={styles.techStackLine}>
                    <strong>Technologies:</strong> Node.js + Express, native fetch, cheerio for HTML parsing, HTML, vanilla JS
                  </p>
                  <ul className={styles.entryBullets}>
                    <li>Developed a URL security analyzer that extracts domain, protocol, and URL-based features to detect suspicious links.</li>
                    <li>Implemented checks for phishing indicators, malicious patterns, redirects, and domain anomalies.</li>
                    <li>Generated a risk assessment and security report to help users evaluate URLs before accessing them.</li>
                  </ul>
                  <p className={styles.linkLine}>
                    <strong>Link:</strong> <a href="https://urlauditor.vercel.app/" target="_blank" rel="noreferrer">https://urlauditor.vercel.app/</a>
                  </p>
                </div>

                {/* Project 3 */}
                <div className={styles.projectEntry}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.entryTitle}>Diasense AI – AI-Powered Diagnostic Assistant</h3>
                    <span className={styles.entryDates}>February – May 2026</span>
                  </div>
                  <p className={styles.techStackLine}>
                    <strong>Technologies:</strong> Python, React Native (Expo), FastAPI
                  </p>
                  <ul className={styles.entryBullets}>
                    <li>Developed an ML-based system to predict potential health conditions from user-reported symptoms.</li>
                    <li>Performed data preprocessing and feature engineering to improve model performance.</li>
                    <li>Built backend APIs to handle real-time input and generate predictions.</li>
                    <li>Designed the system with a focus on scalability and real-world deployment.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Technical Skills */}
            <section className={styles.resumeSection}>
              <h2 className={styles.sectionHeading}>Skills</h2>
              <div className={styles.skillsTable}>
                <div className={styles.skillRow}>
                  <strong className={styles.skillLabel}>Languages:</strong>
                  <span className={styles.skillList}>Python, C++, Java, SQL, HTML, CSS, JavaScript, TypeScript</span>
                </div>
                <div className={styles.skillRow}>
                  <strong className={styles.skillLabel}>Tools / Frameworks:</strong>
                  <span className={styles.skillList}>Pandas, NumPy, Git, Jupyter Notebook, Docker, Postman, Angular 18, React, React Native (Expo)</span>
                </div>
                <div className={styles.skillRow}>
                  <strong className={styles.skillLabel}>Databases:</strong>
                  <span className={styles.skillList}>MySQL, MongoDB</span>
                </div>
                <div className={styles.skillRow}>
                  <strong className={styles.skillLabel}>Backend:</strong>
                  <span className={styles.skillList}>FastAPI, Node.js, Express.js, REST APIs</span>
                </div>
                <div className={styles.skillRow}>
                  <strong className={styles.skillLabel}>Other Skills:</strong>
                  <span className={styles.skillList}>Docker, CI/CD, Git Workflow / GitHub / GitLab, SQL Query Optimisation, Unit Testing, System Design, Code Obfuscation & Reverse Engineering</span>
                </div>
              </div>
            </section>

            {/* 6. Education */}
            <section className={styles.resumeSection}>
              <h2 className={styles.sectionHeading}>Education</h2>
              <div className={styles.eduEntry}>
                <div className={styles.entryHeader}>
                  <div>
                    <h3 className={styles.entryTitle}>JIS College of Engineering</h3>
                    <p className={styles.entryCompany}>Bachelor of Technology in Computer Science</p>
                  </div>
                  <span className={styles.entryDates}>2024 – 2028</span>
                </div>
                <p className={styles.eduNote}>
                  <strong>SGPA:</strong> 8.93
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
