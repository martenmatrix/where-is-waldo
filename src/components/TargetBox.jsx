import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Container = styled.div.attrs(({ coordinates }) => ({ 
        style: {
            top: coordinates.relative.y,
            left: coordinates.relative.x,
        }
    })
)`
    position: absolute;
    z-index: 10;
`

function TargetBox({ coordinates, options, onChange }) {
    const [convertedOptions, setConvertedOptions] = useState();

    useEffect(() => {
        function getConvertedOptions() {
            const convertedOptions = [];
            options.forEach(option => {
                convertedOptions.push({
                    value: option.id,
                    label: option.displayName,
                });
            });

            return convertedOptions;
        }

        const converted = getConvertedOptions();
        console.log(converted)
        setConvertedOptions(converted);
    }, [options])

    function onSelection(selection) {
        onChange && onChange(selection.value);
    }

    return (
        <Container coordinates={coordinates}>
            <Select options={convertedOptions} placeholder={'Select the character...'} onChange={onSelection}/>
        </Container>
    );
}

TargetBox.propTypes = {
    coordinates: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
}

export default TargetBox;