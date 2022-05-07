/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
  beforeEach(() => {
    render(<Input placeholderText="Text" />);
  });

  it('should render the form element', () => {
    const inputForm = screen.getByPlaceholderText(/text/i);

    expect(inputForm).toBeInTheDocument();
  });
});
