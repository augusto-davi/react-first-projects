import React from 'react';
import { FaCat } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.appTitle}>
        <FaCat className={styles.appIcon} />
        <h1 className={styles.appName}>getcats</h1>
      </div>
      <div>
        Photos from:{' '}
        <a href='https://cataas.com/#/' target='_blank'>
          CATAAS
        </a>
      </div>
    </header>
  );
}

export default Header;
