import React, { useContext } from 'react'
import { StoreContext } from '../../../Context/StoreContext'
// import { StoreContext } from '../../../Context/StoreContext'

function Cart() {
  // const { food_list, cartItems, removeFromCart } = useContext(StoreContext)

  const { cartItems, food_list, removeFromCart } = useContext(StoreContext)
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                <div className="cart-items-title">
                  <p> {item.name} </p>
                </div>
                </>
              )
            }

          })}
        </div>
      </div>
    </>
  )
}

export default Cart