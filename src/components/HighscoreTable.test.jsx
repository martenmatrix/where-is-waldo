import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import HighscoreTable from './HighscoreTable';

const fakeHighscores = [
    {
        name: 'matrix',
        time: '00:00:01'
    }
];

test('renders highscores correctly', () => {
    render(<HighscoreTable highscores={fakeHighscores}/>)
    const userCell = screen.getByText('matrix');
    const timeCell = screen.getByText('00:00:01');

    expect(userCell).toBeInTheDocument();
    expect(timeCell).toBeInTheDocument();
});