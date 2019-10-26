// core
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from '../Login/Login.module.scss';

const ResetPasswordForm = ({ onSubmit, onChangeForm }) => (
  <Form className={styles.form} validated={false} noValidate onSubmit={onSubmit}>
    <Form.Control type="email"
      className="form-control"
      placeholder="Email address"
      required
      autoFocus
    />
    <Button type="submit" className="btn btn-primary btn-block">
      Reset Password
    </Button>
    <span className={styles.link} onClick={() => onChangeForm(0)}>
      <FontAwesomeIcon icon={faAngleLeft} /> Back
    </span>
  </Form>
);

export default ResetPasswordForm;
