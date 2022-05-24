import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchImage  from './SearchImage';
let returnedCoordinates = null;
  

jest.mock('./TargetBox.jsx', () => ({
    __esModule: true,
    default: ({ coordinates }) => {
        returnedCoordinates = coordinates;
        return <></>;
    }
}));

test('returns the same coordinates', async () => {
    const mockedCurrent = {
        naturalWidth: 1920,
        naturalHeight: 2234,
        clientWidth: 902,
        clientHeight: 1050,
        getBoundingClientRect: () => ({ x: 0, y: 0, width: 902, height: 1049.516601562, top: 80, right: 902, bottom: 1129.5166015625, left: 0 })
    }

    const mockUseRef = (obj) => () => Object.defineProperty({}, 'current', {
        get: () => obj,
        set: () => {}
    });

    const useRef = mockUseRef(mockedCurrent);
    render(<SearchImage useRef={useRef}/>)
    const image = screen.getByAltText('Contains the figures to find');
    expect(image).toBeInTheDocument();


    fireEvent.click(image, 
        {
            clientX: 655,
            clientY: 267,
            pageX: 655,
            pageY: 267,
            screenX: -1265,
            screenY: 352
        }    
    );

    expect(returnedCoordinates).toEqual({ absolute: { x: 1394, y: 398 }, relative: { x: 655, y: 187 } });
});