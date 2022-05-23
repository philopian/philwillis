import { render, screen } from '@testing-library/react'
import React from 'react'

import Footer from '@/components/Footer'

describe('Footer', () => {
  test('should footer text', () => {
    render(<Footer />)

    expect(screen.getByText(/Footers/)).toBeInTheDocument()
  })
})
