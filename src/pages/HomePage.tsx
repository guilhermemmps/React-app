import React from 'react';
import MyButton from '../components/Button/Button';
import styles from './page.module.css'

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <MyButton />
    </div>
  );
};

export default HomePage;