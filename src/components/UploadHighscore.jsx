import { Input, Label, Form, FormGroup, Button, Spinner } from 'reactstrap';
import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    display: flex;
    align-items: flex-end;
`

function UploadHighscore({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
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
                <Button>{hasSubmitted ? <Spinner/> : 'Submit'}</Button>
            </FormGroup>
        </StyledForm>
    )
}

export default UploadHighscore;