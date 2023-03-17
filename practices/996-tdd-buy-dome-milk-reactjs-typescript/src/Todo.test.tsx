import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'

import { v4 as uuid } from "uuid";

function Todo ({ items }) {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(items)

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const id = uuid()
      setTodos([...todos, { id: '', text: e.target.value }])
    }
  }

  const markItemAsDone = (item) => {
    const filteredTodos = todos.filter(todo => todo.id !== item.id)
    setTodos(filteredTodos)
  }

  return (
    <div>
      <input type='text' data-testid='input' value={todo} onChange={handleChange} onKeyDown={handleKeyDown} />
      {todos.map(item => (
        <span key={item.id} onClick={() => markItemAsDone(item)}>{item.text}</span>
      ))}
    </div>
  )
}

describe('Buy some milk app', () => {
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
      { id: 'item-1', text: 'buy some milk' },
      { id: 'item-2', text: 'buy some apples' }
    ]

    render(<Todo items={items} />)

    screen.getByText('buy some apples')
  })

  it('add new item to the list', async () => {
    render(<Todo items={[]} />)

    const input = await screen.findByTestId('input')

    fireEvent.change(input, { target: { value: 'buy some oranges' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(screen.getByText('buy some oranges')).toBeDefined()
  })

  it('marks an item as done', () => {
    const items = [{ id: 'item-1', text: 'buy some milk' }]

    render(<Todo items={items} />)

    const item = screen.getByText('buy some milk')

    fireEvent.click(item)

    expect(screen.queryByText('buy some milk')).toBeNull()
  })
})
