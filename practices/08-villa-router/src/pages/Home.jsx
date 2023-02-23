import { Link } from '../Link'

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>
          Esta es un página de ejemplo para crear un React Router desde cero
        </p>
      </div>
      <Link to='/about'>Ir al nosotros</Link>
    </>
  )
}
