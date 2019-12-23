import React from 'react';
import styles from './Home.module.css';
import PostCard from '../../components/PostCard';

export const Home = () => {
  return (
    <div className={styles.home}>
      <PostCard />
    </div>
  );
};
