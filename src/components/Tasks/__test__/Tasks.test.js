import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Tasks from '..';

describe('Tasks', () => {
    beforeEach(() => {
        render(<Tasks />);
    });

    it('should render an unordered list', () => {
        const ulEl = screen.getByRole('list');

        expect(ulEl).toBeInTheDocument();
    })
})