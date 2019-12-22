import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import Modal from '../Modal';
import FormInput from '../FormInput';
import { FaUser, FaLock } from 'react-icons/fa';

export const LoginModal = ({ open, toggleLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const update = fn => e => fn(e.target.value);

  return (
    <Modal open={open} close={toggleLogin}>
      <form className={styles.login__form}>
        <FormInput
          type="text"
          value={name}
          onChange={update(setName)}
          placeholder="Username"
        >
          <FaUser />
        </FormInput>
        <FormInput
          type="password"
          value={password}
          onChange={update(setPassword)}
          placeholder="Password"
        >
          <FaLock />
        </FormInput>
        <button className={styles.login__button}>Log In</button>
      </form>
      <span className={styles.login__tip}>
        New to Tide?{' '}
        <button className={styles.login__register}>Register</button>
      </span>
    </Modal>
  );
};
