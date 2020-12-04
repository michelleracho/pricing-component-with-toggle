import React from 'react';
import styles from '../styles/FooterStyles.module.css';

const Footer = () => {
  return (
    <footer className={styles.attribution}>
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://github.com/michelleracho/pricing-component-with-toggle">
        Michelle Racho
      </a>
      .
    </footer>
  );
};

export default Footer;
