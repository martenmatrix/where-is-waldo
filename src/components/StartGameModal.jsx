import styled from 'styled-components';
import CharactersImage from '../img/characters-to-find.png';
import Modal from './Modal';
import { Button } from 'reactstrap';

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CharactersToFindImage = styled.img.attrs({ src: CharactersImage })`
    display: block;
    width: 100%;
    height: 50%;
    object-fit: scale-down;
`

const TaskText = styled.div.attrs({ children: 'Find these characters and beat other players highscores!' })`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin: 1em;
`

function StartGameModal({ onStart, show }) {
    return (
        <Modal show={show}>
            <Container>
                <CharactersToFindImage />
                <TaskText />
                <Button color="success" onClick={onStart}>Start Searching</Button>
            </Container>
        </Modal>
    );
}

export default StartGameModal;