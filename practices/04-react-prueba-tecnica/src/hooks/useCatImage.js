import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

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

  return {
    imageUrl
  }
}
