import React from 'react'
import CartItem from '../cartitem/CartItem'
import Subtotal from '../subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
             <div className="checlout_left">
                 {/* <img className='checkout__left__image' src='https://m.media-amazon.com/images/I/81JNj08oFgL._AC_UL320_.jpg' alt='product_image'/> */}
             <div className="checkout__title">
                 <h2>{ 'Shopping Cart' }</h2>
                 <CartItem></CartItem>
             </div>
             </div>
             <div className='checkout__right'>
                <Subtotal></Subtotal>
             </div>
             
        </div>
    )
}

export default Checkout
