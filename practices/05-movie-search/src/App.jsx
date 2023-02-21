import './App.css'
import { Movies } from './components/Movies'

import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'

function App () {
  const movies = responseMovies.Search

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
