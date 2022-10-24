import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';






function App() {
  return (
    <div className="App">

         <ExternalUser></ExternalUser>
     
    </div>
  );
}


function ExternalUser() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{

       fetch("https://jsonplaceholder.typicode.com/users")
       .then(res=>res.json())
       .then(data =>setUsers(data))

    },[])

    return(

        <div>
         
           <h1 style={{borderBottom:"2px solid black",textAlign:"center"}}>USERS INFO</h1>

           {
             users.map(user=><UserInfo name={user.name} email={user.email} phone={user.phone} companyName={user.company.name}></UserInfo>)
           }
            

        </div>

    )
   
}


function UserInfo(props) {

   const{name,email,phone,companyName}=props

   return(

       <div  className='section'>

           <h2 style={{textAlign:"center"}}>{name}'s Info</h2>
           <p>Name:-{name} </p>
           <p>Email:-{email} </p>
           <p>Phone:-{phone}</p>
           <p>Company Name:-{companyName}</p>

       </div>

   )
   
}






export default App;













//New Things


// const products =[

//    {name:"Iphone-13",price:500000},
//    {name:"Iphone-14",price:600000},
//    {name:"Iphone-12",price:700000},
//    {name:"Iphone-11",price:800000},

// ]


// function App() {
//    return (
//      <div className="App">
 
//         {/* <Counter></Counter> */}
 
//         {
//            products.map(product =><Product name={product.name} price={product.price}></Product>)
//         }
      
//      </div>
//    );
//  }
 


// function Product(props) {

//      const {name,price} = props
   
   
//      const [perPhonePrice, setCount] =useState(price)
   
   
//       const increasePrice = () =>{
   
//          const newPrice = perPhonePrice * 2;
   
//          setCount(newPrice)
   
//       }
   
//       const decreasePrice =()=>{
   
//           const newPrice = perPhonePrice -10000;
   
//           setCount(newPrice)
   
//       }
      
//       return(
   
//          <div className='section'> 
   
//            <h1>Name:{name}</h1>
//            <h4>Price:{perPhonePrice}</h4>
//            <button onClick={increasePrice}>Increase</button>
//            <button onClick={decreasePrice}>Decrease</button>
   
//          </div>
   
//       )
     
//    }


   //New thing End//


// function Counter() {

//   const [count, setCount] = useState(0)

//   const increaseCount =() =>{

//         const newCount = count+1;

//         setCount(newCount)

//   }

//   const decreaseCount = () =>{

//      const newCount = count -1;

//      setCount(newCount)

//   }

//     return(

//         <div className='section'>
//             <h1>Count:{count}</h1>
//             <button onClick={increaseCount}>Increase</button>
//             <button onClick={decreaseCount}>Decrease</button>
//         </div>

//     )
  
// }