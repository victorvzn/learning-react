import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

function Todo ({ items }) {
  return (
    <>
      {items.map(item => (
        <div key={item.id}>{item.text}</div>
      ))}
    </>
  )
}

describe('Buy some mil app', () => {
  it('renders an item', () => {
    const items = [{ id: 'item-1', text: 'buy some milk' }]

    render(<Todo items={items} />)

    screen.getByText('buy some milk')
  })

  it('renders another item', () => {
    const items = [{ id: 'item-1', text: 'buy some apples' }]

    render(<Todo items={items} />)

    screen.getByText('buy some apples')
  })

  it('renders multiple items', () => {
    const items = [
      {
        id: 'item-1',
        text: 'buy some milk'
      },
      {
        id: 'item-2',
        text: 'buy some apples'
      }
    ]

    render(<Todo items={items} />)

    screen.getByText('buy some apples')
  })
})
