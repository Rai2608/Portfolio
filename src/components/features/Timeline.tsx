import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Experience } from '../../data/types';
import { Badge } from '../ui/Badge';
import styles from './Timeline.module.css';

interface TimelineProps {
  items: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.line}></div>

      {items.map((item) => (
        <div key={item.id} className={styles.timelineItem}>
          {/* Node Icon */}
          <div className={`${styles.node} ${item.isCurrent ? styles.activeNode : ''}`}>
            <Briefcase size={16} />
          </div>

          {/* Item Content Card */}
          <div className={styles.contentCard}>
            <div className={styles.header}>
              <div>
                <div className={styles.titleRow}>
                  <h3 className={styles.title}>{item.title}</h3>
                  {item.isCurrent && (
                    <Badge variant="emerald" size="sm">
                      Current Role
                    </Badge>
                  )}
                </div>
                <div className={styles.companyInfo}>
                  <span className={styles.company}>{item.company}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.location}>
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>
              </div>

              <div className={styles.dateBadge}>
                <Calendar size={13} />
                <span>
                  {item.startDate} – {item.endDate}
                </span>
              </div>
            </div>

            <p className={styles.summary}>{item.roleSummary}</p>

            {/* Quantified Achievements */}
            <div className={styles.achievements}>
              <h4 className={styles.achievementsHeading}>Key Impact & Achievements:</h4>
              <ul className={styles.achievementList}>
                {item.achievements.map((ach, idx) => (
                  <li key={idx} className={styles.achievementItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className={styles.techWrapper}>
              <span className={styles.techLabel}>Technologies:</span>
              <div className={styles.techList}>
                {item.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
