import styled from 'styled-components';
import Modal from './Modal';

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const StartButton = styled.button`
`

function StartGameModal({ onStart, show }) {
    return (
        <Modal show={show}>
            <Container>
                <StartButton onClick={onStart}>Start Searching</StartButton>
            </Container>
        </Modal>
    );
}

export default StartGameModal;