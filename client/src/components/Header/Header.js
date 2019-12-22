import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = ({ toggleRegister, toggleLogin }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <Link to="/" className={styles.header__logo}>
          Tide
        </Link>
      </div>
      <div className={styles.header__right}>
        <button className={styles.header__button} onClick={toggleLogin}>
          Log In
        </button>
        <button className={styles.header__button} onClick={toggleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};
