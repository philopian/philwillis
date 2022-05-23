import { render, screen } from '@testing-library/react'
import React from 'react'

import Body from '@/components/Body'

describe('Body', () => {
  test('should have child text message', () => {
    render(<Body>helllo</Body>)
    const welcomeElement = screen.getByText(/helllo/)
    expect(welcomeElement).toBeInTheDocument()
  })

  test('should have child component', () => {
    const Child = () => <div data-testid="child">Child</div>
    render(
      <Body>
        <Child />
      </Body>,
    )
    const childComponent = screen.getByTestId('child')
    expect(childComponent).toBeInTheDocument()
  })
})
