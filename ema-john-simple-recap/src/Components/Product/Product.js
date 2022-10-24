import React from "react";
import "./Product.css";

const Product = (props) => {
  const { addToCart } = props;
  const { name, price, seller, ratings, img } = props.products;

  return (
    <div className="product">
      <div className="product-img ">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price:-${price}</p>
        <p className="product-manufacturer">
          <small>Manufacture:{seller}</small>
        </p>
        <p className="product-rating">
          <small>Rating:-{ratings} stars</small>
        </p>
      </div>
      <button onClick={() => addToCart(props.products)} className="btn-cart">
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;
