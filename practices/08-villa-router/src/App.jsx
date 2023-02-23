import './App.css'

import { Router } from './Router'

import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/SearchPage'

import Page404 from './pages/404'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query', // --> /search/javascript or /search/python or /search/react
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
