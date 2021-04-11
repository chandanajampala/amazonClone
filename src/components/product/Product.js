import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import  './Product.css'
function Product(props) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__name'>{props.title}</p>
                <p className='product__price'>
                    <small>Rs</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(props.rating).fill()
                    // .map((_,i)=>
                    // (<p><StarIcon></StarIcon></p>)
                    // )
                }
                    
                </div>
                </div> 
                <img className='product__image' src={props.img} alt='image'/>
                <button>Add to cart</button>
            
        </div>
    )
}

export default Product
