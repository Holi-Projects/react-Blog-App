import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Posts = (props) => {

  const history = useHistory();

  const posts = props.post.map( (post,i) =>(
      <p key={i}>
      <b>Title:</b> {post.title}<br/>
      <b>Message: </b>{post.post} <br/>
      <b>Posted: </b>{post.time} <br/> 
      <button onClick={()=>history.push('/comments')}>Comments</button>
      <Link to='/new'><button onClick={(e) => props.edit(e,i)}>Edit</button></Link>
      <button onClick={(e) => props.del(e,i)}>Delete</button>
      </p>
  ))
  // if(posts.length === 0){
  //     history.push('/home')
  // }

  return(
    <div>
      <h1>Forum Posts</h1>
        <Link to='/new'>Add New Post</Link>
        {posts}
    </div>
    
  )
}

export default Posts