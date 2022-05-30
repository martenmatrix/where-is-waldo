import styled from 'styled-components';
import mainImage from '../img/search-image.jpg';
import { useRef as defaultUseRef, useState } from 'react';
import TargetBox from './TargetBox';
// TODO include TargetBox here and add a function prop to send a request

const Container = styled.div`
    position: relative;
    z-index: -1;
    margin-top: 5rem;
    width: 100%;
    object-fit: contain;
`

const Image = styled.img.attrs({ src: mainImage, alt: 'Contains the figures to find' })`
    display: block;
    position: absolute;
    width: 100%;
    height: max-content;
    top: 0;
    left: 0;
`;

function SearchImage({ charactersToFind, onCharacterSelect, useRef }) {
    const ImageRef = useRef();
    const [coordinates, setCoordinates] = useState();
    const [selectedCharacter, setSelectedCharacter] = useState();

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

        if (process.env.NODE_ENV === 'development') {
            console.table({relativeX, relativeY, absoluteX, absoluteY});
        }

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
        setSelectedCharacter();
    }

    function onCharacterSelectChange(characterId) {
        setSelectedCharacter(characterId);
        onCharacterSelect(coordinates.absolute.x, coordinates.absolute.y, characterId);
    }

    return (
        <Container>
            {coordinates && <TargetBox coordinates={coordinates}
                                       options={charactersToFind}
                                       onChange={onCharacterSelectChange}
                                       value={selectedCharacter}/>}

            <Image ref={ImageRef} onClick={(e) => getCoordinates(e)} draggable="false"/>
        </Container>
    )
}

SearchImage.defaultProps = {
    useRef: defaultUseRef,
}

export default SearchImage;