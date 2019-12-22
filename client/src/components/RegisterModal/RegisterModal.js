import React, { useState } from 'react';
import styles from './RegisterModal.module.css';
import Modal from '../Modal';
import FormInput from '../FormInput';
import { FaUser, FaLock, FaUnlock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const RegisterModal = ({ open, toggleRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const update = fn => e => fn(e.target.value);

  return (
    <Modal open={open} close={toggleRegister}>
      <form className={styles.register__form}>
        <FormInput
          type="text"
          onChange={update(setName)}
          value={name}
          placeholder="Username"
        >
          <FaUser />
        </FormInput>
        <FormInput
          type="text"
          onChange={update(setEmail)}
          value={email}
          placeholder="E-mail address"
        >
          <MdEmail />
        </FormInput>
        <FormInput
          type="password"
          onChange={update(setPassword)}
          value={password}
          placeholder="Password"
        >
          <FaLock />
        </FormInput>
        <FormInput
          type="password"
          onChange={update(setConfirmPassword)}
          value={confirmPassword}
          placeholder="Confirm Password"
        >
          <FaUnlock />
        </FormInput>
        <button className={styles.register__button}>Register</button>
      </form>
      <span className={styles.register__tip}>
        Already have an account?{' '}
        <button className={styles.register__login}>Log In</button>
      </span>
    </Modal>
  );
};
