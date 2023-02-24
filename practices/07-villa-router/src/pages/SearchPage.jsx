import { useEffect } from 'react'

import { Link } from '../Link'

import { useQueryParams } from '../index'

export function SearchPage ({ routeParams }) {
  const { limit } = useQueryParams()

  console.log(limit)

  useEffect(() => {
    document.title = `SearchPage: Has buscado ${routeParams.query}`

    // EJEMPLO de lo que se podría hacer:
    // fetch(`https://ap.movieapp.com/search/${routeParams.query}`)
  }, [])

  return (
    <>
      <div>
        <h1>Has buscado <mark>{routeParams.query}</mark></h1>
        {limit && <p>Query param: {limit}</p>}
      </div>
      <Link to='/'>Ir al home</Link>
    </>
  )
}
