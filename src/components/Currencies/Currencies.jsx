// core
import React from 'react';

// styles
import styles from './Currencies.module.scss'

const Currencies = ({ currencies = [], filter }) => (
  <div className="row">
    <div className="col-12">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" className={styles.value}>CCY</th>
            <th scope="col" className={styles.value}>Base CCY</th>
            <th scope="col" className={styles.value}>Buy</th>
            <th scope="col" className={styles.value}>Sale</th>
          </tr>
        </thead>
        <tbody>
          {
            currencies.filter(item => (filter.ccy === '' || item.ccy === filter.ccy)
              && (filter.baseCcy === '' || item.base_ccy === filter.baseCcy))
              .map((item) => (
                <tr key={`${item.ccy}-${item.base_ccy}`}>
                  <td className={styles.value}>{item.ccy}</td>
                  <td className={styles.value}>{item.base_ccy}</td>
                  <td className={styles.value}>{item.buy}</td>
                  <td className={styles.value}>{item.sale}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  </div>
);

export default Currencies;
