import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Container = styled.div.attrs(({ coordinates }) => ({ 
        style: {
            top: coordinates.relative.y,
            left: coordinates.relative.x,
        },
        role: 'presentation'
    })
)`
    & * {
        font-family: 'Montserrat', sans-serif;
    }

    label[for="characters"] {
        visibility: hidden;
    }

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
                    label: option,
                });
            });

            return convertedOptions;
        }

        const converted = getConvertedOptions();
        setConvertedOptions(converted);
    }, [options])

    function formatOptionLabels({ label }) {
        return (
            <>
                <img src={label.image} alt={`${label.displayName} character`} />
                <span>{label.displayName}</span>
            </>
        )
    }

    function onSelection(selection) {
        onChange && onChange(selection.value);
    }

    return (
        <Container coordinates={coordinates}>
            <form>
                <label htmlFor="characters">Characters</label>
                <Select inputId="characters" formatOptionLabel={formatOptionLabels} options={convertedOptions} placeholder={'Select the character...'} onChange={onSelection}/>
            </form>
        </Container>
    );
}

TargetBox.propTypes = {
    coordinates: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
}

export default TargetBox;