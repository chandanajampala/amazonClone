import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import './CheckoutProduct.css'
function CheckoutProduct({id,image,title,price,rating}) {
    const [state, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        console.log("remoce");
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
                image: image,
                title:title,
                price:price,
                rating:rating,
              },
        });
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image"src={image} alt='checkoutProduct' />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price"><small>{'₹'}</small><strong>{price}</strong></p>
                <button className="checkoutProduct_button" onClick={removeFromBasket}>{'Remove from cart'}</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
