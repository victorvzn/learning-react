import { useState } from 'react'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header'

import { products as initialProducts } from './mocks/products.json'
import { Footer } from './components/Footer.jsx'

import { useFilters } from './hooks/useFilters'

import { IS_DEVELOPMENT } from './config.js'

function App () {
  const [products] = useState(initialProducts)

  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />

      <Products products={filteredProducts} />

      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
