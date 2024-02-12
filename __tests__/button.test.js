import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src/button.js';

test('renders button with correct text', () => {
  const { getByText } = render(<Button />);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('clicking the button updates the counter', () => {
  const { getByText } = render(<Button />);
  const buttonElement = getByText('Click me');
  const counterElement = getByText('Counter: 0');

  fireEvent.click(buttonElement);

  expect(counterElement.textContent).toBe('Counter: 1');
});
