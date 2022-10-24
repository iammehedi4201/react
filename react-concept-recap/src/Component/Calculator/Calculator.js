import React, { useState } from 'react';
import "./Calculator.css"

const Calculator = (props) => {

    const{NumOne,NumTwo} = props

    const[numone,setNumone]= useState(NumOne)

    const[numtwo,setNumtwo]=useState(NumTwo)

    const[sum,setSum] =useState(0);

    const [sub,setSub]=useState(0)

    const [mul,setMul] = useState(0)



    const sumOparation =()=>{

         const result = parseInt(numone) + parseInt(numtwo);

         setSum(result)

         const newNumOne = parseInt(numone) + 1

         const newNumTwo = parseInt(numtwo) +2    

         setNumone(newNumOne);

         setNumtwo(newNumTwo)

        

    }

    const subOparation =() =>{


          const result = parseInt(numtwo) - parseInt(numone);

          setSub(result);

          const newNumOne = parseInt(numone) +10;

          const newNumTwo = parseInt(numtwo)+20;

          setNumone(newNumOne)

          setNumtwo(newNumTwo);

    }

    const mulOparation =()=>{

        const result = parseInt(numone) * parseInt(numtwo);

        setMul(result);

        const newNumOne = parseInt(numone) +10;

        const newNumTwo = parseInt(numtwo)+20;

        setNumone(newNumOne)

        setNumtwo(newNumTwo);

    }

    return (
        <div className='container'>
   
             <div className='sum-section section'>

                   <h1 style={{borderBottom:"2px solid black",textAlign:"center"}}>Sum operation</h1>
                   <h2>Result:{sum}</h2>
                   <h3>Number-One:{numone}</h3>
                   <h3>Number-Two:{numtwo}</h3>
                   <button onClick={sumOparation}>Click To Sum</button>

             </div>

             <div className='sub-section section'>

                   <h1 style={{borderBottom:"2px solid black",textAlign:"center"}}>Sub operation</h1>
                   <h2>Result:{sub}</h2>
                   <h3>Number-One:{numone}</h3>
                   <h3>Number-Two:{numtwo}</h3>
                   <button  onClick={subOparation}>Click To Sum</button>

             </div>

             <div className='mul-section section'>

                   <h1 style={{borderBottom:"2px solid black",textAlign:"center"}}>multipication operation</h1>
                   <h2>Result:{mul}</h2>
                   <h3>Number-One:{numone}</h3>
                   <h3>Number-Two:{numtwo}</h3>
                   <button  onClick={mulOparation}>Click To Sum</button>

             </div>

             <div className='div-section'></div>

            
        </div>
    );
};

export default Calculator;