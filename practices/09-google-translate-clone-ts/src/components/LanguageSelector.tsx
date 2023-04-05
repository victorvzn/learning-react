import { Form } from 'react-bootstrap'

import { type FC } from 'react'

import { SUPPORTED_LANGUAGES } from '../constants'
import { type Language, type FromLanguage } from '../types'

type Props =
  | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: 'to', value: Language, onChange: (language: Language) => void }

// export const LanguageSelector = ({ onChange }: Props) => { // 2da forma de declarar las props del componente
export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => { // 3ra forma de declarar las props del componente
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select
      aria-label='Selecciona el idioma'
      onChange={handleChange}
      value={value}
    >
      {Object.entries(SUPPORTED_LANGUAGES)
        .map(([key, literal]) => (
          <option key={key} value={key}>
            {literal}
          </option>
        ))}
    </Form.Select>
  )
}
