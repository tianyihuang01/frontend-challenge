import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "It works!" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/It works!/i);
  expect(linkElement).toBeInTheDocument();
});
