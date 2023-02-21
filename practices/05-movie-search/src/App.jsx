import './App.css'

import { useEffect, useState, useRef } from 'react'

import { Movies } from './components/Movies'

import { useMovies } from './hooks/useMovies'

function useSearch () { // Extraemos la lógica el componente
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    console.log(search.length)

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar un película vacía')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App () {
  const { movies } = useMovies()

  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  // const counter = useRef(0)
  // counter.counter++
  // console.log(counter.current)

  return (
    <div className='page'>
      <header className='header'>
        <h1>Movie Search</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, Star Wars, Free Guy...'
          />
          <button type='submit'>Search</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main className='main'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
