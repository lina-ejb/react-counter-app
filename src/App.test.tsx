import React from 'react';
import {render, screen} from '@testing-library/react';
import CounterContainerWithRedux from "./components/CounterContainerWithRedux";

test('renders learn react link', () => {
  render(<CounterContainerWithRedux />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
