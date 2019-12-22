import React from 'react';
import { createPortal } from 'react-dom';
import { FaWindowClose } from 'react-icons/fa';
import styles from './Modal.module.css';

export const Modal = ({ children }) => {
  return createPortal(
    <div className={styles.modal__background}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <FaWindowClose className={styles.modal__close} />
        </div>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};
