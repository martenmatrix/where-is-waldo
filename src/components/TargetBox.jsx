import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select.attrs(({ coordinates }) => ({ style: {
        top: coordinates.relative.y,
        left: coordinates.relative.x
    }
    })
)`
    position: absolute;
    z-index: 10;
`

function TargetBox({ coordinates, options }) {
    return (
        <Select coordinates={coordinates}>
            {options.map(option => <option key={option.id} value={option.id}>{option.displayName}</option>)}
        </Select>
    )
}

TargetBox.propTypes = {
    coordinates: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
}

export default TargetBox;