import styled from 'styled-components';
import Modal from './Modal';
import { Button } from 'reactstrap';

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

function StartGameModal({ onStart, show }) {
    return (
        <Modal show={show}>
            <Container>
                <Button color="success" onClick={onStart}>Start Searching</Button>
            </Container>
        </Modal>
    );
}

export default StartGameModal;