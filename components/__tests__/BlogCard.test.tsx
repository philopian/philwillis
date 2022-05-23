import { render, screen } from '@testing-library/react'
import React from 'react'

import BlogCard from '@/components/BlogCard'

function makeProps() {
  return {
    image: '/some-image.jpg',
    slug: 'some-slug',
    publishedAt: '1999-01-01',
    title: 'some titlee',
    summary: 'some summary',
    tags: ['one', 'two'],
  }
}

describe('BlogCard', () => {
  test('image has the right relative link', () => {
    const props = makeProps()
    render(<BlogCard {...props} />)

    const anchorImage = screen.getByTestId('image-link')
    expect(anchorImage).toBeInTheDocument()
    expect(anchorImage).toHaveAttribute('href', `/posts/${props.slug}`)
  })

  test('has the right title', () => {
    const props = makeProps()
    render(<BlogCard {...props} />)

    const anchorLink = screen.getByTestId('title-link')
    expect(anchorLink).toBeInTheDocument()
    expect(anchorLink).toHaveAttribute('href', `/posts/${props.slug}`)
    expect(anchorLink.textContent).toBe(props.title)
    expect(screen.getByText(props.title)).toBeTruthy()
  })

  test('show a summary if the value is present', () => {
    const props = makeProps()
    render(<BlogCard {...props} />)
    expect(screen.getByText(props.summary)).toBeTruthy()
  })

  test('not show a summary if the value is present', () => {
    const props = { ...makeProps(), summary: '' }
    render(<BlogCard {...props} />)
    expect(screen.queryByTestId(/summary/i)).toBeNull()
  })

  test('show the proper amount of tags', () => {
    const props = { ...makeProps() }
    render(<BlogCard {...props} />)
    const tagElements = screen.getAllByRole('tags')
    expect(tagElements.length).toBe(2)
  })

  test('show no tags if tag prop is empty', () => {
    const props = { ...makeProps(), tags: [] }
    render(<BlogCard {...props} />)
    const tagElements = screen.queryByRole('tags')
    expect(tagElements).toBeNull()
  })
})
