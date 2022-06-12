import { Input, Label, Form, FormGroup, Button, Spinner } from 'reactstrap';
import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    display: flex;
    align-items: flex-end;
`

const StyledButton = styled(Button)`
    width: 5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

function UploadHighscore({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (hasSubmitted) return;
        onSubmit && onSubmit(username);
        setHasSubmitted(true);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="username">Name</Label>
                <Input id="username" name="username" value={username} onChange={(e) => setUsername(e.currentTarget.value)} required/>
            </FormGroup>
            <FormGroup>
                <StyledButton>{hasSubmitted ? <Spinner/> : 'Submit'}</StyledButton>
            </FormGroup>
        </StyledForm>
    )
}

export default UploadHighscore;