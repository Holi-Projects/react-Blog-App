import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {

    const history = useHistory();
    const[title, setTitle] = useState('')
    const[message, setMessage] = useState('')
    const[edit,setEdit] = useState('')

    const handleSubmit = (e)=>{
        if(title != '' && message != ''){
        props.submitVals(title,message)
        setTitle('')
        setMessage('')
        history.push('/posts');
        }
        e.preventDefault()
    }
    
    const ev = props.editVal;
    if(ev.title !== '' && title === ''){
       setTitle(ev.title)
       setMessage(ev.post)
       ev.title = ''
       //console.log(ev)
    }
    
    
  return(
    <div>
    <h1>New Post</h1>
    <form onSubmit={handleSubmit}>
    <label> 
    <b>Title:</b> 
      <input type='text' 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)}/>
    </label><br/><br/>  
    
    <b>Message:</b> <br/>
      <textarea cols='30' rows='6'
      value={message} 
      onChange={(e)=>setMessage(e.target.value)}/>
      <br/><br/>
      <button>Create Post</button><button onClick={()=>history.push('/posts')} style={{marginLeft:'105px'}}>Back</button>
    </form>
    </div>
    )
}


export default Form;