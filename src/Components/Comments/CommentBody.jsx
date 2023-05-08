import React from 'react'


import  "./Commentbody.css"
const CommentBody = ({name, username,comment}) => {
  return (






   <>
  <div className='comments'>
  <div className='cmnt-list'>
   
   <h4>{name}</h4> <p className='username-cmt'>@{username}</p>
    
    
   </div>
   <div className='cmnt-data'>
   <p>{comment}</p>
   </div>
   <button className='deleteBtn'>Delete</button>
  </div>
   <hr />
  
   </>
  )
}

export default CommentBody