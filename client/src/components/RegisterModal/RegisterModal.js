import React, { useState } from 'react';
import styles from './RegisterModal.module.css';
import Modal from '../Modal';
import FormInput from '../FormInput';
import { FaUser, FaLock, FaUnlock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  validRegisterName,
  validRegisterEmail,
  validRegisterPassword
} from '../../utilities/validations';

export const RegisterModal = ({
  open,
  errors,
  toggleRegister,
  receiveErrors,
  clearError
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const update = fn => e => fn(e.target.value);

  const validate = fn => e => {
    const { valid, error } = fn(e.target.value);
    if (!valid) {
      receiveErrors(error);
    } else if (errors[Object.keys(error)[0]]) {
      clearError(Object.keys(error)[0]);
    }
  };

  return (
    <Modal open={open} close={toggleRegister}>
      <form className={styles.register__form}>
        <FormInput
          type="text"
          value={name}
          onChange={update(setName)}
          onBlur={validate(validRegisterName)}
          placeholder="Username"
          error={errors.name}
        >
          <FaUser />
        </FormInput>
        <FormInput
          type="text"
          onChange={update(setEmail)}
          value={email}
          placeholder="E-mail address"
          error={errors.email}
        >
          <MdEmail />
        </FormInput>
        <FormInput
          type="password"
          onChange={update(setPassword)}
          value={password}
          placeholder="Password"
          error={errors.password}
        >
          <FaLock />
        </FormInput>
        <FormInput
          type="password"
          onChange={update(setConfirmPassword)}
          value={confirmPassword}
          placeholder="Confirm Password"
          error={errors.confirmPassword}
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
