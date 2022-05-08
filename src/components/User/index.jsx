import React from 'react';
import PropTypes from 'prop-types';
import UserStyle from './styled';

function User({ children }) {
  return (
    <UserStyle>
      <section>{ children }</section>
    </UserStyle>
  );
}

User.propTypes = {
  children: PropTypes.node.isRequired,
};

export default User;
