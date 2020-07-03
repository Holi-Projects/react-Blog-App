import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './Posts.css'


const Posts = (props) => {

  const history = useHistory();

  const comID = (index) =>{
    props.comID(index)
    history.push('/comments')
  }

  const posts = props.post.map( (post,i) =>(
      <div key={i} className='post'>
      <p><b>Title:</b> <span style={{fontSize:'25px'}}>{post.title}</span></p><br/>
      <p><b>Description: </b>{post.post} </p><br/>
      <p id='time'><b>Posted: </b>{post.time} </p><br/><br/>
      <button onClick={()=>comID(post.title)}>Comments</button>
      <Link to='/new'><button id='btn' onClick={(e) => props.edit(e,i)}>Edit</button></Link>
      <button id='btn' onClick={(e) => props.del(e,i)}>Delete</button>
      </div>
  ))
  // if(posts.length === 0){
  //     history.push('/home')
  // }

  return(
    <div className='content'>
      <h1>Forum Posts</h1>
      <p>Number of discussions {posts.length}</p>
        <Link to='/new'>Add New Post</Link>
        {posts}
    </div>
    
  )
}

export default Posts