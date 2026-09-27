import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/features/ProjectCard';
import { Badge } from '../components/ui/Badge';
import styles from './ProjectsPage.module.css';

const categories = ['All', 'Full Stack', 'Frontend', 'Cloud & Systems', 'AI & Analytics'] as const;

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className={styles.projectsPage}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="container">
          <Badge variant="amber" size="sm">
            Engineering Portfolio
          </Badge>
          <h1 className={styles.pageTitle}>Projects & Technical Case Studies</h1>
          <p className={styles.pageSubtitle}>
            Selected production systems, performance overhauls, and open-source software built
            with high architectural rigor and measured business results.
          </p>

          {/* Search & Filter Bar */}
          <div className={styles.controlsBar}>
            {/* Category Filter Tabs */}
            <div className={styles.categoryTabs} role="tablist">
              {categories.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`${styles.tabBtn} ${
                    activeCategory === category ? styles.activeTab : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className={styles.searchWrapper}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Filter projects by technology or keyword"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={styles.clearSearchBtn}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <Layers size={36} />
              </div>
              <h3 className={styles.emptyTitle}>No projects match your filter</h3>
              <p className={styles.emptyText}>
                Try adjusting your search query or selecting a different category tab.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className={styles.resetBtn}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
