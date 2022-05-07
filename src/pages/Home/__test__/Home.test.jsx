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

  it('should render the title component', () => {
    const titleEl = screen.getByRole('heading', { level: 1 });

    expect(titleEl).toBeInTheDocument();
  });

  it('should render the main component', () => {
    const mainEl = screen.getByRole('main');

    expect(mainEl).toBeInTheDocument();
  });
});
