import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`


const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #00000030;

    animation: ${props => props.show ? fadeIn : fadeOut} 50ms linear;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transition: visibility 50ms linear;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ActualModal = styled.div`
    width: 90%;
    max-width: 70rem;
    height: 60%;
    background: white;
    border-radius: 1rem;
`

function Modal({ children, show, onClose }) {
    function onClick(e) {
        const clickedElement = e.target;
        const parentElement = e.currentTarget;
        if (clickedElement !== parentElement) {
            return;
        }
        onClose && onClose();
    }

    return (
        <ModalContainer onClickCapture={onClick} show={show} role="presentation">
            <ActualModal role="dialog">
                {children}
            </ActualModal>
        </ModalContainer>
    )
}

export default Modal;