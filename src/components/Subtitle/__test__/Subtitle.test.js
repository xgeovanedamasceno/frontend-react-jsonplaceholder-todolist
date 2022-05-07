import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Subtitle from '..';

describe('Subtitle', () => {
    beforeEach(() => {
        render(<Subtitle></Subtitle>);
    });

    it('should render an h2 element', () => {
        const h2El = screen.getByRole('heading', { level: 2 });
    });
})
