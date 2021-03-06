// core
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import actions from '../../pages/Chat/store/actions';

// styles
import styles from '../Login/Login.module.scss';

// helpers
import helpers from '../../helpers';
const { getFormIndex } = helpers;

const SignInForm = ({ onChangeForm, forms, actions, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form
      className={styles.form}
      validated={false}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit('emailAndPassword');
      }}
    >
      <h3> Sign in</h3>
      <div className={styles.socialLogin}>
        <Button
          className={classnames("btn", styles.facebookBtn, styles.socialBtn)}
          type="button"
          onClick={() => onSubmit('facebook')}
        >
          <span><FontAwesomeIcon icon={faFacebookF} /> Sign in with Facebook</span>
        </Button>
        <Button
          className={classnames("btn", styles.googleBtn, styles.socialBtn)}
          type="button"
          onClick={() => onSubmit('google')}
        >
          <span><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</span>
        </Button>
      </div>

      <p>OR</p>

      <Form.Control
        type="email"
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Control.Feedback type="invalid">Please enter email</Form.Control.Feedback>

      <Form.Control
        type="password"
        className={classnames("form-control", styles.password)}
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Form.Control.Feedback type="invalid">Please enter password</Form.Control.Feedback>

      <Button className="btn btn-success btn-block" type="submit">
        <span><FontAwesomeIcon icon={faSignInAlt} /> Sign in</span>
      </Button>
      <span
        className={styles.link}
        onClick={() => onChangeForm(getFormIndex(forms, 'resetPasswordForm'))}
      >
        Forgot password?
      </span>

      <hr className={styles.delimiter} />

      <Button
        className="btn btn-primary btn-block"
        type="button"
        onClick={() => onChangeForm(getFormIndex(forms, 'signUpForm'))}
      >
        <span><FontAwesomeIcon icon={faUserPlus} /> Sign up New Account</span>
      </Button>
    </Form>
  );
};

const mapState = ({ chat }) => ({
  chat,
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapState, mapDispatch)(SignInForm);
