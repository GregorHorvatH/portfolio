// core
import React, { Fragment } from 'react';

// components
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';
import Menu from '../../components/Menu';
import ArrowUp from '../../components/ArrowUp';

// styles
import './Main.css';

// TODO: refactor this template code to React JS components
const Main = () => (
  <Fragment>
    <Preloader />
    <Menu />
    <Footer />
    <ArrowUp />
  </Fragment>
);

export default Main;
