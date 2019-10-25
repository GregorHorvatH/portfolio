// Core
import React from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// styles
import styles from './Chat.module.scss';

// components
import Description from '../../components/Description';
import Login from '../../components/Login';

const DESCRIPTION = {
  title: 'Firebase Chat',
  details: 'React, React Hooks, Axios, ClassNames, ReactTooltip, React Loader, CSS Modules, Bootstrap'
};

const Chat = () => (
  <Container className={styles.chat} fluid>
    <Description title={DESCRIPTION.title} details={DESCRIPTION.details} />
    <Login />
  </Container>
);

export default connect()(Chat);
