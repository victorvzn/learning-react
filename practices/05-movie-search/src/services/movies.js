const API_URL = import.meta.env.VITE_OMDB_API_URL
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const fetchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))

    return mappedMovies
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
