import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UploadHighscore from './UploadHighscore';

test('able to type in a name and click the submit button', async () => {
    render(<UploadHighscore />);
    const nameInput = screen.getByRole('textbox');
    const submit = screen.getByRole('button');
    const user = userEvent.setup();

    await user.type(nameInput, 'matrix');

    expect(nameInput).toHaveValue('matrix');

    await user.click(submit);
});

test.todo('unable to submit when name field is empty');