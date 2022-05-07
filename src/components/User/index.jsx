import React from 'react';
import PropTypes from 'prop-types';

function User({ children }) {
  return (
    <section>{ children }</section>
  );
}

User.propTypes = {
  children: PropTypes.node.isRequired,
};

export default User;
