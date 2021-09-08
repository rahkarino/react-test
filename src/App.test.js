import {render, screen, fireEvent} from '@testing-library/react'
import { replaceCamelWithSpace } from './App';
import Button from './components/Button'
import Checkbox from './components/Checkbox'

describe('button & checkbox', () => {
    test('button has correct initial color', () => {
        render(<Button />);
        const button = screen.getByRole('button', {name: 'Change to blue'});
        expect(button).toHaveStyle({backgroundColor: 'red'});
        fireEvent.click(button);
        expect(button).toHaveStyle({backgroundColor: 'blue'});
        expect(button.textContent).toBe('Change to red');
    });
    
    test('initial conditions', () => {
        render(<Button />);
        const button = screen.getByRole('button', {name: 'Change to blue'});
        expect(button).toBeEnabled();
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    })
})

/*test('when checkbox is checked', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'});
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({backgroundColor: 'gray'});
})*/

// unit testing functions
describe('convert camel case colorName to space', () => {
    test('works for two word camel case', () => {
        expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue')
    })
})
