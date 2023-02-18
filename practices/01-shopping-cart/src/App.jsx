import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'

function App () {
  const [products] = useState(initialProducts)

  return (
    <div>
      <h1>Shopping Cart</h1>

      <Products products={products} />
    </div>
  )
}

export default App
