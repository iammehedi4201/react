import React, { useState } from 'react';
import "./Peoples.css"

const Peoples = (props) => {

    const {name,id}=props

    const [idNum,setIdNum]= useState(id);
 
    const increaseId =() =>{

          const newId =parseInt(idNum)+ 1;

          setIdNum(newId)

    }

    const decreasedId=()=>{

         const newId = idNum -1;

         setIdNum(newId);

    }


    return (
        <div className='section'>
              
              <h1>Hello There It's {name}</h1>
              <h2>My ID is : {id}</h2>
              <p>My ID:{idNum}</p>
              <button onClick={increaseId}>Increase-ID</button>
              <button onClick={decreasedId}>Decreased ID</button>
        </div>
    );
};

export default Peoples;