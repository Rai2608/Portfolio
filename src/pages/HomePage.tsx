import React from 'react';
import { Hero } from '../components/sections/Hero';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
    </div>
  );
};
