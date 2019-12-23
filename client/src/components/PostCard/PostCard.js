import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';

export const PostCard = () => {
  return (
    <Link className={styles.post__card}>
      <div className={styles.post__card__sidebar}>
        <div className={styles.post__card__arrows}>
          <button className={styles.post__card__arrow}>
            <FaArrowUp />
          </button>
          <span className={styles.post__card__votes}>1.2k</span>
          <button className={styles.post__card__arrow}>
            <FaArrowDown />
          </button>
        </div>
      </div>
      <div className={styles.post__card__main}>
        <div className={styles.post__card__header}>
          <Link to="/r/Askreddit" className={styles.post__card__subreddit}>
            r/Askreddit
          </Link>
          <span className={styles.post__card__user}>
            Posted by{' '}
            <Link to="/user/Mango" className={styles.user__link}>
              u/Mango
            </Link>
          </span>
          <span className={styles.post__card__time}>10 hours ago</span>
        </div>
        <div className={styles.post__card__center}>
          <span className={styles.post__card__title}>
            Redditors, what is your earliest memory?
          </span>
        </div>
        <div className={styles.post__card__footer}>
          <div className={styles.post__card__comments}>
            <FaCommentAlt className={styles.comment__icon} />
            <span className={styles.comment__number}>12 comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
