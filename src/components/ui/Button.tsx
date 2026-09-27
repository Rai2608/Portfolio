import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  asLink = false,
  href,
  target,
  rel,
  ...props
}) => {
  const combinedClassName = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (asLink && href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};
