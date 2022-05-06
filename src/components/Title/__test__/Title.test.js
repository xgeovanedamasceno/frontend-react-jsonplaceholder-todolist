import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Title from '..';

describe("Title", () => {
    beforeEach(() => {
        render(<Title></Title>)
    })

    it('should render a h1 element', () => {
        const h1El = screen.getByRole('heading', { level: 1 });
    });
});