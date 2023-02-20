import { createContext } from 'react'

import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

// NOTE: La dependencia de usar React Context es MÍNIMA
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
