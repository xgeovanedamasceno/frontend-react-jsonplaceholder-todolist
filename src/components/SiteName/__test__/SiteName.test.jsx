/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SiteName from '..';

describe('SiteName', () => {
  beforeEach(() => {
    render(<SiteName title="Text" />);
  });

  it('should render an h1 element', () => {
    const h1El = screen.getByRole('heading', { level: 1 });

    expect(h1El).toBeInTheDocument();
  });
});
