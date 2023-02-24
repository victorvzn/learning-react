import { useEffect } from 'react'

import { Link } from '../Link'

export function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `SearchPage: Has buscado ${routeParams.query}`

    // EJEMPLO de lo que se podría hacer:
    // fetch(`https://ap.movieapp.com/search/${routeParams.query}`)
  }, [])

  return (
    <>
      <div>
        <h1>Has buscado <mark>{routeParams.query}</mark></h1>
      </div>
      <Link to='/'>Ir al home</Link>
    </>
  )
}
