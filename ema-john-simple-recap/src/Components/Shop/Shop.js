import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [shoeProducts, setShoeProducts] = useState([]);

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setShoeProducts(data));
  }, []);

  const addToCart = (productDetails) => {

    const newCartItem = [...cartItem, productDetails];
    
    setCartItem(newCartItem);

    console.log(productDetails);

  };

  return (
    <div className="Container">
      <section className="product-section">
        <h1 className="text-center border border-dark">
          Total Shoes Product is:-{shoeProducts.length}
        </h1>

        <div className="container-of-product">
          {shoeProducts.map((shoeProduct) => (
            <Product
              key={shoeProduct.id}
              products={shoeProduct}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </section>
      <section className="cart-section">
         <Cart cartItem={cartItem}></Cart>
      </section>
    </div>
  );
};

export default Shop;
