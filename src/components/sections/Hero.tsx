import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImg from '../../assets/Home.png';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background ambient lighting */}
      <div className={styles.backdropGlow} />

      <div className={styles.heroContent}>
        {/* Centerpiece Image */}
        <div className={styles.centerpiece}>
          <img
            src={homeImg}
            alt="Paramita Das - Backend Developer"
            className={styles.heroImage}
          />
        </div>

        {/* Bottom Left Statement */}
        <div className={styles.bottomLeft}>
          <p className={styles.introStatement}>
            I build scalable backend systems, high-performance APIs, and intelligent architectures that turn complex data into seamless experiences.
          </p>
        </div>

        {/* Bottom Right Glowing CTA */}
        <div className={styles.bottomRight}>
          <div className={styles.ctaGlowContainer}>
            <div className={styles.ambientButtonGlow} />
            <NavLink to="/contact" className={styles.luminousPillBtn}>
              Book a free call
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
