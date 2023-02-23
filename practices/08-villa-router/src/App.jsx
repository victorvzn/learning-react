import { lazy, Suspense } from 'react'

import './App.css'

import { Router } from './Router'
import { Route } from './Route'

import Page404 from './pages/404'// Import estático
import { SearchPage } from './pages/SearchPage' // Import estático

// import('./pages/Home') // Import dinámico

const LazyHomePage = lazy(() => import('./pages/Home.jsx')) // <---- Lazy Loading
const LazyAboutPage = lazy(() => import('./pages/About.jsx')) // <---- Lazy Loading

const appRoutes = [
  {
    path: '/search/:query', // --> /search/javascript or /search/python or /search/react
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
