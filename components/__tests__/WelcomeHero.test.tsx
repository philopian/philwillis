import { render, screen } from '@testing-library/react'
import React from 'react'

import WelcomeHero from '@/components/WelcomeHero'

function makeProps() {
  return {
    title: 'some titlee',
    text: 'this is a paragraph',
  }
}

describe('WelcomeHero', () => {
  test('show a summary if the value is present', () => {
    const props = makeProps()
    render(<WelcomeHero {...props} />)
    expect(screen.getByText(props.title)).toBeTruthy()
    expect(screen.getByText(props.text)).toBeTruthy()
  })
})
