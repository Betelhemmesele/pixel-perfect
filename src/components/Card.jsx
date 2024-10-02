// src/components/Card.js
import React from 'react';

const Card = ({ title, rating, price, cuisine }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-64">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{rating} - {price} - {cuisine}</p>
    </div>
  );
};

export default Card;