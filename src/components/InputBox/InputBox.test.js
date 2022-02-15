import { render, screen } from '@testing-library/react';
import InputBox from './InputBox.js';

it('should render correct current number', () => {
    render(<InputBox currNum={999}/>);
    const inputDisplay = screen.getByText(/999/i);
    expect(inputDisplay).toBeInTheDocument();
  });

it('should render "0" when current number is 0', () => {
    render(<InputBox currNum={0}/>);
    const inputDisplay = screen.getByText(/0/i);
    expect(inputDisplay).toBeVisible();
});