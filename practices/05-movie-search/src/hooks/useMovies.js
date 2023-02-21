import { useMemo, useRef, useState } from 'react'
import { fetchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const searchMovies = async () => {
    if (search === previousSearch.current) {
      return
    }

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await fetchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, searchMovies, loading, error }
}
