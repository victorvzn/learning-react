import './App.css'

import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')
  const [imageUrl, setImageUrl] = useState('')
  // const [factError, setFactError] = useState('')

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        // TODO: Handle error if !res.ok
        // if (!res.ok) setFactError('No se ha podido recuperar la cita') }
        // if (!res.ok) throw new Error('Error fetching fact') }

        return res.json()
      })
      .then(({ fact }) => setFact(fact))
      .catch((err) => {
        console.log(err)
        // tanto si hay error con la respuesta
        // como si hay un error con la petición
      })
  }, [])

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const twoFirstWords = fact.split(' ', 2).join(' ')

    console.log(twoFirstWords)

    fetch(`https://cataas.com/cat/says/${twoFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos!</h1>

      {fact && <p>{fact}</p>}

      {imageUrl &&
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first two words for ${fact}`}
        />}
    </main>
  )
}
