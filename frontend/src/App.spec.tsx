import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders the App', () => {
  it('should render the app header', () => {
    render(<App />);
    const appHeader = screen.getByTestId('app-header');
    expect(appHeader).toBeInTheDocument();
  });
});
