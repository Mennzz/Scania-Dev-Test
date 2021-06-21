import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

  test('renders header', () => {
    render(<App />);
    const header = screen.getByText("Fleet Portal");
    const intro = screen.getByText("Driver evaluation");
    const dropdown = screen.getByText("Reset");
    const table = screen.getByText("Score");

    expect(header).toBeInTheDocument();
    expect(intro).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    
  });



