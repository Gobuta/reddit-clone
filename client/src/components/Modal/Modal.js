import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { FaWindowClose } from 'react-icons/fa';
import styles from './Modal.module.css';

export const Modal = ({ open, close, children }) =>
  open
    ? createPortal(
        <div className={styles.modal__background}>
          <div className={styles.modal}>
            <div className={styles.modal__header}>
              <FaWindowClose className={styles.modal__close} onClick={close} />
            </div>
            <div className={styles.modal__content}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
