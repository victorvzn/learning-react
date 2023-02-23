import { useEffect, useState } from 'react'
import { EVENTS } from './constants'

import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
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

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // NOTE: Hemos usado path-to-regexp
    // para detectar rutas dinámicas
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'

    const matcherUrl = match(path, { decode: decodeURIComponent })

    const matched = matcherUrl(currentPath)

    if (!matched) return false

    routeParams = matched.params // /search/:query => { query: 'javascript' } <> /search/javascript

    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
