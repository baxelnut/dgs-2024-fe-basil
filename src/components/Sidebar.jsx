import React from 'react';
import '../App.css';

export default function Sidebar() {
  const walletItems = [
    { icon: '🏠', title: 'Home Wallet', subtitle: '$235,000' },
    { icon: '📈', title: 'Investent', subtitle: '$875,000' },
  ];

  const categoriesItems = [
    { icon: '🧾', title: 'Bills', subtitle: '$235,000' },
    { icon: '🎓', title: 'Education', subtitle: '$125,000' },
    { icon: '🛠', title: 'Utility', subtitle: '25 April' },
    { icon: '🛒', title: 'Shopping', subtitle: '25 April' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className='profile'>
        <h3>🔔</h3>
        <div className='profile-photo' > <img  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp" alt="" /> 
        </div>
        
        </div>
        <div className="sidebar-wallet">
          <div className="item-head">
            <h3>Wallet</h3>
            <div class="dashed-box">
              <span class="plus-sign">+</span>
            </div>
          </div>

          {walletItems.map((walletItems, index) => (
            <div key={index}>
              <div className="item">
                <h2>{walletItems.icon}</h2>
                <div className="item-content">
                  {walletItems.title}
                  <p>{walletItems.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sidebar-categories">
          <div className="item-head">
            <h3>Categories</h3>
            <div class="dashed-box">
              <span class="plus-sign">+</span>
            </div>
          </div>
          {categoriesItems.map((categoriesItems, index) => (
            <div key={index}>
              <div className="item">
                <h2>{categoriesItems.icon}</h2>
                <div className="item-content">
                  {categoriesItems.title}
                  <p>{categoriesItems.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
