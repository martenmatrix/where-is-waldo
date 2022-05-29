import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import '@testing-library/jest-dom';
import TargetBox from './TargetBox';

const fakeOptions = [
    {
        id: 'test-id',
        displayName: 'test display name 1',
        image: 'https://example.org/1.png'
    },
    {
        id: 'test',
        displayName: 'test display name 2',
        image: 'https://example.org/2.png'
    }
];

const fakeCoordinates = {
    relative: {
        x: 233,
        y: 231,  
    }
}

test('displays images', () => {
    render(<TargetBox coordinates={fakeCoordinates} options={fakeOptions}/>);
    selectEvent.openMenu(screen.getByLabelText('Characters'));

    const image1 = screen.getByAltText('test display name 1 character');
    const image2 = screen.getByAltText('test display name 2 character');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();

    expect(image1).toHaveAttribute('src', 'https://example.org/1.png');
    expect(image2).toHaveAttribute('src', 'https://example.org/2.png');
});

test('renders at the specified coordinates', () => {
    render(<TargetBox coordinates={fakeCoordinates} options={fakeOptions}/>);

    const select = screen.getByRole('presentation');
    expect(select).toBeInTheDocument();
    expect(select).toHaveStyle(`
        position: absolute;
        top: 231px;
        left: 233px;
    `);
});

test('executes function passed in onSelect on select with the selected value (id)', async () => {
    const mockFunction = jest.fn();

    render(<TargetBox coordinates={fakeCoordinates} options={fakeOptions} onChange={mockFunction}/>);
    const select = screen.getByLabelText('Characters');
    
    selectEvent.openMenu(screen.getByLabelText('Characters'));
    await selectEvent.select(select, 'test display name 1');
    expect(mockFunction).toHaveBeenCalledWith('test-id');
});