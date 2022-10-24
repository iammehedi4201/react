import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
           <Header></Header>
           <Countries></Countries>
           <Footer ></Footer>
         
    </div>
  );
}














/* 
function LoadCountries() {

     const [countries,setCountries] =useState([]);

     useEffect(()=>{

        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))

     },[])

   return(
 
      <div>
          <h1 style={{color:"black",textAlign:"center",borderBottom:"2px solid black"}}>Information of {countries.length} Country</h1>

        {
          countries.map((country) => {

          return  <CountryInfo name={country.name.common} flag ={country.flags.png} language ={country.languages}></CountryInfo>

        }
          )
        }

      </div>

   )
  
}

function CountryInfo(props) {

  const{name,flag,language} = props

  return(

     <div className='section'>
         <h2>{name} Information</h2>
         <img src={flag} alt="" />
         <p>Name:-{name}</p>
         <p>Capital:</p>
         <p>Language:-{}</p>
     </div>

  )
  
} */

export default App;

// https://restcountries.com/v3.1/all