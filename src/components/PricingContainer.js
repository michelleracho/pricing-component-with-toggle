import React, { useState } from 'react';
import CardList from './CardList';
import Switch from './Switch';

const PricingContainer = () => {
  const [priceTier, setPriceTier] = useState('Annual');

  const toggleSwitch = () => {
    priceTier === 'Annual' ? setPriceTier('Monthly') : setPriceTier('Annual');
  };

  return (
    <section>
      <h1>Our Pricing</h1>

      <Switch tier={priceTier} toggleSwitch={toggleSwitch} />
      <CardList tier={priceTier} />
    </section>
  );
};

export default PricingContainer;
