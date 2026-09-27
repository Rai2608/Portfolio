import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../../data/profile';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          {/* Col 1: Bio & Mission */}
          <div className={styles.brandCol}>
            <span className={styles.name}>{profileData.name}</span>
            <p className={styles.role}>{profileData.headline}</p>
            <div className={styles.location}>
              <MapPin size={15} />
              <span>{profileData.location}</span>
            </div>
            <div className={styles.socialIcons}>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={styles.iconBtn}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={styles.iconBtn}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className={styles.iconBtn}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linksList}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/education">Education</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Resources & Contact */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Connect & Info</h4>
            <ul className={styles.linksList}>
              <li><NavLink to="/contact">Get in Touch</NavLink></li>
              <li><NavLink to="/resume">Resume (ATS Friendly)</NavLink></li>
              <li>
                <a href={profileData.github} target="_blank" rel="noreferrer">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a href={profileData.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Scroll to Top */}
          <div className={styles.backTopCol}>
            <button
              onClick={scrollToTop}
              className={styles.scrollBtn}
              aria-label="Scroll to top of page"
            >
              <ArrowUp size={20} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <p className={styles.credits}>
            Engineered with <Heart size={14} className={styles.heartIcon} /> using React 18, TypeScript, and Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};
