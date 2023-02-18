import './Filters.css'

import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { setFilters } = useFilters()

  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  // console.log({ minPriceFilterId, categoryFilterId })

  const handleChangeMinPrice = event => {
    // [BAD] DOS FUENTES DE LA VERDAD
    setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = event => {
    // [BAD] Estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Categoría</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
