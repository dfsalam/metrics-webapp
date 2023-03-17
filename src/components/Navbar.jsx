import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <span className="material-symbols-outlined">
      arrow_back_ios_new
    </span>
    <h1 className="nav-title">Polution Data</h1>
    <div>
      <span className="material-symbols-outlined">
        keyboard_voice
      </span>
      <span className="material-symbols-outlined">
        settings
      </span>
    </div>

  </nav>
);

export default Navbar;
