import React from 'react';
import "./ShoeInfo.css"
import {addToDb, deleteDataFromStorage} from "../Utilitis/dataStorage/dataStorage"
const ShoeInfo = (props) => {

const{name,Price,Color,id}=props.shoeInfo

   
   const addToCart=(name,id)=>{

        addToDb(name,id)

   }

   const removeItemFromCart =(id)=>{

        deleteDataFromStorage(id)

   }


    return (
        <div style={{border:"2px solid black",margin:"20px",padding:"20px",backgroundColor:" #ecc19c"}}>
             <h2>Name:-{name}</h2>
             <p>Shoe ID:-{id}</p>
             <p>Price:-{Price}</p>
             <p>Color:-{Color}</p>
             <button onClick={()=>addToCart(name,id)} className='btn btn-success'>ADD TO CART</button>
             <button onClick={()=>removeItemFromCart(id)} className='btn btn-danger m-2'>Remove Item</button>    
        </div>
    );
};

export default ShoeInfo;