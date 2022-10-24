import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

       <Counter></Counter>

       <Comment></Comment>
      
    </div>
  );
}




function Comment() {

  const[comments,setComment] = useState([]);

  useEffect(()=>{

      fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res=>res.json())
      .then(data=>setComment(data))

  },[])

  return(
 
     <div>
    
          <h2>comment -length :{comments.length}</h2>

          {
            comments.map(comment=><Showcomment name={comment.name}></Showcomment>)
          }
        
     </div>

  )
  
}

function Showcomment(props) {


  return(
    
     <div>
            <h1>Name:{props.name}</h1>
     </div>

  )
  
}





function Counter() {

   const[count,setCounter]=useState(0)

   const increase = () =>
   {
      const newCount = count + 1;

      setCounter(newCount)

   }

   const decrease = () =>{

      const newCount = count -1;

      setCounter(newCount)

   }
  
  return(

     <div>
         <h1>counter:{count}</h1>
         <button onClick={increase}>Increase</button>
         <button onClick={decrease}>Decrease</button>
     </div>
     
  )
  
}


export default App;
