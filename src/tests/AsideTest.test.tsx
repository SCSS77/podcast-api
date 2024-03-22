import { describe, it, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'

import PodcastList from '@/components/PodcastList'

const mockData = { id: '1', title: 'Test Podcast', author: 'Test Author', image: '/test-image.jpg' }

describe('PodcastList Component', () => {
  let linkElement, img, title

  // This run before all the tests start
  beforeAll(() => {
    render(<PodcastList items={mockData} />)
    linkElement = screen.getByRole('link', { name: /Test Podcast/i })
    img = screen.getByRole('img', { name: /podcast cover/i })
    title = screen.getByRole('heading', { name: /test podcast/i })
  })

  // Tests that the component renders with valid props
  it('renders with valid props', () => {
    expect(linkElement).toBeDefined()
    expect(img).toBeDefined()
    expect(title).toBeDefined()
  })

  // Tests that redirects to the correct url
  it('redirects to correct url', () => {
    const hrefValue = linkElement.getAttribute('href')
    expect(hrefValue).toBe('/podcast/1')
  })
})
