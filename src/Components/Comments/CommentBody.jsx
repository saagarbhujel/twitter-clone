import React from 'react'


import  "./Commentbody.css"
import axios from 'axios'
const CommentBody = ({name, username,comment,_id,setShouldRefresh}) => {
  

  
  
  // const deleteCmnt = async()=>{
   
  //  try {
  //   await axios.delete(`https://react-workshop-todo.fly.dev/posts/${_id}`,{
  //     headers: {
  //       apiKey: "645666987213f63d43086426",
  //     },
      
  //   })
  //   setShouldRefresh((v) => !v);
  //  } catch (error) {
  //    console.log(error)
    
  //  }
  // }
  
  
  
  return (
   <>
  <div className='comments'>
  <div className='cmnt-list'>
   
   <h4>{name}</h4> <p className='username-cmt'>@{username}</p>
    
    
   </div>
   <div className='cmnt-data'>
   <p>{comment}</p>
   </div>
   {/* <button className='deleteBtn' onClick={deleteCmnt}>Delete</button> */}
  </div>
   <hr />
  
   </>
  )
}

export default CommentBody