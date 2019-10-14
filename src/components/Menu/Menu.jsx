// core
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from '../Header';
import Nav from '../Nav';

// pages
import Intro from '../Intro';
import Portfolio from '../../components/Portfolio';
import Weather from '../../pages/Weather';
import Contacts from '../../pages/Contacts';
import MachineLearning from '../../pages/MachineLearning';

const Switcher = () => (
  <Switch>
    <Route exact path="/">
      <Intro />
    </Route>
    <Route path="/weather">
      <Weather />
    </Route>
    <Route path="/contacts">
      <Contacts />
    </Route>
    <Route path="/machine-learning">
      <MachineLearning />
    </Route>
  </Switch>
);

const Menu = () => (
  <Router>
    <Header />
    <Nav />
    <Switcher />
    <Portfolio />
  </Router>
);

export default Menu;
