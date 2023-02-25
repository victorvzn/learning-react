import './App.css'

import { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon'

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

  return (
    <div className='App'>
      <header>
        <h1>Pokemon list</h1>
      </header>

      <main className='pokemons'>
        {pokemons &&
          pokemons.results.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.url}
                url={pokemon.url}
                name={pokemon.name}
              />
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
