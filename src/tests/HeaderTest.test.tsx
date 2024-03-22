import { it, describe, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Header from '@/components/Header'
import useLoading from '@/hooks/useLoading'
import { renderHook } from '@testing-library/react-hooks'

beforeAll(() => {
  render(<Header />)
})

describe('Header_function', () => {
  // Tests that Header renders without errors
  it('renders without errors', () => {
  })

  // Tests that Header displays the correct title
  it('displays the correct title', () => {
    const title = screen.getByText('Top 100 US Podcasts')
    expect(title).toBeInTheDocument()
  })

  // Tests that Header displays the correct link
  it('displays the correct link', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })

  // Tests that Header don't show loading animation when loading is false
  it('dont show loading animation when loading is false', () => {
    const { result } = renderHook(() => useLoading())

    expect(result.current.loading).toBe(true)
  })
})
