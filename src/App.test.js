// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CinchSimile title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CinchSimile/i);
    expect(titleElement).toBeInTheDocument();
});
