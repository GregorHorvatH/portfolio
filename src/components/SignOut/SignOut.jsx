// core
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// styles
import styles from './SignOut.module.scss';

const SignOut = ({ user, onClick }) => (
  <Row className={styles.signOut}>
    <Col>
      <Button className="btn btn-light btn-block" onClick={onClick}>
        <span><FontAwesomeIcon icon={faSignOutAlt} />{` Sign Out (${user.displayName})`}</span>
      </Button>
    </Col>
  </Row>
);

export default SignOut;
