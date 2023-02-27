import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'

import { Calculator, numbers, operations } from './calculator'

// fireEvent: simula al usuario 💔
// user-event: prueba como lo haría el usuario

describe('Calculator', () => {
  beforeEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)

    screen.getByText('Calculator') // --> throw error
  })

  it('should render numbers', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', async () => {
    render(<Calculator />)

    const rows = await screen.getAllByRole('row')

    // expect(rows.length).toBe(4)
    expect(rows).toHaveLength(4)
  })

  it('should render operations', () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)

    screen.getByText('=')
  })

  it('should render a button to reset operations', () => {
    render(<Calculator />)

    screen.getByText('C')
  })

  it('should render an input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)

    const oneButton = screen.getByText('1')
    const input = screen.getByRole('textbox')

    fireEvent.click(oneButton)

    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)

    const oneButton = screen.getByText('1')
    const twoButton = screen.getByText('2')
    const threeButton = screen.getByText('3')

    fireEvent.click(oneButton)
    fireEvent.click(twoButton)
    fireEvent.click(threeButton)

    const input = screen.getByRole('textbox')

    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const oneButton = screen.getByText('1')
    fireEvent.click(oneButton)

    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)

    fireEvent.click(oneButton)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input show the calculation', () => {
    render(<Calculator />)

    const oneButton = screen.getByText('1')
    fireEvent.click(oneButton)

    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)

    fireEvent.click(oneButton)

    const equalButton = screen.getByText('=')
    fireEvent.click(equalButton)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })

  it('should calculate after a previous calculation', () => {
    render(<Calculator />)

    const oneButton = screen.getByText('1')
    fireEvent.click(oneButton)

    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)

    fireEvent.click(oneButton)

    const equalButton = screen.getByText('=')
    fireEvent.click(equalButton)

    //

    fireEvent.click(plusButton)

    const twoButton = screen.getByText('2')
    fireEvent.click(twoButton)

    fireEvent.click(equalButton)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('4')
  })

  it('should reset calculation after clicking the clear button', () => {
    render(<Calculator />)

    const clearButton = screen.getByText('C')
    fireEvent.click(clearButton)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('')
  })
})
