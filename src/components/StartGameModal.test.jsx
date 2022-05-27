import StartGameModal from "./StartGameModal";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test.skip('calls onStart when start button was clicked', async () => {
    const mockFunction = jest.fn();
    render(<StartGameModal onStart={mockFunction}/>);
    const startButton = screen.getByRole('button');

    const user = userEvent.setup();
    await user.click(startButton);

    expect(mockFunction).toHaveBeenCalled();
});