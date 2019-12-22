import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <Link to="/" className={styles.header__logo}>
          Tide
        </Link>
      </div>
      <div className={styles.header__right}>
        <button className={styles.header__button}>Log In</button>
        <button className={styles.header__button}>Register</button>
      </div>
    </div>
  );
};
