import { Input, Label, Form, FormGroup, Button } from 'reactstrap';
import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    display: flex;
    align-items: flex-end;
    width: 100%;
`

function UploadHighscore({ onSubmit }) {
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit && onSubmit(username);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="username">Name</Label>
                <Input id="username" name="username" value={username} onChange={(e) => setUsername(e.currentTarget.value)}/>
            </FormGroup>
            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
        </StyledForm>
    )
}

export default UploadHighscore;