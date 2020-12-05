import React from 'react';
import Button from './Button';

const Card = ({ type, storage, users, limit, price }) => {
  return (
    <div>
      <h4>{type}</h4>
      <h2>${price}</h2>
      <ul>
        <li>{storage} Storage</li>
        <li>{users} Users Allowed</li>
        <li>Send up to {limit}</li>
      </ul>
      <Button />
    </div>
  );
};

export default Card;
