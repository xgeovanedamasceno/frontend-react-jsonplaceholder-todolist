import React from 'react';
import PropTypes from 'prop-types';

function Main({ children }) {
  return (
    <main>{ children }</main>
  );
}

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Main;
