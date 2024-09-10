import React from 'react';
import Dropdown from './Dropdown';
import HomeWallet from './HomeWallet';

export default function Heading() {
  return (
    <div className="heading-container">
      <HomeWallet />
      <Dropdown />
    </div>
  );
}
