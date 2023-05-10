import React, { useEffect, useState } from 'react'
import Tweet from '../Tweet'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import "../Comments/CommentOut"

const Profile = () => {
    const [stweet, setStweet]= useState([])
    const {id}= useParams()

    const fetchApi = async()=>{
      const response= await axios.get( `https://react-workshop-todo.fly.dev/posts/profile/${id}`, {
            headers: {
                apiKey: "645666987213f63d43086426",
            }
    }
    
    )
    setStweet(response.data)
    console.log(response.data);
}
    useEffect(()=>{
        fetchApi()
    },[])
  return (
    <>
    
    <h1>hello</h1>
    <div>
        { stweet.map((data)=>{
            console.log(data)
            return(
                <Tweet
                    name={data.user.fullname}
                     key={data._id}
                     id={data._id}
                     userName={data.user.name}
                     img={data.image}
                     tweet={data.tweet}
                     avatar={`https://avatars.githubusercontent.com/u/${data.user.githubId}`}
                    />
            )
        })
                    
              
        }
    </div>
       
    </>
  )
}

export default Profile