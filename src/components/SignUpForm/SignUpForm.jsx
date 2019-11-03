// core
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from '../Login/Login.module.scss';

// helpers
import helpers from '../../helpers';
const { getFormIndex } = helpers;

const SignUpForm = ({ onChangeForm, forms, onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <Form
      className={styles.form}
      validated={false}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit('createEmailAndPassword');
      }}
    >
      <Form.Control
        type="text"
        className="form-control"
        placeholder="Full name"
        required
        autoFocus
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Form.Control
        type="email"
        className="form-control"
        placeholder="Email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Control
        type="password"
        className="form-control"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Form.Control
        type="password"
        className="form-control"
        placeholder="Repeat Password"
        required
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />

      <Button className="btn btn-primary btn-block" type="submit">
        <span><FontAwesomeIcon icon={faUserPlus} /> Sign up</span>
      </Button>
      <span className={styles.link} onClick={() => onChangeForm(getFormIndex(forms, 'signInForm'))}>
        <FontAwesomeIcon icon={faAngleLeft} /> Back
      </span>
    </Form>
  );
};

export default SignUpForm;
