import { render, screen } from '@testing-library/react';
import Button from './Button.js';

describe("Button renders correct text", () => {
  it('renders button text for numbers', () => {
    render(<Button keyValue={5} />);
    const buttonText = screen.getByText(/5/i)
    expect(buttonText).toBeInTheDocument();
  });

  it('renders button text for operators', () => {
    render(<Button keyValue={'='} />);
    const buttonText = screen.getByText(/=/i)
    expect(buttonText).toBeInTheDocument();
  });

  it('renders button text for functions', () => {
    render(<Button keyValue={'c'} />);
    const buttonText = screen.getByText(/c/i)
    expect(buttonText).toBeInTheDocument();
  });
})

describe("Button renders with correct className", () => {
  it('Renders with a className equal to the given prop class name', () => {
    render(<Button className="keys-operators" />)
    expect(screen.getByRole('button')).toHaveClass("keys-operators")
  })
})