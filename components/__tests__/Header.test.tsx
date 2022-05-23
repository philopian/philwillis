import { render, screen } from '@testing-library/react'
import React from 'react'

import Header from '@/components/Header'

describe('Header', () => {
  test('should render children data', () => {
    render(<Header />)
    const welcomeElement = screen.getByText(/Header/)
    expect(welcomeElement).toBeInTheDocument()
  })
})
