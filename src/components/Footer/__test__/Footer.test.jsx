/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Footer from '..';
import FakeComponet from '../../__mocks__/FakeComponent';

describe('Footer', () => {
  beforeEach(() => {
    render(
      <Footer>
        <FakeComponet />
      </Footer>,
    );
  });

  it('should render a footer element', () => {
    const footerEl = screen.getByTestId('footer');

    expect(footerEl).toBeInTheDocument();
  });
});
