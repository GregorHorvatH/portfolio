// core
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import cs from 'classnames';

// styles
import styles from './UserCard.module.scss';

// constants
const OPTION = ['name', 'email', 'birthday', 'address', 'phone', 'password'];

const getInfo = (option, user) => {
  const { name, email, dob, phone, login, location } = user;
  const { title, first, last } = name;
  const { password } = login;
  const { street } = location;

  switch (option) {
    case 'name':
      return `${title} ${first} ${last}`;
    case 'email':
      return email;
    case 'birthday':
      return dob.split(' ')[0];
    case 'address':
      return street;
    case 'phone':
      return phone;
    case 'password':
      return password;
    default:
      return `${title} ${first} ${last}`;
  }
};

const UserCard = ({ user }) => {
  const [active, setActive] = useState(0);

  const { picture } = user;
  const { medium } = picture;
  const info = getInfo(OPTION[active], user);

  return (
    <div className={cs("col-sm-12 col-md-6 col-lg-4", styles.cardWrapper)}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.line}></span>
          <div className={styles.photoWrapper}>
            <img src={medium} className={styles.photo} alt="user" />
          </div>
          <p className={styles.title}>{`My ${OPTION[active]} is`}</p>
          <p className={styles.info} data-tip={info}>{info}</p>
        </div>
        <div className={styles.details}>
          {
            OPTION.map((name, index) => (
              <div className={cs(styles.icon, styles[name], {
                [styles.active]: active === index
              })}
                key={name}
                onMouseOver={() => setActive(index)} />
            ))
          }
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
}

export default UserCard;
