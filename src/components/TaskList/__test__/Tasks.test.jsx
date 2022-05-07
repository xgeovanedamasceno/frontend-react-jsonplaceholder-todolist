/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import TaskList from '..';

describe('Tasks', () => {
  beforeEach(() => {
    render(<TaskList />);
  });

  it('should render an unordered list', () => {
    const ulEl = screen.getByRole('list');

    expect(ulEl).toBeInTheDocument();
  });
});
