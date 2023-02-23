import { useEffect, useState } from 'react'
import './App.css'

import { EVENTS } from './constants'

function navigate (href) {
  // 1. Con el objeto History, cambiamos la url, usando el método pushState().
  // pero sin refrescar la página, solo que refleje el cambio en la url.
  // Parámetros: data, unused, url
  window.history.pushState({}, '', href)
  // 2. Crear un evento personalizado, para qvisar que hemos cambiado de url
  // IMPORTANT: No hay una forma de escruchar el evento pushstate
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // 3. Enviamos el evento a quien lo quiera escucahr
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>
          Esta es un página de ejemplo para crear un React Router desde cero
        </p>
      </div>
      <button onClick={() => navigate('/about')}>Ir al nosotros</button>
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
          width={200}
          height={200}
        />
        <p>
          ¡Hola! Me llamo <a href='https://victorvillazon.com' target='_blank' rel='noreferrer'>Victor Villazón</a> y estoy creando un clon de React Router hecho en un directo por midudev.
        </p>
        <p>
          Visita su <a href='https://github.com/midudev/aprendiendo-react'>repositorio original</a> para ver el midu-router.
        </p>
      </div>
      <button onClick={() => navigate('/')}>Ir al home</button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    // NOTE: Es necesario crear esta función para usarla tanto
    // al crear el envento como cuando lo removemos
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
