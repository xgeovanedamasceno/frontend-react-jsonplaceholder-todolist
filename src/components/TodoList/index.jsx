import React from 'react';
import PropTypes from 'prop-types';

function TodoList({ children }) {
  return (
    <ul>{ children }</ul>
  );
}

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoList;
