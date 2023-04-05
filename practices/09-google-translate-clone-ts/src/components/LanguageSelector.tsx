import { Form } from 'react-bootstrap'

import { type FC } from 'react'

import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { type Language, type FromLanguage, SectionType } from '../types.d'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

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
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

      {Object.entries(SUPPORTED_LANGUAGES)
        .map(([key, literal]) => (
          <option key={key} value={key}>
            {literal}
          </option>
        ))}
    </Form.Select>
  )
}
