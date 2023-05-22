import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Toggler = ({ open, toggle }) => {
  
  const cssClassNames = open ? 'toggler toggler--open' : 'toggler';
  
  const handleClick = () => {
    toggle();
  }

  return (
    <button 
    className={cssClassNames} 
    type="button" 
    onClick={handleClick}>
    </button>
  );
};

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggler;
