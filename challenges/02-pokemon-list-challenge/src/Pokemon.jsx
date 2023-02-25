import { useState } from 'react'

import { flattenObject, randomInRange } from './utils'

export function Pokemon ({ url, name }) {
  const [pokemonUrlImage, setPokemonUrlImage] = useState(null)

  const handleClick = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const sprites = json.sprites
        const spritesFlattened = flattenObject(sprites)
        const spritesFlattenedLen = spritesFlattened.length
        const randomIndex = randomInRange(0, spritesFlattenedLen)
        // console.log(spritesFlattened[randomIndex])
        setPokemonUrlImage(spritesFlattened[randomIndex])
      })
  }

  return (
    <div key={url} className='pokemon' onClick={() => handleClick(url)}>
      {name}
      {
        pokemonUrlImage && <img src={pokemonUrlImage} width={50} height={50} alt={`${name} random image`} />
      }
    </div>
  )
}
