import styled from 'styled-components';
import mainImage from '../img/search-image.jpg';
import { useRef } from 'react';
// TODO include TargetBox here and add a function prop to send a request

const Container = styled.div`
    position: relative;
    pointer-events: none;
`

const Image = styled.img.attrs({ src: mainImage})`
    display: block;
    width: 100%;
    object-fit: contain;
    pointer-events: auto;
`;

function SearchImage() {
    const ImageRef = useRef();

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

        const x = round(relativeX * widthScale);
        const y = round(relativeY * heightScale);

        return { x, y }
    }

    function onClick(event) {
        const coordinates = getCoordinates(event);
        console.log(coordinates);
    }

    return (
        <Container>
            <Image ref={ImageRef} onClick={onClick} />
        </Container>
    )
}

export default SearchImage;