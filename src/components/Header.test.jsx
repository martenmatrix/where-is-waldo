import Header from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('displays time passed in as prop', () => {
    render(<Header time="5:11"/>);
    const timer = screen.getByRole('timer');
    expect(timer).toBeInTheDocument();
    expect(timer.textContent).toBe('5:11');
});