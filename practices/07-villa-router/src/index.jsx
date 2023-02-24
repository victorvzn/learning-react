export { Router } from './Router.jsx'
export { Link } from './Link.jsx'
export { Route } from './Route.jsx'

export function useQueryParams ({ req } = {}) {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    const { query } = req
    return query
  }
  const search = window.location.search
  const params = new URLSearchParams(search)
  return Object.fromEntries(params.entries())
}
