import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Mail,
  FileText,
  Terminal,
  Heart,
  BookOpen,
  Users,
  Compass
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { profileData, avatarUrl } from '../data/profile';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import styles from './AboutPage.module.css';

export const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="container">
          <Badge variant="primary" size="sm">
            Professional Profile
          </Badge>
          <h1 className={styles.pageTitle}>About Paramita Das</h1>
          <p className={styles.pageSubtitle}>
            Full Stack Software Engineer, frontend systems architect, and relentless problem-solver.
          </p>
        </div>
      </section>

      {/* Main Content: Bio & Visual Info */}
      <section className={styles.bioSection}>
        <div className={`container ${styles.bioGrid}`}>
          {/* Left Column: Visual card & quick facts */}
          <div className={styles.sidebarCol}>
            <div className={styles.profileCard}>
              <div className={styles.avatarWrapper}>
                <img
                  src={avatarUrl}
                  alt={`${profileData.name} portrait`}
                  className={styles.avatarImg}
                />
              </div>

              <div className={styles.profileDetails}>
                <h3 className={styles.profileName}>{profileData.name}</h3>
                <p className={styles.profileRole}>{profileData.title}</p>
                <div className={styles.locationTag}>
                  <MapPin size={15} />
                  <span>{profileData.location}</span>
                </div>
              </div>

              <div className={styles.sidebarActions}>
                <NavLink to="/contact" className={styles.fullWidth}>
                  <Button variant="primary" size="md" className={styles.fullWidth} icon={<Mail size={16} />}>
                    Connect Directly
                  </Button>
                </NavLink>

                <NavLink to="/resume" className={styles.fullWidth}>
                  <Button variant="secondary" size="md" className={styles.fullWidth} icon={<FileText size={16} />}>
                    Download Resume (PDF)
                  </Button>
                </NavLink>
              </div>

              {/* Quick links */}
              <div className={styles.socialRow}>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className={styles.socialBtn}
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Bio, Journey & Core Values */}
          <div className={styles.mainBioCol}>
            <div className={styles.bioBlock}>
              <h2 className={styles.blockTitle}>
                <Terminal size={22} className={styles.titleIcon} /> The Journey
              </h2>
              {profileData.fullBio.map((paragraph, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* What I Do Well / Core Competencies */}
            <div className={styles.bioBlock}>
              <h2 className={styles.blockTitle}>
                <Sparkles size={22} className={styles.titleIcon} /> What I Bring to a Team
              </h2>
              <div className={styles.valueGrid}>
                <div className={styles.valueItem}>
                  <h4 className={styles.valueTitle}>Frontend Architecture at Scale</h4>
                  <p className={styles.valueDesc}>
                    Designing resilient component libraries, enforcing strict design token systems,
                    and structuring React state trees that stay maintainable as feature counts multiply.
                  </p>
                </div>

                <div className={styles.valueItem}>
                  <h4 className={styles.valueTitle}>Core Web Vitals & Optimization</h4>
                  <p className={styles.valueDesc}>
                    Deep understanding of browser rendering mechanics, critical rendering paths,
                    code-splitting, tree-shaking, and network waterfalls to deliver snappy interactions.
                  </p>
                </div>

                <div className={styles.valueItem}>
                  <h4 className={styles.valueTitle}>Accessible & Inclusive by Default</h4>
                  <p className={styles.valueDesc}>
                    Adhering to WCAG 2.1 AA specifications with semantic markup, accessible color
                    contrast ratios, ARIA landmarks, and robust keyboard focus management.
                  </p>
                </div>

                <div className={styles.valueItem}>
                  <h4 className={styles.valueTitle}>End-to-End Reliability</h4>
                  <p className={styles.valueDesc}>
                    Integrating comprehensive testing suites (Vitest, React Testing Library, Cypress)
                    and automated CI/CD checks to ship code with uncompromising confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Beyond the Code */}
            <div className={styles.bioBlock}>
              <h2 className={styles.blockTitle}>
                <Compass size={22} className={styles.titleIcon} /> Beyond the Code
              </h2>
              <div className={styles.beyondGrid}>
                <div className={styles.beyondCard}>
                  <Users size={20} className={styles.beyondIcon} />
                  <div>
                    <h4 className={styles.beyondTitle}>Mentorship & Knowledge Sharing</h4>
                    <p className={styles.beyondText}>
                      Conducting structured code reviews and knowledge-sharing workshops on modern
                      TypeScript patterns and web standards.
                    </p>
                  </div>
                </div>

                <div className={styles.beyondCard}>
                  <BookOpen size={20} className={styles.beyondIcon} />
                  <div>
                    <h4 className={styles.beyondTitle}>Continuous Learning</h4>
                    <p className={styles.beyondText}>
                      Actively exploring new paradigms in distributed systems, vector search, edge computing,
                      and browser APIs.
                    </p>
                  </div>
                </div>

                <div className={styles.beyondCard}>
                  <Heart size={20} className={styles.beyondIcon} />
                  <div>
                    <h4 className={styles.beyondTitle}>Open Source Community</h4>
                    <p className={styles.beyondText}>
                      Contributing documentation fixes, reporting edge-case bugs, and collaborating on
                      open-source developer tooling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
