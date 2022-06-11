import styled from 'styled-components';
import PropTypes from 'prop-types';
import StopwatchIcon from '../img/stopwatch.svg';

const Container = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;
    height: 10%;
    min-height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #45b6fe;

    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`;

const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Time = styled.div.attrs({ role: "timer" })`
    font-family: 'Montserrat', sans-serif;
    font-size: 2em;
`;

const Stopwatch = styled.img.attrs((props) => ({
    src: props.img || StopwatchIcon,
    alt: 'Stopwatch'
}))`
    display: block;
    width: 2rem;
    height: 2rem;
`;

function Header({ time }) {
    // TODO stop updating header when only timer updates
    // TODO timer overflows sometimes at chrome on a specific window size
    return (
        <Container>
            <TimeContainer>
                <Stopwatch />
                <Time>{time}</Time>
            </TimeContainer>
        </Container>
    )
}

Header.propTypes = {
    time: PropTypes.string,
}

export default Header;