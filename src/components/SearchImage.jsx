import styled from 'styled-components';
import mainImage from '../img/search-image.jpg';
import { useRef, useState } from 'react';
import TargetBox from './TargetBox';
// TODO include TargetBox here and add a function prop to send a request

const Container = styled.div`
    position: relative;
    margin-top: 5rem;
    width: 100%;
    object-fit: contain;
`

const Image = styled.img.attrs({ src: mainImage})`
    display: block;
    position: absolute;
    width: 100%;
    height: max-content;
    top: 0;
    left: 0;
`;

function SearchImage({ charactersToFind }) {
    const ImageRef = useRef();
    const [coordinates, setCoordinates] = useState();

    function getCoordinates(e) {
        const round = (num) => Math.round(num);

        const image = ImageRef.current;
        const rect = image.getBoundingClientRect();

        // pixels of the original image / pixels of the current window => produces a scale value (you could use any other static number for the naturalWidth)
        const widthScale = image.naturalWidth / image.clientWidth;
        const heightScale = image.naturalHeight / image.clientHeight;

        // current pixel in the viewport (if scrolled down, top left will still result in 0) / distance from element from the edge of the viewport
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;

        const absoluteX = round(relativeX * widthScale);
        const absoluteY = round(relativeY * heightScale);

        setCoordinates({
            absolute: {
                x: absoluteX,
                y: absoluteY
            },
            relative: {
                x: relativeX,
                y: relativeY
            }
        });
    }

    function onClick(event) {
        getCoordinates(event);
    }

    return (
        <Container>
            {coordinates && <TargetBox coordinates={coordinates} options={charactersToFind}/>}
            <Image ref={ImageRef} onClick={onClick} />
        </Container>
    )
}

export default SearchImage;