import React from 'react';
import { render, screen } from '@testing-library/react';
import CounterContainer from "./components/CounterContainer";

test('renders learn react link', () => {
  render(<CounterContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
