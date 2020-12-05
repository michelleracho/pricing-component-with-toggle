import React, { useState } from 'react';
import CardList from './CardList';
import Switch from './Switch';

import styles from '../styles/PricingContainerStyles.module.css';

const PricingContainer = () => {
  const [priceTier, setPriceTier] = useState('Monthly');

  const toggleSwitch = () => {
    priceTier === 'Annual' ? setPriceTier('Monthly') : setPriceTier('Annual');
  };

  return (
    <section className={styles.PricingContainer}>
      <h1>Our Pricing</h1>

      <Switch tier={priceTier} toggleSwitch={toggleSwitch} />
      <CardList tier={priceTier} />
    </section>
  );
};

export default PricingContainer;
