// core
import React from 'react';
import { Link } from 'react-router-dom';

// menu items
import menuItems from '../Menu/menu-items.json';

// styles
import './Portfolio.scss';

// TODO: move the styles from %PUBLIC% folder here and make dynamic item links
const Portfolio = () => (
  <div className="portfolio-div">
    <hr className="portfolio-delimiter" />
    <div className="portfolio">
      <div className="no-padding portfolio_container">

        {
          menuItems.map(item => (
            <div className="col-md-3 col-sm-6 fashion logo" key={item.name}>
              <Link to={`/${item.name}`} className="portfolio_item">
                <img
                  src={item.image || "./images/no-image.svg"}
                  alt={item.label}
                  className="img-responsive portfolio-thumbnail" />
                <div className="portfolio_item_hover">
                  <div className="portfolio-border clearfix">
                    <div className="item_info">
                      <span>{item.label}</span>
                      <em>{item.technologies}</em>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }

      </div>
    </div>
  </div>
);

export default Portfolio;
