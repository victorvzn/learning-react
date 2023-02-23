import './App.css'

import { Router } from './Router'

import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'

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
    path: '/twitch',
    Component: () => <h1>My Twitch</h1>
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
