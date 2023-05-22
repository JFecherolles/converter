import PropTypes from 'prop-types';

import './style.scss';

function Amount({ name, convertedValue }) {
  return (
    <div className="Amount">
        <p className="Amount-convertedValue">{convertedValue}</p>
        <p className="Amount-name">{name}</p>
    </div>
  );
}

Amount.propTypes = {
  name: PropTypes.string.isRequired,
  convertedValue: PropTypes.string.isRequired,
};

export default Amount;
