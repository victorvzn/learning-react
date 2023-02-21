import './App.css'
import { Movies } from './components/Movies'

import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header className='header'>
        <h1>Movie Search</h1>

        <form className='form'>
          <input placeholder='Avengers, Star Wars, Free Guy...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main className='main'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
