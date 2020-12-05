import React from 'react';

import { planBundle, annualPrice, monthlyPrice } from '../helpers/pricing';
import Card from './Card';

import styles from '../styles/CardListStyles.module.css';

const CardList = ({ tier }) => {
  let price = tier === 'Annual' ? annualPrice : monthlyPrice;

  const cards = planBundle.map((card, index) => (
    <li key={card.type} className={styles.CardList__item}>
      <Card
        key={card.type}
        type={card.type}
        storage={card.storage}
        users={card.users}
        limit={card.limit}
        price={price[index].type === card.type && price[index].price}
      />
    </li>
  ));

  return <ul className={styles.CardList}>{cards}</ul>;
};

export default CardList;
