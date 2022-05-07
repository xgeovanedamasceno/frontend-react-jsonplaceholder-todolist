import React from 'react';
import PropTypes from 'prop-types';

function Input({ placeholderText }) {
  return (
    <form>
      <input placeholder={placeholderText} />
    </form>
  );
}

Input.propTypes = {
  placeholderText: PropTypes.string.isRequired,
};

export default Input;
