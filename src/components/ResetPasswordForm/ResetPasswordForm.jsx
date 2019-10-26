// core
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from '../Login/Login.module.scss';

const ResetPasswordForm = ({ onSubmit, onChangeForm, formsOrder, provider }) => {
  const [email, setEmail] = useState('');

  return (
    <Form
      className={styles.form}
      validated={false}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(provider.resetPassword, { email });
      }}
    >
      <Form.Control type="email"
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="btn btn-primary btn-block">
        Reset Password
      </Button>
      <span className={styles.link} onClick={() => onChangeForm(formsOrder.signInForm)}>
        <FontAwesomeIcon icon={faAngleLeft} /> Back
      </span>
    </Form>
  );
};

export default ResetPasswordForm;
