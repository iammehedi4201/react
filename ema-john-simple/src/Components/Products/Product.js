import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

   const{name,price,seller,img,ratings}=props.shoeData;
 
   const{handleEvent}=props
   

    return (
        <div className='product'>
             <img  src={img} alt="" />

             <div className='product-info'>

                 <h6>{name}</h6>
                 <p className='price'>Price:${price}</p>
                 <p className='seller'><small>Manufacture:{seller}</small></p>
                 <p className='product-ratings'><small>Rating:{ratings} stars</small></p>

             </div>

             <button onClick={()=>handleEvent(props.shoeData)} className='btn-cart'>
                
                ADD TO CART  <FontAwesomeIcon icon={faShoppingCart}/>
               
                </button>

        </div>
    );
};

export default Product;