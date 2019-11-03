// Core
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactLoader from 'react-loader-spinner';

// styles
import styles from './Login.module.scss';

// forms
import SignInForm from '../../components/SignInForm';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import SignUpForm from '../../components/SignUpForm';

const forms = [
  {
    name: 'signInForm',
    form: SignInForm,
  },
  {
    name: 'resetPasswordForm',
    form: ResetPasswordForm,
  },
  {
    name: 'signUpForm',
    form: SignUpForm,
  },
];

const Login = ({ isLoading, onSubmit }) => {
  const [currentForm, setCurrentForm] = useState(0);
  const CurrentForm = forms[currentForm].form;

  return (
    <Row className="justify-content-sm-center">
      <Col xs={12} sm={10} md={8} lg={6} className={styles.logregForm}>
        {
          isLoading
            ? <ReactLoader
              type="TailSpin"
              color="#ffbf00"
              height={100}
              width={100}
              className={styles.loader}
            />

            : <CurrentForm
              forms={forms}
              onChangeForm={(index) => setCurrentForm(index)}
              onSubmit={onSubmit}
            />
        }
      </Col>
    </Row>
  );
};

export default Login;

// https://bootsnipp.com/snippets/GavAo
