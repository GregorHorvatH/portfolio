// core
import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Header from '../Header';
import Nav from '../Nav';

// pages
import Intro from '../Intro';
import Portfolio from '../../components/Portfolio';
import Weather from '../../pages/Weather';
import ContactList from '../../pages/ContactList';
import Currency from '../../pages/Currency';
import Chat from '../../pages/Chat';
import MachineLearning from '../../pages/MachineLearning';

import Contacts from '../../pages/Contacts';
import About from '../../pages/About';

const Switcher = () => (
  <Switch>
    <Route exact path="/">
      <Intro />
    </Route>
    <Route path="/weather">
      <Weather />
    </Route>
    <Route path="/contact-list">
      <ContactList />
    </Route>
    <Route path="/currency">
      <Currency />
    </Route>
    <Route path="/firebase-chat">
      <Chat />
    </Route>
    <Route path="/machine-learning">
      <MachineLearning />
    </Route>
    <Route path="/contacts">
      <Contacts />
    </Route>
    <Route path="/about">
      <About />
    </Route>
  </Switch>
);

const Menu = () => (
  <Fragment>
    <Header />
    <Nav />
    <Switcher />
    <Portfolio />
  </Fragment>
);

export default Menu;
