// core
import React from 'react';
import { Link } from 'react-router-dom';

// menu items
import menuItems from '../Menu/menu-items.json';

// TODO: refactor this template code to React Router DOM
// https://www.npmjs.com/package/react-router-dom

//TODO: fix <a href="/">Home </a> to <Link ... />
const Nav = () => (
  <nav>
    <ul className="box-primary-nav">
      <li className="box-label">About me</li>
      <li>
        <a href="/">Home </a>
        <i className="ion-ios-circle-filled color" />
      </li>

      {
        menuItems.map(item => (
          <li key={item.name}>
            <Link to={`/${item.name}`}>{item.label}</Link>
            <i className="ion-ios-circle-filled color" />
          </li>
        ))
      }

      <li className="box-social">
        <a href="https://www.linkedin.com/in/gergely-horv%C3%A1th-a71850b6">
          <i className="ion-social-linkedin-outline"></i>
        </a>
      </li>
      <li className="box-social">
        <a href="https://github.com/GregorHorvatH">
          <i className="ion-social-github"></i>
        </a>
      </li>
      <li className="box-social">
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100001910599983" rel="noopener noreferrer">
          <i className="ion-social-facebook"></i>
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
