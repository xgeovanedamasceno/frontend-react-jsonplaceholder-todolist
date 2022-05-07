/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Home from '..';

describe('Home', () => {
  beforeEach(() => {
    render(<Home title="Text" />);
  });

  it('should render the header component', () => {
    const headerEl = screen.getByTestId('header');

    expect(headerEl).toBeInTheDocument();
  });
});
