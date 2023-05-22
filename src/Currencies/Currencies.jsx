import React from "react";
import PropTypes from 'prop-types';

import './style.scss';

function Currencies({ currencies, selectCurrency }) {
  return (
    <div className="currencies">
     <div className="currencies-tittle"></div>
     <ul className="currencies-list">
     {/*  A map to find all the currencies in the table */}
        {currencies.map((currency) => (
            <li
                key={currency.name}
                className="currency"
                onClick={() => selectCurrency(currency)}
            >
                {currency.name}
            </li>
        ))}
        </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
    })
    ).isRequired,
  selectCurrency: PropTypes.func.isRequired,
};

export default Currencies;

