// src/components/EventCard.js
import React from 'react';

const EventCard = ({ title, time }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{time}</p>
    </div>
  );
};

export default EventCard;