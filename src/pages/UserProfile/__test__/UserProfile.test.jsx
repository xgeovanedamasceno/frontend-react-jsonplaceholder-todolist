/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import UserProfile from '..';

describe('UserProfile', () => {
  beforeEach(() => {
    render(<UserProfile title="Text" subtitle="Text" />);
  });

  it('should render the header component', () => {
    const headerEl = screen.getByTestId('header');

    expect(headerEl).toBeInTheDocument();
  });

  it('should render the title component', () => {
    const h1El = screen.getByRole('heading', { level: 1 });

    expect(h1El).toBeInTheDocument();
  });

  it('should render the main component', () => {
    const mainEl = screen.getByRole('main');

    expect(mainEl).toBeInTheDocument();
  });

  it('should render the footer component', () => {
    const footerEl = screen.getByTestId('footer');

    expect(footerEl).toBeInTheDocument();
  });

  it('should render the subtitle component', () => {
    const h2El = screen.getAllByRole('heading', { level: 2 });

    expect(h2El.length).toBe(2);
  });
});
