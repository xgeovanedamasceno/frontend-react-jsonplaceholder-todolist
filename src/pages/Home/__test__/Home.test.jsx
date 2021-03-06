/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Home from '..';

describe('Home', () => {
  beforeEach(() => {
    render(<Home pageName="Name Page" />);
  });

  it('should render the main component', () => {
    const mainEl = screen.getByRole('main');

    expect(mainEl).toBeInTheDocument();
  });

  it('should render the subtitle component', () => {
    const namePage = screen.getByText(/name page/i);

    expect(namePage).toBeVisible();
  });
});
