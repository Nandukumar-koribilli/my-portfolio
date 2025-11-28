import '@testing-library/jest-dom'; // <-- Add this line
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading screen', () => {
  render(<App />);
  const loadingText = screen.getByText(/loading portfolio/i);
  expect(loadingText).toBeInTheDocument();
});