import './App.css'

import { useEffect, useState } from 'react'

export default function App () {
  const [pokemons, setPokemons] = useState()
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPokemons(json)
      })

    return function () {}
  }, [url])

  const handlePrev = () => {
    setUrl(pokemons.previous)
  }

  const handleNext = () => {
    setUrl(pokemons.next)
  }

  const handleClick = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const sprites = Object.entries(json.sprites)
        const spritesString = sprites.filter((sprite) => {
          return sprite[1] !== null && typeof sprite[1] !== 'object'
        })
        const spritesMapped = spritesString.map((sprite) => sprite[1])
        const spritesMappedLen = spritesMapped.length
        const randomIndex = () => Math.random() + spritesMappedLen
        console.log(randomIndex())
      })
  }

  return (
    <div className='App'>
      <header>
        <h1>Pokemon list</h1>
      </header>

      <main className='pokemons'>
        {pokemons &&
          pokemons.results.map((pokemon) => {
            return (
              <div key={pokemon.url} className='pokemon' onClick={() => handleClick(pokemon.url)}>
                {pokemon.name}
              </div>
            )
          })}
      </main>

      <footer className='footer'>
        <button disabled={!pokemons?.previous} onClick={handlePrev}>
          Prev
        </button>
        <button disabled={!pokemons?.next} onClick={handleNext}>
          Next
        </button>
      </footer>
    </div>
  )
}
