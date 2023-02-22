import './App.css'

import { useEffect, useState } from 'react'
import { getRandomFact } from '../src/services/facts'

import { useCatImage } from '../src/hooks/useCatImage'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Para recuperar la cita al cargar la página
  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}

export function App () {
  const { fact, refreshRandomFact } = useCatFact()

  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos!</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}

      {imageUrl &&
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first two words for ${fact}`}
        />}
    </main>
  )
}
