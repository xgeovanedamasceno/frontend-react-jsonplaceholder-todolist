/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Main from '..';
import FakeComponet from '../__mocks__/FakeComponent';

// jest.mock('../src/components/Main');

describe('Main', () => {
  beforeEach(() => {
    render(
      <Main>
        <FakeComponet />
        <FakeComponet />
      </Main>,
    );
  });

  it('should render the main element', () => {
    const mainEl = screen.getByRole('main');

    expect(mainEl).toBeInTheDocument();
  });
});
