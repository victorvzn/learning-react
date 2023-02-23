import { useEffect, useState, Children } from 'react'
import { EVENTS } from './constants'

import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // console.log(children)

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

  // Add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
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
