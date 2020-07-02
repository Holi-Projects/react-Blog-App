import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Comment = (props) => {

  const[author,setAuthor] = useState('')
  const[comm,setComm] = useState('')

  const handleSubmit = (e) => {
    if(author != '' && comm != ''){
      props.comms(author,comm)
    }
    e.preventDefault()
  }
  
  const comments = props.comList.map( (com,i) =>(
    <p key={i}>
    Written By: {com.author}
    Comment: {com.comment}
    Made: {com.time}
    </p>
  ))

 
  return (
    <div>
      {comments}
      <form onSubmit={handleSubmit}>
        Author: <input type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)} /><br />

        Comment: <br /><textarea
          value={comm}
          onChange={(e) => setComm(e.target.value)} /><br />
        <button>Add Comment</button>
      </form><br />
      <Link to='/posts'><button>Back</button></Link>
    </div>
  )
}

export default Comment