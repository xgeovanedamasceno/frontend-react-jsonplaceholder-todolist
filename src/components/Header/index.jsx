import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header data-testid="header">{ children }</header>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
