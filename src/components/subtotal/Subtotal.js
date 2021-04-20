import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../context/StateProvider';
import './Subtotal.css'
function Subtotal() {
    const [state,dispatch] = useStateValue();
    const cartPrice = state.basket?.reduce(
        (accumulator,currentValue) => accumulator+currentValue.price
        ,0
    );
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(cartValue)=>(
                    <p>Subtotal ({state.basket?.length} items) : <strong>{cartValue}</strong></p>
                )}
                decimalScale={2}
                value = {cartPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <div className='subtotal__gift'>
            <small><input className="subtotal__gift__checkbox" type="checkbox" />This order contains a gift</small>
                </div>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
