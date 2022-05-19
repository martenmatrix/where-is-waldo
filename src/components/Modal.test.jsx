import Modal from './Modal';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


test('able to show and hide the modal with the isActive property', async () => {
    // rerender function does not let the test pass
    const { rerender } = render(<Modal show={true} />);
    const modalContainer = screen.getByRole('presentation');
    expect(modalContainer).toBeVisible();

    rerender(<Modal show={false} />);
    expect(modalContainer).not.toBeVisible();
});

test('calls onClose function if clicking on grey background', async () => {
    const testFunction = jest.fn();
    render(<Modal show={true} onClose={testFunction}/>)
    const modalContainer = screen.getByRole('presentation');
    expect(modalContainer).toBeVisible();

    const user = userEvent.setup();
    await user.click(modalContainer);

    expect(testFunction).toHaveBeenCalled();
});