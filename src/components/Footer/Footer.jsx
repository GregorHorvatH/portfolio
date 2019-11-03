// core
import React from 'react';
import { Link } from 'react-router-dom';

// TODO: move the styles from %PUBLIC% folder here
const Footer = () => (
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>Gergely <span>Horvath</span></h3>
      <p className="footer-links">
        <a href="/" className="footer-link">Home</a>
        <span className="footer-link-delimiter">·</span>
        <Link to="about" className="footer-link">About</Link>
        <span className="footer-link-delimiter">·</span>
        <Link to="contacts" className="footer-link">Contacts</Link>
      </p>

      <p className="footer-company-name">hg.inf.ua &copy; 2017-2019</p>
    </div>

    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker"></i>
        <p>
          <span>location</span>
          <a href="https://goo.gl/maps/D16iKJoWn6LcFsRWA">Kyiv, Ukraine</a>
        </p>
      </div>

      {/* <div>
        <i className="fa fa-phone"></i>
        <p><span>phone</span> <a href="tel:+380958033193">+38(095) 803-3193</a></p>
      </div> */}

      <div>
        <i className="fa fa-envelope"></i>
        <p>
          <span>mail</span>
          <a href="mailto:gergely.gorvath@gmail.com">gergely.gorvath@gmail.com</a>
        </p>
      </div>
    </div>

    <div className="footer-right">
      <div className="footer-company-about">

        <p>
          <span>technologies</span>
          JavaScript, &lt;HTML&gt;, CSS, Node JS, React JS, React Native,
          Redux, Webpack, GraphQL, SQL, jQuery, SASS, LESS
        </p>
      </div>

      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/gergely-horv%C3%A1th-a71850b6"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/GregorHorvatH/portfolio"><i className="fa fa-github"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100001910599983"><i className="fa fa-facebook"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
