import React from 'react';
import PropTypes from 'prop-types';

function Button({ label }) {
  return (
    <button type="button">{ label }</button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
