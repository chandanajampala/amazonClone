import React from "react";
import Product from "../product/Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="img"
        />

        <div className="home__row">
          <Product
             id='1'
            title="name"
            price={1000}
            rating={3}
            img="https://m.media-amazon.com/images/I/81JNj08oFgL._AC_UL320_.jpg"
          />
          <Product
          id='2'
            title="name"
            price={1000000}
            rating={1}
            img="https://m.media-amazon.com/images/I/81JNj08oFgL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id='3'
            title="name"
            price={10}
            rating={4}
            img="https://m.media-amazon.com/images/I/81JNj08oFgL._AC_UL320_.jpg"
          />
          <Product
            id='4'
            title="name"
            price={10}
            rating={3}
            img="https://m.media-amazon.com/images/I/81JNj08oFgL._AC_UL320_.jpg"
          />
          <Product
          id='5'
            title="name"
            price={10}
            rating={3}
            img="https://m.media-amazon.com/images/I/81JNj08oFgL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id='6'
            title="name"
            price={10}
            rating={3}
            img="https://m.media-amazon.com/images/I/81JNj08oFgL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
