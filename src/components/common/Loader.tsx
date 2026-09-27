import React, { useEffect, useState } from 'react';
import { Lottie } from 'lottie-react';
import spaceBoyAnimation from '../../assets/space boy developer.json';
import styles from './Loader.module.css';

interface LoaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete, minDuration = 1800 }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(Math.round((elapsed / minDuration) * 100), 100);

      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onComplete) {
              onComplete();
            }
          }, 600); // matches CSS fadeOut duration
        }, 150);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 300);
  };

  return (
    <div
      className={`${styles.loaderOverlay} ${isFadingOut ? styles.fadeOut : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className={styles.glowBackdrop} />

      <div className={styles.loaderContent}>
        {/* Space Boy Developer Lottie Animation */}
        <div className={styles.animationWrapper}>
          <Lottie
            src={spaceBoyAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Brand / Logo */}
        <div className={styles.brandText}>
          <span className={styles.brandFirst}>PARAMITA</span>
          <span className={styles.brandSecond}>DAS</span>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <span className={styles.statusText}>
          {progress < 100 ? `Initializing Systems... ${progress}%` : 'Ready'}
        </span>

        {/* Quick Skip button */}
        <button
          onClick={handleSkip}
          className={styles.skipBtn}
          title="Skip loading animation"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
};
