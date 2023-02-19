import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

import { CartItem } from './CartItem'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  const lengthCart = cart.length
  const hasCartProducts = lengthCart > 0

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
        {
          hasCartProducts
            ? <span>{lengthCart}</span>
            : null
        }
      </label>

      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title}
              quantity={product.quantity}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
