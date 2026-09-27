import React, { useState, useMemo } from 'react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/skills';
import { SkillCategory } from '../components/features/SkillCategory';
import { Badge } from '../components/ui/Badge';
import styles from './SkillsPage.module.css';

export const SkillsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'All' | 'Expert' | 'Proficient' | 'Familiar'>('All');

  const filteredCategories = useMemo(() => {
    return skillsData
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) => {
          const matchesQuery =
            searchQuery.trim() === '' ||
            skill.name.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesLevel =
            levelFilter === 'All' || skill.level === levelFilter;
          return matchesQuery && matchesLevel;
        });

        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [searchQuery, levelFilter]);

  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <div className={styles.skillsPage}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="container">
          <Badge variant="purple" size="sm">
            Technical Proficiency
          </Badge>
          <h1 className={styles.pageTitle}>Skills & Technology Inventory</h1>
          <p className={styles.pageSubtitle}>
            A comprehensive breakdown of languages, frameworks, cloud services, and software
            engineering disciplines practiced across production environments.
          </p>

          {/* Search & Level Filters */}
          <div className={styles.controlsBar}>
            <div className={styles.levelButtons}>
              {(['All', 'Expert', 'Proficient', 'Familiar'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`${styles.filterBtn} ${
                    levelFilter === lvl ? styles.activeFilterBtn : ''
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className={styles.searchWrapper}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Filter skills (e.g. React, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Filter skills by keyword"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={styles.clearBtn}
                  aria-label="Clear skill search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className={styles.categoriesSection}>
        <div className="container">
          {filteredCategories.length > 0 ? (
            <div className={styles.categoriesGrid}>
              {filteredCategories.map((category) => (
                <SkillCategory key={category.category} category={category} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>
                No skills matching "{searchQuery}" with level "{levelFilter}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setLevelFilter('All');
                }}
                className={styles.resetBtn}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Engineering Standards Highlights */}
      <section className={styles.standardsSection}>
        <div className="container">
          <div className={styles.standardsCard}>
            <div className={styles.standardsHeader}>
              <Sparkles size={20} className={styles.sparkleIcon} />
              <h3 className={styles.standardsTitle}>Engineering Principles in Action</h3>
            </div>
            <div className={styles.standardsGrid}>
              <div className={styles.standardItem}>
                <CheckCircle2 size={16} className={styles.standardIcon} />
                <span>Zero-Tolerance for Untyped `any` in TypeScript</span>
              </div>
              <div className={styles.standardItem}>
                <CheckCircle2 size={16} className={styles.standardIcon} />
                <span>Automated WCAG 2.1 AA Accessibility Testing in CI</span>
              </div>
              <div className={styles.standardItem}>
                <CheckCircle2 size={16} className={styles.standardIcon} />
                <span>Continuous Lighthouse Core Web Vitals Budgeting</span>
              </div>
              <div className={styles.standardItem}>
                <CheckCircle2 size={16} className={styles.standardIcon} />
                <span>Zero-Runtime CSS Tokens for Uncompromised Bundle Sizes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
