// Core
import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';

// styles
import styles from './Chat.module.scss';

// components
import Description from '../../components/Description';
import Messages from '../../components/Messages';
import InputMessage from '../../components/InputMessage';
import Login from '../../components/Login';
import SignOut from '../../components/SignOut';

// actions
import actions from './store/actions';

// config
import firebaseConfig from '../../../secret/firebaseConfig';

const DESCRIPTION = {
  title: 'Firebase Chat',
  details: 'React, React Hooks, Firebase, ClassNames, React Loader, CSS Modules, Bootstrap',
};

class Chat extends Component {
  componentDidMount() {
    const { chatLoaderStart } = this.props.actions;

    chatLoaderStart();
    this._initializeFirebase();
  }

  componentWillUnmount() {
    this._disableFirebase();
  }

  _initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);

    this._initializeFirebaseAuth();
  }

  _initializeFirebaseAuth = () => {
    this.firebaseAuth = firebase.auth();

    this.unSubscribeAuth = this.firebaseAuth
      .onAuthStateChanged((user) => {
        const { chatLoginSuccess, chatLoaderFinish } = this.props.actions;

        if (user) {
          console.log(user.toJSON());
          chatLoginSuccess(user.toJSON());
        }

        chatLoaderFinish();
      });
  }

  _disableFirebase = () => {
    const { authorized } = this.props.chat;

    if (this.unSubscribeAuth) {
      this.unSubscribeAuth();
    }
    if (authorized && this.unSubscribeDB) {
      this.unSubscribeDB();
    }
  }

  _handleSignOut = () => {
    const { chatLogOut } = this.props.actions;

    chatLogOut();
    this.firebaseAuth.signOut();
  }

  _handleSubmit = (provider, data) => {
    const { chatLoaderStart, chatLoaderFinish } = this.props.actions;
    console.log('log in with:', provider);

    chatLoaderStart();

    switch (provider) {
      case 'google':
        this._handleSignWithGoogle(chatLoaderFinish);
        break;
      case 'facebook':
        this._handleSignWithFacebook(chatLoaderFinish);
        break;
      case 'emailAndPassword':
        this._handleSignWithEmail(data, chatLoaderFinish);
        break;
      default:
        chatLoaderFinish();
        break;
    }
  }

  // providers
  _handleSignWithGoogle = (callback) => {
    this.firebaseAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(error => {
        console.log(error);
        callback();
      });
  }

  _handleSignWithFacebook = (callback) => {
    this.firebaseAuth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .catch(error => {
        console.log(error);
        callback();
      });
  }

  _handleSignWithEmail = (data = {}, callback) => {
    const { email = '', password = '' } = data;

    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch(error => console.log('error:', error))
      .finally(callback);
  }

  // _handleSignWithGitHub = () => {
  //   this.firebaseAuth
  //     .signInWithPopup(new firebase.auth.GithubAuthProvider())
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({
  //         isLoading: false
  //       });
  //     });
  // }

  render() {
    const { authorized, isLoading, user } = this.props.chat;

    return (
      <Container className={styles.chat} fluid>
        <Description
          title={DESCRIPTION.title}
          details={DESCRIPTION.details}
        />
        {
          authorized
            ? <Fragment>
              <SignOut user={user} onClick={this._handleSignOut} />
              <Messages />
              <InputMessage />
            </Fragment>
            : <Login
              isLoading={isLoading}
              onSubmit={this._handleSubmit}
            />
        }
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
