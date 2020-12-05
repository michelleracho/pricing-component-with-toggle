import React from 'react';
import Button from './Button';

import styles from '../styles/CardStyles.module.css';

const Card = ({ type, storage, users, limit, price }) => {
  return (
    <div className={styles.Card}>
      <h4 className={styles.Card__type}>{type}</h4>
      <h2 className={styles.Card__price}>
        <span>$</span>
        {price}
      </h2>
      <ul className={styles.Card__list}>
        <li className={styles.Card__item}>{storage} Storage</li>
        <li className={styles.Card__item}>{users} Users Allowed</li>
        <li className={styles.Card__item}>Send up to {limit}</li>
      </ul>
      <Button />
    </div>
  );
};

export default Card;
