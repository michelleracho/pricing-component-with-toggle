import React from 'react';
import CardList from './CardList';
import Toggler from './Toggler';

const PricingContainer = () => {
  return (
    <section>
      <h1>Our Pricing</h1>

      <Toggler />
      <CardList />
    </section>
  );
};

export default PricingContainer;
