import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

function Todo() {
  return <h1>buy some milk</h1>
}

describe('Buy some mil app', () => {
  it('renders an item', () => {
    const todos= ['buy some milk']

    render(<Todo />)

    screen.getByText('buy some milk')
  })
})
