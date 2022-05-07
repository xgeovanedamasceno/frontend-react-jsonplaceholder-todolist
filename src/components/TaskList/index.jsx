import React from 'react';
import PropTypes from 'prop-types';

function TaskList({ children }) {
  return (
    <ul>{ children }</ul>
  );
}

TaskList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskList;
