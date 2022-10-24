import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import './Posts.css'

const Posts = () => {

    const[posts,setPosts] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data))

    },[])

    return (
        <div>
               <h1 style={{borderBottom:"2px solid black",textAlign:"center"}}>Random People Posts </h1>
         
             <div className='grid-container'>

               {
                 posts.map(post =><Post key={post.id} value={post}></Post>)
               }

            </div>

              
        </div>
    );
};

export default Posts;