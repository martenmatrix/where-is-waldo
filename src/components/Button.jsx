import styled from 'styled-components';

const Button = styled.button`
    --primary-color: #0487E2;

    font-size: ${props => {
        switch(props.size) {
            case 'small':
                return '1rem';
            case 'medium':
                return '1.5rem';
            case 'large':
                return '2rem';
            default:
                return '5rem';
        }
    }};

    font-family: 'Montserrat', sans-serif;
    color: var(--primary-color);
    cursor: pointer;

    background: none;
    border: var(--primary-color) solid 0.2rem;
    border-radius: 0.5rem;
    outline: transparent solid 0.15rem;
    outline-offset: 1px;
    width: max-content;
    height: 2em;
    padding: 0.1em;
    margin: 1px;
    transition: outline 200ms;

    &:hover, &:focus {
        outline-color: var(--primary-color);
    }
`

export default Button;