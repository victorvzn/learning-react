import './App.css'
import { Movies } from './components/Movies'

import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

  const handleSearch = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)
  }

  return (
    <div className='page'>
      <header className='header'>
        <h1>Movie Search</h1>

        <form className='form' onSubmit={handleSearch}>
          <input name='query' placeholder='Avengers, Star Wars, Free Guy...' />
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
