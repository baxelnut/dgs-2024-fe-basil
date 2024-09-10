import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Finance');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src="/logo.svg" alt="Logo" />
        <a className="navbar-brand" href="#">
          Budget
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="🔍 Search"
                aria-label="Search"
              />
            </form>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 'Overview' ? 'active' : ''
                }`}
                href="#"
                onClick={() => handleClick('Overview')}
              >
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 'Finance' ? 'active' : ''
                }`}
                href="#"
                onClick={() => handleClick('Finance')}
              >
                Finance
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 'Calendar' ? 'active' : ''
                }`}
                href="#"
                onClick={() => handleClick('Calendar')}
              >
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'Event' ? 'active' : ''}`}
                href="#"
                onClick={() => handleClick('Event')}
              >
                Event
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
