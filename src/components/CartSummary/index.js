// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCardItem => {
        total += eachCardItem.price * eachCardItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Item in cart</p>
            <button type="button" className="checkout-button d-sm-none">
              checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
