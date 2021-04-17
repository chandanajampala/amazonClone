import React from "react";
import StarIcon from "@material-ui/icons/Star";
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import "./Product.css";
function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{props.title}</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(3)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className='product__rating__fill'></StarIcon>
              </p>
            ))}
            {Array(2)
            .fill()
            .map((_, i) => (
              <p>
                <GradeOutlinedIcon className='product__rating__outline'></GradeOutlinedIcon>
              </p>
            ))}
        </div>
      </div>
      <img className="product__image" src={props.img} alt="product_image" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
