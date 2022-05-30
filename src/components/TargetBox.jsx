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

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
`

const CharacterImage = styled.img`
    display: block;
    object-fit: scale-down; // TODO images as the juggling-gingerbread character image has a low quality when object-fit is used with scale-down in chrome 101.0.4951.67
    width: 5rem;
    height: 5rem;
`

function TargetBox({ coordinates, options, onChange, value = 'candy-cane-gingerbread' }) {
    const [convertedOptions, setConvertedOptions] = useState();
    const [selectedOptionObject, setSelectedOptionObject] = useState();

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
            <SelectContainer>
                <CharacterImage src={label.image} alt={`${label.displayName} character`} />
                <span>{label.displayName}</span>
            </SelectContainer>
        )
    }

    function onSelection(selection) {
        onChange && onChange(selection.value);
    }

    useEffect(() => {
        function getSelectedOptionsObject() {
            if (!convertedOptions) return;
            const optionObject = convertedOptions.filter((currentValue) => currentValue.value === value);
            return optionObject;
        }

        const selectedOptionObject = getSelectedOptionsObject();
        setSelectedOptionObject(selectedOptionObject)
    }, [convertedOptions, value])

    return (
        <Container coordinates={coordinates}>
            <form>
                <label htmlFor="characters">Characters</label>
                <Select value={selectedOptionObject} inputId="characters" formatOptionLabel={formatOptionLabels} options={convertedOptions} placeholder={'Select the character...'} onChange={onSelection}/>
            </form>
        </Container>
    );
}

TargetBox.propTypes = {
    coordinates: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
}

export default TargetBox;