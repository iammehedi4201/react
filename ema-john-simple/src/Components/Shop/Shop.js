import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {

     const [shoesData,setShoesData]=useState([])

     const [cart,setCart]=useState([])



     useEffect(()=>{

         fetch("products.json")
         .then(res=>res.json())
         .then(data=>setShoesData(data))

     },[])

     const eventHandler=(product)=>{

         console.log(product);

         const newCart =[...cart,product];

         setCart(newCart);
        
    }


    return (
        <div className='shop-section'>

             <div className='product-section'>
                    
                   {
                     shoesData.map(shoeData=><Product
                     
                      key={shoeData.id}
                      shoeData={shoeData}
                      handleEvent={eventHandler}
                     ></Product>)
                   }

             </div>

             <div className='cart-section '>

                  <h3 className='text-center'>Order Summary</h3>
                  
                  <p>Selected Items:- {cart.length}</p>

             </div>
              
        </div>
    );
};

export default Shop;