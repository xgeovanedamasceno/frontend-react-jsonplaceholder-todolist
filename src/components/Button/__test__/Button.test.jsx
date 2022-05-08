/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  render(<Button label="Text" />);

  it('should render a button', () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
