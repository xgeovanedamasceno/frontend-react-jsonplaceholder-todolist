/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PageName from '..';

describe('PageName', () => {
  beforeEach(() => {
    render(<PageName title="Text" />);
  });

  it('should render an h2 element', () => {
    const h2El = screen.getByRole('heading', { level: 2 });

    expect(h2El).toBeInTheDocument();
  });
});
