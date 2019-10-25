// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUserPlus, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// actions
import actions from '../../pages/Chat/store/actions';

// styles
import styles from './Login.module.scss';

// classes like "justify-content-sm-center" or "form-control" are standard bootstrap classes
class Login extends Component {
  _handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Row className="justify-content-sm-center">
          <Col xs={12} sm={10} md={8} lg={6} className={styles.logregForm}>
            {/* Sign In Form */}
            <Form className={styles.form} validated={false} noValidate>
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

              <Button className="btn btn-success btn-block" type="submit" onClick={this._handleSubmit}>
                <span><FontAwesomeIcon icon={faSignInAlt} /> Sign in</span>
              </Button>
              <span className={styles.link}>Forgot password?</span>

              <hr className={styles.delimiter} />

              <Button className="btn btn-primary btn-block" type="button">
                <span><FontAwesomeIcon icon={faUserPlus} /> Sign up New Account</span>
              </Button>
            </Form>
          </Col>
        </Row>

        <Row><hr /></Row>

        <Row className="justify-content-sm-center">
          <Col xs={12} sm={10} md={8} lg={6} className={styles.logregForm}>
            {/* Reset Password Form */}
            <Form className={styles.form} validated={false} noValidate>
              <Form.Control type="email" className="form-control" placeholder="Email address" required autoFocus />
              <Button className="btn btn-primary btn-block" type="submit">Reset Password</Button>
              <span className={styles.link}><FontAwesomeIcon icon={faAngleLeft} /> Back</span>
            </Form>
          </Col>
        </Row>

        <Row><hr /></Row>

        <Row className="justify-content-sm-center">
          <Col xs={12} sm={10} md={8} lg={6} className={styles.logregForm}>
            {/* Sign Up Form */}
            <Form className={styles.form} validated={false} noValidate>
              <Form.Control type="text" className="form-control" placeholder="Full name" required autoFocus />
              <Form.Control type="email" className="form-control" placeholder="Email address" required autoFocus />
              <Form.Control type="password" className="form-control" placeholder="Password" required autoFocus />
              <Form.Control type="password" className="form-control" placeholder="Repeat Password" required autoFocus />

              <Button className="btn btn-primary btn-block" type="submit">
                <span><FontAwesomeIcon icon={faUserPlus} /> Sign up</span>
              </Button>
              <span className={styles.link}><FontAwesomeIcon icon={faAngleLeft} /> Back</span>
            </Form>
          </Col>
        </Row>
      </>
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