/* eslint-disable react/prop-types */
import React from 'react';
import TodoListStyle from './styled';

function TodoList({ children }) {
  return (
    <TodoListStyle>
      { children }
    </TodoListStyle>
  );
}

export default TodoList;
