import React, { useEffect, useState } from 'react';
import ShoeInfo from '../ShoeInfo/ShoeInfo';
import { getTotal, multipication } from '../Utilitis/Calculator/Oparation';
import "./Shoes.css"

const Shoes = () => {

    const[shoesInfo,setShoesInfo]=useState([])

    useEffect(()=>{

        fetch("ShoesInfoData.json")
        .then(res=>res.json())
        .then(data=>setShoesInfo(data))

    },[])

     const shoePrice = 65102;

     const totalVat = 4561;

     const total = multipication(shoePrice,totalVat);

     const totalPrice = getTotal(shoesInfo)

    return (
        <div>
             <h1 className='text-center'>Welcome NIKE Shoes Section</h1>
              <h5 className='text-center border'>Total Shoe Price:{totalPrice}</h5>
             <div className='nike-shoes-section'>

                {
                    shoesInfo.map((shoeInfo) => {
 
                      return  <ShoeInfo
                         key={shoeInfo.id}
                         shoeInfo={shoeInfo}
                        ></ShoeInfo>

                    })
                }

             </div>
            
        </div>
    );
};

export default Shoes;