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
  
  const head = props.postTitle
  
  const comments = props.comList.map( (com,i) =>{
    if(com.title === head){
    return (<p key={i}>
    <b>Written By:</b> {com.author}<br/>
    <b>Comment:</b> {com.comment}<br/>
   <b>Made:</b> {com.time}<br/>
    </p>
    )}
  })

 
  return (
    <div>
    <h3>Comments for {head}</h3>
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