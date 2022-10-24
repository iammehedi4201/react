import React from 'react';
import "./Country.css"

const Country = (props) => {

   
    const{name,flags,capital,population,borders,startOfWeek}=props.country

    //   const value = languages[Object.keys(languages)[0]]

     /* console.log(value); */

    /*  console.log(border); */

    return (
        <div className='country-section'>
            
         <h2 style={{textAlign:"center",borderBottom:"2px solid black"}}>{name.common} Information</h2>
         <div className='flag-div'>          
            <img src={flags.png} alt="" />
         </div>
        
         <p>Name:-{name.common}</p>
         <p>Capital:-{capital}</p>
         <p>Start Of Week:-{startOfWeek}</p>
         <p>Population:-{population}</p>
         <p>Border:-{borders}</p>
            
        </div>
    );
};

export default Country;