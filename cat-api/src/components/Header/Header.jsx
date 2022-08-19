import React from 'react';
import { FaCat } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.appTitle}>
        <FaCat className={styles.appIcon} />
        <h1 className={styles.appName}>Cats</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
