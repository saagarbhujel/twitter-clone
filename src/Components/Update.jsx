import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';



const Update = () => {
  const [tweet, setTweet]=useState("")
  const [imageUrl,setImageUrl]=useState("")

 const { id } = useParams();

  const update=async()=>{
    console.log(id)
  try {
     const response = await axios.put(
       `https://react-workshop-todo.fly.dev/posts/${id}`,
       {
         content: tweet,
         image: imageUrl,
       },
       {
         headers: {
           apiKey: "645666987213f63d43086426",
         },
       }
     );

     setTweet("")
     setImageUrl("")
     console.log(response.data);
  } catch (error) {
    console.log(error)
  }
  }
  
  const updateTweet=()=>{
    console.log("clicked")
    update()
    }


  return (
    <>
    

      <h1>hello</h1>
      <div className="tweet-create">
        <textarea
          id="tweet-text"
          cols="40"
          rows="10"
          placeholder="Edit Your Tweet"
          required
          value={tweet}
          onChange={(e)=>setTweet(e.target.value)}
          key={id}
          style={{
            height: 169,
            width: 582,

            marginRight: 10,
          }}
        ></textarea>

        <input
          type="text"
          placeholder="Enter Image Url"
          value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)}


        />

        <div className="tweet-controls">
          <span id="char-count">280</span>
          <button id="tweet-button" style={{marginTop:10}} onClick={updateTweet}>
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Update