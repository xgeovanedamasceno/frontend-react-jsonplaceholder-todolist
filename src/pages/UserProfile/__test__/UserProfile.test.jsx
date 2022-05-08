/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import UserProfile from '..';

describe('UserProfile', () => {
  beforeEach(() => {
    render(<UserProfile subtitle="Page Namee" />);
  });

  it('should render the subtitle component', () => {
    const namePage = screen.getByText(/page name/i);

    expect(namePage).toBeVisible();
  });
});
