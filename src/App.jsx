import React, { useState } from 'react';
import './App.scss';
import Darkmode from './Darkmode/Darkmode';
import Header from './Header/Header';
import Toggler from './Toggler/Toggler';
import Currencies from './Currencies/Currencies';
import Amount from './Amount/Amount';

import currenciesList from './data/currenciesList';
// console.log (currenciesList);

const App = ({}) => { { currenciesList }
  const [open, setOpen] = useState(true);
  // baseAmount to 1 by default
  const [baseAmount, setBaseAmount] = useState(1);
  // indicate the selected currency
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: 'British Pound',
    rate: 0.89,
  });
  const [search, setSearch] = useState('');
  // calculate converted value just two numbers after comma
  const convertedValue = (baseAmount * selectedCurrency.rate).toFixed(2);
  // filter currenciesList by search with imported data from currenciesList
  const filteredCurrencies = currenciesList.filter(
    (currency) => currency.name.includes(search)
  );
  // console.log (filteredCurrencies);

  return (
    <div className="converter">
      <Darkmode 
      />
      <Header
        baseAmount={baseAmount}
        setBaseAmount={setBaseAmount}
        search={search}
        setSearch={setSearch}
      />
      <Toggler toggle={() => setOpen(!open)} 
        open={open} />
      {open && (
        <Currencies
        currencies={filteredCurrencies}
        selectCurrency={setSelectedCurrency}
        />
      )}
      <Amount 
        name={selectedCurrency.name} 
        convertedValue={convertedValue} 
      />
    </div>
  );
};

export default App;
