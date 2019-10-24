// core
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Description from '../../components/Description';
import Loader from '../../components/Loader';
import Currencies from '../../components/Currencies';
import CurrencyFilter from '../../components/CurrencyFilter';

// constants
const URLS = [
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4',
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
];
const DESCRIPTION = {
  title: 'Currency Exchange',
  details: 'React, React Hooks, Axios, ClassNames, ReactTooltip, React Loader, CSS Modules, Bootstrap'
};

const sortCurrencies = (values) => values.sort((a, b) => {
  const item1 = `${a.ccy}-${a.base_ccy}`;
  const item2 = `${b.ccy}-${b.base_ccy}`;

  if (item1 < item2) return -1;
  if (item1 > item2) return 1;
  return 0;
});

const deduplicateCurrencies = (values) => {
  const unique = [];

  values.forEach(value => {
    if (!unique.find(item => item.ccy === value.ccy && item.base_ccy === value.base_ccy)) {
      unique.push(value);
    }
  });

  return unique;
};

const Currency = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [filter, setFilter] = useState({
    ccy: '',
    baseCcy: ''
  });

  const loadCurrency = async () => {
    const fetches = [];

    setIsLoading(true);

    URLS.forEach(url => fetches.push(
      axios.get(url)
        .then(res => res.data)
        .catch(error => console.log(error))
    ));

    Promise.all(fetches)
      .then(values => values.reduce((res, arr) => [...res, ...arr]))
      .then(values => deduplicateCurrencies(values))
      .then(values => sortCurrencies(values))
      .then(values => setCurrencies(values))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const handleOnFilterChage = (newFilter) => {
    setFilter({
      ...filter,
      ...newFilter
    });
  };

  useEffect(() => {
    loadCurrency();
  }, []); // eslint-disable-line

  return (
    <div className="container-fluid app-container">
      <Description title={DESCRIPTION.title} details={DESCRIPTION.details} />
      <CurrencyFilter currencies={currencies}
        onChange={handleOnFilterChage}
        filter={filter}
        disabled={isLoading}
      />
      {
        isLoading
          ? <Loader />
          : <Currencies currencies={currencies} filter={filter} />
      }
    </div>
  );
};

export default Currency;
