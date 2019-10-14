import React from 'react';

// TODO: move the styles from %PUBLIC% folder here
const Header = () => (
  <header className="box-header">
    <div className="box-logo">
      <a href="/">
        <img src="images/logo.png" width="80" alt="Logo" />
      </a>
    </div>
    <span className="box-primary-nav-trigger" href="#" alt="home">
      <span className="box-menu-text">Menu</span>
      <span className="box-menu-icon"></span>
    </span>
  </header>
);

export default Header;
