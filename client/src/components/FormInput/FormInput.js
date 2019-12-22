import React from 'react';
import styles from './FormInput.module.css';

export const FormInput = ({ type, placeholder, onChange, value, children }) => (
  <div className={styles.form__input}>
    <div className={styles.input__icon}>{children}</div>
    <input
      type={type}
      onChange={onChange}
      value={value}
      className={styles.input}
      placeholder={placeholder}
    />
  </div>
);
