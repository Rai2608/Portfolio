import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Project } from '../../data/types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      {/* Visual Header / Cover Image */}
      {project.imageUrl && (
        <div className={styles.imageContainer}>
          <img
            src={project.imageUrl}
            alt={`${project.title} Preview`}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.categoryBadge}>
            <Badge variant="primary" size="sm">
              {project.category}
            </Badge>
          </div>
          {project.featured && (
            <div className={styles.featuredBadge}>
              <Badge variant="amber" size="sm">
                Featured
              </Badge>
            </div>
          )}
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
        </div>

        {/* Quantified Metrics Highlight */}
        <div className={styles.metricsGrid}>
          {project.metrics.map((metric, idx) => (
            <div key={idx} className={styles.metricItem}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className={styles.techStack}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techPill}>
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Architecture & Problem / Solution Details */}
        {expanded && (
          <div className={styles.expandedSection}>
            <div className={styles.detailBlock}>
              <h4 className={styles.detailTitle}>
                <Layers size={15} /> The Challenge & Problem
              </h4>
              <p className={styles.detailText}>{project.problem}</p>
            </div>

            <div className={styles.detailBlock}>
              <h4 className={styles.detailTitle}>
                <CheckCircle size={15} /> Engineered Solution
              </h4>
              <p className={styles.detailText}>{project.solution}</p>
            </div>

            <div className={styles.detailBlock}>
              <h4 className={styles.detailTitle}>Quantified Impact & Results</h4>
              <p className={styles.detailText}>{project.impact}</p>
            </div>
          </div>
        )}

        {/* Card Footer Actions */}
        <div className={styles.footer}>
          <div className={styles.links}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.actionBtn}
                title="Open Live Application"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.actionBtn}
                title="View Source Code on GitHub"
              >
                <GithubIcon size={16} />
                <span>Source</span>
              </a>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className={styles.toggleBtn}
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Less Details' : 'Deep Dive'}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
};
