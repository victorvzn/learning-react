import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']

export const equalSign = '='

export const Calculator = () => {
  const [value, setValue] = useState('')

  const handleClick = (op) => {
    setValue(prevState => prevState.concat(op))
  }

  const handelEvaluate = () => {
    const newValue = evaluate(value)
    setValue(newValue)
  }

  return (
    <section>
      <h1>Calculator</h1>

      <input value={value} readOnly />

      <div>
        {rows.map((row, idx) => (
          <div key={idx} role='row'>
            {row.map(number => (
              <button key={`${idx}_${number}`} onClick={() => handleClick(number)}>
                {number}
              </button>
            ))}
          </div>
        ))}

        {operations.map(operation => (
          <button key={operation} onClick={() => handleClick(operation)}>{operation}</button>
        ))}

        <button onClick={() => handelEvaluate()}>{equalSign}</button>
      </div>
    </section>
  )
}
