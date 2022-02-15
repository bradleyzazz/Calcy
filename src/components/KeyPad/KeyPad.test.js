import { render, screen } from '@testing-library/react';
import KeyPad from './KeyPad.js';

it('should contain "+" key button', () => {
    render(<KeyPad/>);
    const plusButton = screen.getByRole("button", {name: '+'});
    expect(plusButton).toBeInTheDocument();
  });

it('should contain number 5 button', () => {
    render(<KeyPad />);
    const fiveButton = screen.getByRole("button", {name: 6});
    expect(fiveButton).toBeInTheDocument();
});