import React from "react";
import "./Cart.css";

const Cart = (props) => {

  console.log(props);

  const { cartItem } = props;

  console.log(props);
 
  let sumOfPrice = 0;

  let sumOfShippingCharge = 0;

  for (const product of cartItem) {

        sumOfPrice=sumOfPrice+product.price;

        sumOfShippingCharge = sumOfShippingCharge+product.shipping;
    
  }

  const tax =Math.round(sumOfPrice*0.1)

  const grandTotal = sumOfPrice+sumOfShippingCharge+tax;






  // const container= cartItem.map((item) => {  /* ekhane cartItem noton vale  add korle tar jonno noton kore container create hobe.evabe joto bar cartItem change hove toto bar noton ekta container array create kore dibe map */

  //   const price = item.price

  //    console.log(price);

  //    return price;
  // });

  // console.log("The container is",container);


  return (
    <div className="cart">
      <h5 className="text-center border-bottom">Order Summary</h5>
      <p>Select Items:-{cartItem.length}</p>
      <p>Total Price:-${sumOfPrice}</p>
      <p>Total Shipping Charge:-${sumOfShippingCharge}</p>
      <p>Tax:-${tax}</p>
      <h6>Grand Total:-${grandTotal}</h6>             
    </div>
  );
};

export default Cart;
