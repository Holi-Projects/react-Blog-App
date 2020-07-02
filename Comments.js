import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Comment = (props) => {

  const[author,setAuthor] = useState('')
  const[comm,setComm] = useState('')

  const handleSubmit = (e) => {
    console.log(author + comm)
    e.preventDefault()
  }

  return (
    <div>
      <h3>comments here</h3>
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