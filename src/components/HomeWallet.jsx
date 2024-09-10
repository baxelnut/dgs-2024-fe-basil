import React from 'react';

export default function HomeWallet() {
  return (
    <div className='home-wallet'>
      <img
        src="src\assets\wallet.png"
      />
      <div className='home-wallet-content'>
        <a className="navbar-brand" href="#">
          Home Wallet
        </a>
        <p>Change default wallet</p>
      </div>
    </div>
  );
}
