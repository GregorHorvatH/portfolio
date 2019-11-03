// core
import React from 'react';

// styles
import styles from '../../pages/Chat/Chat.module.scss';

const InputMessage = () => (
  <div className="row">
    <div className="col">
      <form className={styles.msgForm}>
        <input className={styles.msgInput} type="text" autoFocus />
        <button className="btn btn-light" type="submit">Send message</button>
      </form>
    </div>
  </div>
);

export default InputMessage;
