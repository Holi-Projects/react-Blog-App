import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './Comments.css'

const Comment = (props) => {

  const[author,setAuthor] = useState('')
  const[comm,setComm] = useState('')
  const[err,setErr] = useState('')
  const history = useHistory();

  const handleSubmit = (e) => {
    if(author != '' && comm != ''){
      setErr(<span style={{color:'green'}}>Comment added</span>)
      setTimeout(()=>{
          props.comms(author,comm)
          history.push('/posts')
      },1500)
      
    }else{
      setErr(<span style={{color:'red'}}>Please enter missing fields :)</span>)
    }
    e.preventDefault()
  }
  
  const head = props.postTitle
  
  const comments = props.comList.map( (com,i) =>{
    if(com.title === head){
    return (
      <p key={i} className='comm'>
    <b>Written By:</b> <span id='au'>{com.author}</span><br/><br/>
    <b>Comment:</b> {com.comment}<br/><br/>
    <span><b>Comment Made:</b> {com.time}</span><br/>
    </p>
    )} 
  })

  const alt = <p>No comments added</p>
 
  return (
    <div>
    <h3>Post title: <span>{head}</span></h3>
      
      {(comments.length>0)?comments:alt}
      
      <h3 style={{textAlign:'center'}}>New Comment:</h3>
      <p>{err}</p>
      <form onSubmit={handleSubmit} className='form'>
        <b>Author:</b> <input type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)} /><br/><br/>

        <b>Comment:</b> <br/>
        <textarea 
        cols='30' rows='6'
          value={comm}
          onChange={(e) => setComm(e.target.value)} />
          <br /><br />
        <button>Add Comment</button>
        <Link to='/posts'>
        <button id='goBack'>Back</button></Link>
      </form>
      
    </div>
  )
}

export default Comment