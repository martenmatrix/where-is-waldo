import Button from './Button';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('can display sizes small, medium, large | if nothing specified defaults to medium', () => {
    render(
    <>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
        <Button>default</Button>
    </>
    );
    
    const smallButton = screen.getByRole('button', { name: 'small' });
    const mediumButton = screen.getByRole('button', { name: 'medium' });
    const largeButton = screen.getByRole('button', { name: 'large' });
    const defaultButton = screen.getByRole('button', { name: 'default' });

    expect(smallButton).toHaveStyle('font-size: 1rem;');
    expect(mediumButton).toHaveStyle('font-size: 1.5rem;')
    expect(largeButton).toHaveStyle('font-size: 2rem;')
    expect(defaultButton).toHaveStyle('font-size: 1.5rem;')

});