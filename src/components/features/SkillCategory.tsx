import React from 'react';
import { Layout, Server, Cloud, Database, CheckCircle2 } from 'lucide-react';
import { SkillCategory as SkillCategoryType } from '../../data/types';
import styles from './SkillCategory.module.css';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layout': return <Layout size={20} />;
    case 'Server': return <Server size={20} />;
    case 'Cloud': return <Cloud size={20} />;
    case 'Database': return <Database size={20} />;
    default: return <CheckCircle2 size={20} />;
  }
};

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          {getCategoryIcon(category.icon)}
        </div>
        <h3 className={styles.categoryTitle}>{category.category}</h3>
      </div>

      <div className={styles.skillsGrid}>
        {category.skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillYears}>{skill.years}y exp</span>
            </div>

            <div className={styles.levelRow}>
              <span
                className={`${styles.levelTag} ${
                  skill.level === 'Expert'
                    ? styles.expert
                    : skill.level === 'Proficient'
                    ? styles.proficient
                    : styles.familiar
                }`}
              >
                {skill.level}
              </span>

              {/* Progress bar visual indicator */}
              <div className={styles.progressBarBg}>
                <div
                  className={`${styles.progressBarFill} ${
                    skill.level === 'Expert'
                      ? styles.fillExpert
                      : skill.level === 'Proficient'
                      ? styles.fillProficient
                      : styles.fillFamiliar
                  }`}
                  style={{
                    width: skill.level === 'Expert' ? '95%' : skill.level === 'Proficient' ? '75%' : '50%',
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
