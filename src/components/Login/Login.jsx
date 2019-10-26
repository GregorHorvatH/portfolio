// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// forms
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import ResetPasswordForm from '../ResetPasswordForm';

// actions
import actions from '../../pages/Chat/store/actions';

// styles
import styles from './Login.module.scss';

const Form = ({ form, onSubmit, onChangeForm }) => {
  switch (form) {
    case 1:
      return <ResetPasswordForm onSubmit={onSubmit} onChangeForm={onChangeForm} />;
    case 2:
      return <SignUpForm onSubmit={onSubmit} onChangeForm={onChangeForm} />;
    case 0:
    default:
      return <SignInForm onSubmit={onSubmit} onChangeForm={onChangeForm} />;
  }
};

// classes like "justify-content-sm-center" or "form-control" are standard bootstrap classes
class Login extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    repeatPassword: '',
    form: 0, // 0 - sign in, 1 - reset, 2 - sign up
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submit');
  }

  _handleChangeForm = (form) => {
    this.setState({ form });
  }

  render() {
    const { form } = this.state;

    return (
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={8} lg={6} className={styles.logregForm}>
          <Form form={form}
            onSubmit={this._handleSubmit}
            onChangeForm={this._handleChangeForm}
          />
        </Col>
      </Row>
    );
  }
}

const mapState = ({ chat }) => ({
  chat
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapState, mapDispatch)(Login);


// https://bootsnipp.com/snippets/GavAo