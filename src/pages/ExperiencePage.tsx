import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Timeline } from '../components/features/Timeline';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import styles from './ExperiencePage.module.css';

export const ExperiencePage: React.FC = () => {
  return (
    <div className={styles.experiencePage}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="container">
          <Badge variant="emerald" size="sm">
            Career Timeline
          </Badge>
          <h1 className={styles.pageTitle}>Work Experience & Impact</h1>
          <p className={styles.pageSubtitle}>
            A chronological track record of software engineering roles, team leadership,
            performance optimizations, and quantifiable business achievements.
          </p>

          {/* Quick Metrics Bar */}
          <div className={styles.metricsBar}>
            <div className={styles.metricCard}>
              <TrendingUp size={20} className={styles.metricIcon} />
              <div>
                <span className={styles.metricNum}>87%</span>
                <span className={styles.metricText}>ML Model F1 Score</span>
              </div>
            </div>

            <div className={styles.metricCard}>
              <Award size={20} className={styles.metricIcon} />
              <div>
                <span className={styles.metricNum}>+15%</span>
                <span className={styles.metricText}>App Satisfaction Lift</span>
              </div>
            </div>

            <div className={styles.metricCard}>
              <CheckCircle size={20} className={styles.metricIcon} />
              <div>
                <span className={styles.metricNum}>8.93</span>
                <span className={styles.metricText}>B.Tech CSE SGPA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timelineWrapper}>
            <Timeline items={experienceData} />
          </div>

          {/* Resume Prompt Box */}
          <div className={styles.resumePromptCard}>
            <div className={styles.promptContent}>
              <h3 className={styles.promptTitle}>Need a printable or ATS-formatted version?</h3>
              <p className={styles.promptText}>
                Access the official one-page resume optimized for applicant tracking systems,
                including concise bullet points and contact verification.
              </p>
            </div>
            <NavLink to="/resume">
              <Button variant="primary" size="md" icon={<FileText size={16} />}>
                View ATS Resume
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
