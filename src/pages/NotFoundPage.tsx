import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className="container">
        <div className={styles.card}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.desc}>
            The link you followed doesn't exist or may have been moved. Return to the homepage to
            browse through projects, skills, and experience.
          </p>
          <div className={styles.actions}>
            <NavLink to="/">
              <Button variant="primary" size="lg" icon={<Home size={18} />}>
                Back to Homepage
              </Button>
            </NavLink>
            <NavLink to="/projects">
              <Button variant="secondary" size="lg" icon={<ArrowLeft size={18} />}>
                Explore Projects
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
