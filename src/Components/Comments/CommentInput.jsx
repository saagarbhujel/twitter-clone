import React, { useState } from 'react'
import "./CommentInput.css"
import axios from 'axios'
import { useParams } from "react-router-dom";







const CommentInput = () => {
    const [commentInpt, setCommentInpt] = useState("")
    const { id } = useParams();

    
    const upload =async()=>{
        // console.log(commentInpt)

     try {
        await axios.post(`https://react-workshop-todo.fly.dev/posts/${id}/comments`,
        {
            content: commentInpt
        },{
            headers:{
                apiKey: "645666987213f63d43086426",
            }
        }
        )
        setCommentInpt("");
     } catch (error) {
        console.log(error)
     }
    }
        

    const submitCmnt = ()=>{
        // console.log(commentInpt)
        upload()
    }




  return (
   <>
   <div className='input'>
  <p> <input type="text"
    id='cmnt-input'
    placeholder='Write Comment'
    value={commentInpt}
    onChange={(e)=>setCommentInpt(e.target.value)}
    
     /></p>
     <button className='submitBtn' onClick={submitCmnt} >Comment</button>
     
    </div>
   </>
  )
}

export default CommentInput