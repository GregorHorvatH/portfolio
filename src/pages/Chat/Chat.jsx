// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { bindActionCreators } from 'redux';

// styles
import styles from './Chat.module.scss';

// components
import Description from '../../components/Description';
import Messages from '../../components/Messages';
// import Login from '../../components/Login';

// forms
// import SignInForm from '../../components/SignInForm';
// import ResetPasswordForm from '../../components/ResetPasswordForm';
// import SignUpForm from '../../components/SignUpForm';

// actions
import actions from './store/actions';

// const forms = [
//   SignInForm,
//   ResetPasswordForm,
//   SignUpForm,
// ];

// const formsOrder = {
//   signInForm: 0,
//   resetPasswordForm: 1,
//   signUpForm: 2,
// };

// const provider = {
//   emailAndPassword: 0,
//   createEmailAndPassword: 1,
//   resetPassword: 2,
//   facebook: 3,
//   google: 4,
// };

const DESCRIPTION = {
  title: 'Firebase Chat',
  details: 'React, React Hooks, Axios, ClassNames, ReactTooltip, React Loader, CSS Modules, Bootstrap'
};

class Chat extends Component {
  state = {
    currentForm: 0,
  }

  componentDidMount() {
    this.input.scrollIntoView(false);
  }

  _handleSetForm = (currentForm) => this.setState({ currentForm })

  _handleSubmit = (provider, data) => {
    // console.log('provider:', provider);
    console.log('data:', data);
  }

  render() {
    // const { currentForm } = this.state;

    return (
      <Container className={styles.chat} fluid>
        <Description
          title={DESCRIPTION.title}
          details={DESCRIPTION.details}
        />
        {/* <Login
          forms={forms}
          currentForm={currentForm}
          formsOrder={formsOrder}
          provider={provider}
          onChangeForm={this._handleSetForm}
          onSubmit={this._handleSubmit}
        /> */}
        <Messages />
        <div className="row">
          <div className="col">
            <form className={styles.msgForm}>
              <input className={styles.msgInput} type="text" autoFocus ref={ref => this.input = ref} />
              <button className="btn btn-light" type="submit">Send message</button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
};

const mapState = ({ chat }) => ({
  chat,
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapState, mapDispatch)(Chat);
