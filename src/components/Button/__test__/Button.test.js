import '@testing-library/jest-dom';
import { screen, reader, render } from '@testing-library/react';
import Button from '..';

describe("Button", () => {
    render(<Button />);

    it('should render a button', () => {
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    })
})