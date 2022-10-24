import React from 'react';
import "./Photo.css"

const Photo = (props) => {

     const{id,title,url}=props.value


    return (
        <div className='photo-section'>
              <img className="photo-section-img" src={url} alt={title} />
              <h2>User-ID:- {id}</h2>
              <p>{title}</p>
        </div>
    );
};

export default Photo;