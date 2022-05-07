import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <div>{ children }</div>
  );
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Container;
