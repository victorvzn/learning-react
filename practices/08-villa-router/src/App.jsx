import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>
          Esta es un página de ejemplo para crear un React Router desde cero
        </p>
      </div>
      <a href='/'>Ir al nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1628824799790112769/ePP_0Vtg_400x400.jpg'
          alt='Foto de victorvzn'
        />
        <p>
          ¡Hola! Me llamo Victor Villazón y estoy creando un clon de React Router hecho en un directo por midudev.
        </p>
        <p>
          Visita el <a href='https://github.com/midudev/aprendiendo-react'>repositorio original</a> para ver el midu-router.
        </p>
      </div>
      <a href='/'>Ir al home</a>
    </>
  )
}

function App () {
  return (
    <main>
      <HomePage />
      <AboutPage />
    </main>
  )
}

export default App
