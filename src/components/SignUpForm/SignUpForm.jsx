// core
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from '../Login/Login.module.scss';

const SignUpForm = ({ onSubmit, onChangeForm }) => (
  <Form className={styles.form} validated={false} noValidate onSubmit={onSubmit}>
    <Form.Control type="text" className="form-control" placeholder="Full name" required autoFocus />
    <Form.Control type="email" className="form-control" placeholder="Email address" required />
    <Form.Control type="password" className="form-control" placeholder="Password" required />
    <Form.Control type="password" className="form-control" placeholder="Repeat Password" required />

    <Button className="btn btn-primary btn-block" type="submit">
      <span><FontAwesomeIcon icon={faUserPlus} /> Sign up</span>
    </Button>
    <span className={styles.link} onClick={() => onChangeForm(0)}>
      <FontAwesomeIcon icon={faAngleLeft} /> Back
    </span>
  </Form>
);

export default SignUpForm;
