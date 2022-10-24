import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {

     const{id,title,body}=props.value

   
    return (
        <div className='postSection'>
            <h1 style={{borderBottom:"2px solid black",textAlign:"center"}}>{title}</h1>

            <p>UserID:-{id}</p>

            <p>{body}</p>


        </div>
    );
};

export default Post;