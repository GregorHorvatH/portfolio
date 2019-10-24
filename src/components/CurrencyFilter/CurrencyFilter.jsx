// core
import React from 'react';

const deduplicate = (values = []) => {
  const set = new Set();
  values.forEach(ccy => set.add(ccy));

  return Array.from(set);
};

const CurrencyFilter = ({ currencies = [], onChange, filter, disabled }) => {
  const ccyList = currencies.map(item => item.ccy);
  const baseCcyList = deduplicate(currencies.map(item => item.base_ccy));

  return (
    <div className='row'>
      <div className="col-12">
        <form>
          <div className="form-row">

            <div className="form-group col-md-3">
              <label htmlFor="filter-ccy">CCY</label>
              <select id="filter-ccy"
                className="form-control"
                value={filter.ccy}
                onChange={(e) => onChange({ ccy: e.target.value })}
                disabled={disabled}
              >
                <option value="">All</option>
                {
                  ccyList.map((item, index) => (
                    <option key={`${index}-${item}`}>{item}</option>
                  ))
                }
              </select>
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="filter-base-ccy">Base CCY</label>
              <select id="filter-base-ccy"
                className="form-control"
                value={filter.baseCcy}
                onChange={(e) => onChange({ baseCcy: e.target.value })}
                disabled={disabled}
              >
                <option value="">All</option>
                {
                  baseCcyList.map((item, index) => (
                    <option key={`${index}-${item}`}>{item}</option>
                  ))
                }
              </select>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrencyFilter;
