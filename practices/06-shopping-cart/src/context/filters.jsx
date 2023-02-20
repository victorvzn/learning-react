import { createContext, useState } from 'react'

// 1. Crear el contexto
export const FiltersContext = createContext() // NOTE: Singleton, solo se crea una vez

// 2. Crear el Provider, para proveer el contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      // 3. Definir el estado inicial
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

// 4. Consumir el estado donde queramos:
// const filters = useContext(FiltersContext)
