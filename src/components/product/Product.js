import React from "react";
import StarIcon from "@material-ui/icons/Star";
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";
function Product(props) {
  const [state,dispatch] = useStateValue();
  //push the data to data layer
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASSKET',
      item: {
        id: props.id,
        image: props.img,
        title:props.title,
        price:props.price,
        rating:props.rating,
      },
    });
  }
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{props.title+"__"+props.id}</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className='product__rating__fill'></StarIcon>
              </p>
            ))}
            {Array(5-props.rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeOutlinedIcon className='product__rating__outline'></GradeOutlinedIcon>
              </p>
            ))}
        </div>
      </div>
      <img className="product__image" src={props.img} alt="product_image" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
