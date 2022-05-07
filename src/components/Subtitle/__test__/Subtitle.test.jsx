/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Subtitle from '..';

describe('Subtitle', () => {
  beforeEach(() => {
    render(<Subtitle subtitle="Text" />);
  });

  it('should render an h2 element', () => {
    const h2El = screen.getByRole('heading', { level: 2 });

    expect(h2El).toBeInTheDocument();
  });
});
