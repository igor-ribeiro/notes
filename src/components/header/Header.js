import React from 'react';

import './Header.css';

const Header = ({ title }) => (
  <header className="Header">
    <h1 className="Header-Title">{title}</h1>
  </header>
);

export default Header;
