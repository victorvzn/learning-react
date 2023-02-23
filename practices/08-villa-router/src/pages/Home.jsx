import { Link } from '../Link'

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>
          Esta es un página de ejemplo para crear un React Router desde cero
        </p>

        <p>Ejemplos:</p>

        <ul>
          <li><Link to='/not-found-page'>Not found page 404</Link></li>
          <li><Link to='/search/javascript'>Con parámetros: /search/javascript</Link></li>
        </ul>
      </div>
      <Link to='/about'>Ir al nosotros</Link>
    </>
  )
}
