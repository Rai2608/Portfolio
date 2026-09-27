import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  Trophy
} from 'lucide-react';
import { educationData } from '../data/education';
import { achievementsData } from '../data/achievements';
import { Badge } from '../components/ui/Badge';
import styles from './EducationPage.module.css';

export const EducationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'achievements'>('education');

  return (
    <div className={styles.educationPage}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="container">
          <Badge variant="primary" size="sm">
            Academic Credentials
          </Badge>
          <h1 className={styles.pageTitle}>Education & Honors</h1>
          <p className={styles.pageSubtitle}>
            Formal engineering foundations at JIS College of Engineering, core computer science coursework,
            and academic recognition.
          </p>

          {/* Navigation Tabs */}
          <div className={styles.tabsWrapper} role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'education'}
              onClick={() => setActiveTab('education')}
              className={`${styles.tabBtn} ${activeTab === 'education' ? styles.activeTab : ''}`}
            >
              <GraduationCap size={18} />
              <span>Formal Education ({educationData.length})</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'achievements'}
              onClick={() => setActiveTab('achievements')}
              className={`${styles.tabBtn} ${activeTab === 'achievements' ? styles.activeTab : ''}`}
            >
              <Trophy size={18} />
              <span>Honors & Achievements ({achievementsData.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.contentSection}>
        <div className="container">
          {/* TAB 1: EDUCATION */}
          {activeTab === 'education' && (
            <div className={styles.educationList}>
              {educationData.map((edu) => (
                <div key={edu.id} className={styles.eduCard}>
                  <div className={styles.eduHeader}>
                    <div className={styles.eduTitleCol}>
                      <h3 className={styles.eduDegree}>{edu.degree}</h3>
                      <p className={styles.eduField}>{edu.field}</p>
                      <p className={styles.eduInstitution}>{edu.institution}</p>
                    </div>

                    <div className={styles.eduMetaCol}>
                      <span className={styles.eduYear}>
                        <Calendar size={14} /> {edu.graduationYear}
                      </span>
                      <span className={styles.eduLocation}>
                        <MapPin size={14} /> {edu.location}
                      </span>
                      {edu.gpa && (
                        <div className={styles.gpaBadge}>
                          <Badge variant="emerald" size="sm">
                            SGPA: {edu.gpa}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Honors List */}
                  {edu.honors && edu.honors.length > 0 && (
                    <div className={styles.honorsSection}>
                      <h4 className={styles.subHeading}>
                        <Award size={16} /> Academic Honors & Distinctions
                      </h4>
                      <ul className={styles.bulletList}>
                        {edu.honors.map((honor, idx) => (
                          <li key={idx} className={styles.bulletItem}>
                            {honor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Relevant Coursework */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className={styles.courseworkSection}>
                      <h4 className={styles.subHeading}>
                        <BookOpen size={16} /> Relevant Computer Science Coursework
                      </h4>
                      <div className={styles.coursePills}>
                        {edu.coursework.map((course, idx) => (
                          <span key={idx} className={styles.coursePill}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: ACHIEVEMENTS */}
          {activeTab === 'achievements' && (
            <div className={styles.achievementsGrid}>
              {achievementsData.map((ach) => (
                <div key={ach.id} className={styles.achCard}>
                  <div className={styles.achHeader}>
                    <div className={styles.achIcon}>
                      <Trophy size={20} />
                    </div>
                    <div>
                      <h3 className={styles.achTitle}>{ach.title}</h3>
                      <p className={styles.achOrg}>
                        {ach.organization} • {ach.date}
                      </p>
                    </div>
                  </div>
                  <p className={styles.achDesc}>{ach.description}</p>
                  {ach.impact && (
                    <div className={styles.achImpact}>
                      <Badge variant="amber" size="sm">
                        {ach.impact}
                      </Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
