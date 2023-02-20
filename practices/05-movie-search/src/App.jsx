import './App.css'

function App () {
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
        The results will go here!
      </main>
    </div>
  )
}

export default App
