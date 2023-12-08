import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Heimdall Movies title', () => {
    render(<App />)
    const linkElement = screen.getByText(/Heimdall Movies/i)
    expect(linkElement).toBeInTheDocument()
})
