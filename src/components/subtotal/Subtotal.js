import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(cartValue)=>(
                    <p>Subtotal ({'0'} items) : <strong>{cartValue}</strong></p>
                )}
                decimalScale={2}
                value = '3'
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
            />
            <div className='subtotal__gift'>
            <small><input type="checkbox" />This order contains a gift</small>
                </div>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
