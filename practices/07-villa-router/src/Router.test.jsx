import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { Router } from './Router'
import { Route } from './Route'
import { Link } from './Link'

import { getCurrentPath } from './utils'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  // it('should work', () => {
  //   expect(1).toBe(1)
  // })

  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('shoul render without problems', () => {
    render(<Router routes={[]} />)

    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes math', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)

    // console.log(screen.debug())

    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)

    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce(('/'))

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // Click on the link
    screen.getByText(/Go to About/).click()

    const aboutTitle = await screen.findByText(/About/)

    // console.log(screen.debug())

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})
