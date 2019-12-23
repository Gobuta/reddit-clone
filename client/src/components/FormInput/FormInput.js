import React from 'react';
import styles from './FormInput.module.css';

export const FormInput = ({
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  children
}) => (
  <div className={styles.form__input__container}>
    <div className={`${styles.form__input} ${error && styles.error__border}`}>
      <div className={styles.input__icon}>{children}</div>
      <input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
    {error && <span className={styles.form__input__error}>{error}</span>}
  </div>
);
