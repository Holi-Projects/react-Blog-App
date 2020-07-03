import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {

    const history = useHistory();
    const[title, setTitle] = useState('')
    const[message, setMessage] = useState('')
    const[edit,setEdit] = useState('')
    const[err,setErr] = useState('')

    const handleSubmit = (e)=>{
        if(title != '' && message != ''){
        props.submitVals(title,message)
        setTitle('')
        setMessage('')
        history.push('/posts');
        } else{
          setErr('Please enter missing fields ):')
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
    
    const style ={
      border: 'solid',
      textAlign: 'center',
      marginTop: '10px',
      padding: '20px',
      marginLeft: '20%',
      marginRight: '20%',
      minWidth: "fit-content"
    }
    
  return(
    <div>
    <h1>New Post</h1>
    <p style={{color:'red'}}>{err}</p>

    <form onSubmit={handleSubmit} style={style}>
    <label> 
    <b>Title:</b> 
      <input type='text' 
      value={title} 
      onChange={(e)=>setTitle(e.target.value)}/>
    </label><br/><br/>  
    
    <b>Description:</b> <br/>
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