// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={8} lg={6} className={styles.logregForm}>
          <form className={styles.form}>
            <h3> Sign in</h3>
            <div className={styles.socialLogin}>
              <button className={classnames("btn", styles.facebookBtn, styles.socialBtn)} type="button">
                <span><FontAwesomeIcon icon={faFacebookF} /> Sign in with Facebook</span>
              </button>
              <button className={classnames("btn", styles.googleBtn, styles.socialBtn)} type="button">
                <span><FontAwesomeIcon icon={faGooglePlusG} /> Sign in with Google+</span>
              </button>
            </div>

            <p>OR</p>

            <input type="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
            <input type="password" className="form-control" placeholder="Password" required="" />

            <button className="btn btn-success btn-block" type="submit" onClick={this._handleSubmit}>
              <span><FontAwesomeIcon icon={faSignInAlt} /> Sign in</span>
            </button>
            <span className={styles.forgotBtn}>Forgot password?</span>

            <hr className={styles.delimiter} />

            <button className="btn btn-primary btn-block" type="button">
              <span><FontAwesomeIcon icon={faUserPlus} /> Sign up New Account</span>
            </button>
          </form>
        </Col>

        {/* <form action="/reset/password/" className="form-reset">
          <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
          <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
          <a><i className="fas fa-angle-left"></i> Back</a>
        </form> */}

        {/* <form action="/signup/" className="form-signup">
          <div className="social-login">
            <button className="btn facebook-btn social-btn" type="button">
              <span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span>
            </button>
          </div>
          <div className="social-login">
            <button className="btn google-btn social-btn" type="button">
              <span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span>
            </button>
          </div>
    
          <p>OR</p>
    
          <input type="text" id="user-name" className="form-control" placeholder="Full name" required="" autoFocus="" />
          <input type="email" id="user-email" className="form-control" placeholder="Email address" required autoFocus="" />
          <input type="password" id="user-pass" className="form-control" placeholder="Password" required autoFocus="" />
          <input type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required autoFocus="" />
    
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus"></i> Sign Up
            </button>
          <a><i className="fas fa-angle-left"></i> Back</a>
        </form> */}
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
