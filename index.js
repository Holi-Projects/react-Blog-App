import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import TimeAgo from 'react-timeago'
import Form from './Form';
import Posts from './Posts'
import Comments from './Comments'
import './style.css';

const App = () =>  {
    const[list, setList] = useState([])
    const[comm, setComm] = useState([])
    const[edit,setEdit] = useState({title:'', post:''})
    const date = Date.now()
    const time = <TimeAgo date={date} />
    let parentPost = ''

const commentID = (i) =>{
   parentPost = i
 }

 const formSubmit =(top,msg)=>{
      const postMsg = {title: top, post: msg, time: time}
      setList([...list, postMsg])
 }

 const comSubmit = (au,com) => {
   const comMsg = {author: au, comment: com, time:time, title:parentPost}
   setComm([...comm, comMsg])
  
 }


 const editPost = (e,i) =>{
   const editPost = [...list]
   const ep = editPost[i]
   
   setEdit(ep); 
   editPost.splice(i,1)
   setList(editPost)
   return <Redirect to='/new' />
   e.preventDefault()
 }

 const delPost = (e,i) => {
   const delList = [...list]
   delList.splice(i,1)
   setList(delList)
   e.preventDefault()
 }
  
    return (
      <BrowserRouter>
      <div>
      <h2 style={{textAlign:'center',fontSize:'40px'}}>React Blog</h2>
      <Redirect to='/posts' />
	    <Route path="/new" component={()=><Form submitVals={formSubmit} editVal={edit}/>}/>
      <Route path="/posts" component={()=><Posts post={list} edit={editPost} del={delPost} comID={commentID}/>}/> 
      <Route path="/comments" component={()=><Comments comms={comSubmit} comList={comm} postTitle={parentPost}/>} />
      </div>
      </BrowserRouter>
    );
}


render(<App />, document.getElementById('root'));
