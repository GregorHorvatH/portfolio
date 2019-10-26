// Core
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import styles from './Login.module.scss';

const Login = ({ currentForm, onSubmit, onChangeForm, forms, formsOrder, provider }) => {
  const CurrentForm = forms[currentForm];

  return (
    <Row className="justify-content-sm-center">
      <Col xs={12} sm={10} md={8} lg={6} className={styles.logregForm}>
        <CurrentForm
          formsOrder={formsOrder}
          provider={provider}
          onSubmit={onSubmit}
          onChangeForm={onChangeForm}
        />
      </Col>
    </Row>
  );
};

export default Login;


// https://bootsnipp.com/snippets/GavAo