import React, { useState } from 'react';
import CardList from './CardList';
import Switch from './Switch';

const PricingContainer = () => {
  const [priceTier, setPriceTier] = useState('Annually');

  const toggleSwitch = () => {
    priceTier === 'Annually'
      ? setPriceTier('Monthly')
      : setPriceTier('Annually');
  };

  return (
    <section>
      <h1>Our Pricing</h1>

      <Switch tier={priceTier} toggleSwitch={toggleSwitch} />
      <CardList />
    </section>
  );
};

export default PricingContainer;
