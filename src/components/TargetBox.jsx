import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
`

function TargetBox({ coordinates, options }) {
    return (
        <Select x={coordinates.relative.x} y={coordinates.relative.y}>
            {options.map(option => <option key={option.id} value={option.id}>{option.displayName}</option>)}
        </Select>
    )
}

TargetBox.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    show: PropTypes.bool,
    options: PropTypes.array
}

export default TargetBox;