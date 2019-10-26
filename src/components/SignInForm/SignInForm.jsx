// core
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

// styles
import styles from '../Login/Login.module.scss';

const SignInForm = ({ onSubmit, onChangeForm }) => (
  <Form className={styles.form} validated={false} noValidate onSubmit={onSubmit}>
    <h3> Sign in</h3>
    <div className={styles.socialLogin}>
      <Button className={classnames("btn", styles.facebookBtn, styles.socialBtn)} type="button">
        <span><FontAwesomeIcon icon={faFacebookF} /> Sign in with Facebook</span>
      </Button>
      <Button className={classnames("btn", styles.googleBtn, styles.socialBtn)} type="button">
        <span><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</span>
      </Button>
    </div>

    <p>OR</p>

    <Form.Control type="email" className="form-control" placeholder="Email address" required autoFocus />
    <Form.Control.Feedback type="invalid">Please enter email</Form.Control.Feedback>

    <Form.Control type="password" className={classnames("form-control", styles.password)} placeholder="Password" required />
    <Form.Control.Feedback type="invalid">Please enter password</Form.Control.Feedback>

    <Button className="btn btn-success btn-block" type="submit">
      <span><FontAwesomeIcon icon={faSignInAlt} /> Sign in</span>
    </Button>
    <span className={styles.link} onClick={() => onChangeForm(1)}>Forgot password?</span>

    <hr className={styles.delimiter} />

    <Button className="btn btn-primary btn-block" type="button" onClick={() => onChangeForm(2)}>
      <span><FontAwesomeIcon icon={faUserPlus} /> Sign up New Account</span>
    </Button>
  </Form>
);

export default SignInForm;
