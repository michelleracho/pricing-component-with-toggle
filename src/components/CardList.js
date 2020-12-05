import React from 'react';

import { planBundle, annualPrice, monthlyPrice } from '../helpers/pricing2';
import Card from './Card';

const CardList = ({ tier }) => {
  let price = tier === 'Annual' ? annualPrice : monthlyPrice;

  const cards = planBundle.map((card, index) => (
    <Card
      key={card.type}
      type={card.type}
      storage={card.storage}
      users={card.users}
      limit={card.limit}
      price={price[index].type === card.type && price[index].price}
    />
  ));

  return <div>{cards}</div>;
};

export default CardList;
