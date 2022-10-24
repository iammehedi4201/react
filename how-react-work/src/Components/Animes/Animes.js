import React, { useEffect, useState } from 'react';
import AnimeDetails from '../AnimeDetails/AnimeDetails';
import "./Animes.css"

const Animes = (props) => {

    const{name,type,num,characters}=props

    const[rate,setRating]=useState(9)

    console.log(typeof rate);
     
    const incraseRating=()=>{

        if (rate<=10) {

            const newRate = rate+0.1;

            setRating(newRate)
            
        }

    }

    useEffect(()=>{

        console.log(rate);

    },[rate])
    

    return ( 
        <div className='anime-list-section'>
            <div>
                <h2>Favorite Anime:-{num}</h2>  
                <h3>Name:- {name}</h3>
                <p>Type:- {type}/10</p>
                <h4>IMD Rating:-{rate.toFixed(1)}</h4>
                <button onClick={incraseRating}>Give Rate</button>
            </div>
            
            <AnimeDetails name={name} characters={characters} rate={rate}></AnimeDetails>
            
              
        </div>
        
        
    );
};

export default Animes;