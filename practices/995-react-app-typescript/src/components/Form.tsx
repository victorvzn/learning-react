import { useState } from "react"

import { Sub } from '../types'

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

interface FormState {
  inputValues: Sub
}

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)


  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    setInputValues(INITIAL_STATE)
  }

  const handleClear = () => {
    setInputValues(INITIAL_STATE)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='nick'
          placeholder='Nick'
          value={inputValues.nick}
          onChange={handleChange}
        />
        <input
          type='number'
          name='subMonths'
          placeholder='SubMonths'
          value={inputValues.subMonths}
          onChange={handleChange}
        />
        <input
          type='text'
          name='avatar'
          placeholder='Avatar'
          value={inputValues.avatar}
          onChange={handleChange}
        />
        <textarea
          name='description'
          placeholder='Description'
          value={inputValues.description}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleClear}
        >
          Clear the form
        </button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  )
}

export default Form