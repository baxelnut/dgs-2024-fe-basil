import React, { useState } from 'react';
import WalletForm from '../components/WalletForm';
import WalletList from '../components/WalletList';
import '../App.css';

export default function Wallet() {
  const [activeButton, setActiveButton] = useState(null);

  const organizers = [
    'Group by',
    'Realisation',
    'Dates',
    'Types',
    'Samples',
    'Extended',
    'Sort',
  ];

  return (
    <div className="wallet">
      <div className="organizer">
        {organizers.map((organizer, index) => (
          <button
            key={index}
            className={`organizer-item ${
              activeButton === index ? 'active' : ''
            }`}
            onClick={() => setActiveButton(index)}
          >
            {organizer.toString()}
          </button>
        ))}
      </div>
      <WalletList />
    </div>
  );
}
