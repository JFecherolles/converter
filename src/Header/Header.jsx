import PropTypes from 'prop-types';

import './style.scss';

function Header({ baseAmount, setBaseAmount, search, setSearch }) 
 {
    return (
      <header className="header">
        <h1 className="header-title">Converter</h1>
        <input
          type="number"
          className="header-amount"
          onChange={(event) => {
            setBaseAmount(Number(event.target.value));
          }}
          value={baseAmount} // 1 by default
        />
        <input
          className="currencies-search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value); // for search a currency by name 
          }}
        />
      </header>
    );
  }

Header.propTypes = {
    baseAmount: PropTypes.number.isRequired,
    setBaseAmount: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};

export default Header;
