import React, { useState } from "react";
import axios from "axios";
import "./tweet.css"


const WriteTweets =({setShouldRefresh})=> {

    const [tweetContent, setTweetContent] = useState("")



    const upload = async ()=>{
       try {
         await axios.post(
           "https://react-workshop-todo.fly.dev/posts/",
           {
             //  authorname: "Saagar Bhujel",
             //  avatar: "9",
             content: tweetContent,
             image: imageUrl,
           },
           {
             headers: {
               apiKey: "645666987213f63d43086426",
             },
           }
         );
          setTweetContent("")
          setImageUrl("")
          setShouldRefresh((v)=>!v)
        
    }
       catch (error) {
        console.log(error)
        alert("error")
       }}

    const handleSubmit = ()=>{
        console.log(tweetContent)
        upload()
       
    }
         const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <div className="tweet-create">
        <textarea
          id="tweet-text"
          cols="40"
          rows="10"
          placeholder="What's on your mind?"
          required
          value={tweetContent}
          onChange={(e)=>setTweetContent(e.target.value)}

          style={{
            height: 169,
            width: 582,

            marginRight: 10,
          }}
        ></textarea>

        <input type="text" 
        placeholder="Enter Image Url"
        value={imageUrl}
        onChange={(e)=>setImageUrl(e.target.value)}

        />

      <div className="tweet-controls">
        <span id="char-count">280</span>
        <button id="tweet-button" onClick={handleSubmit}  >Tweet</button>
      </div>
      </div>
    </>
  );
}

export default WriteTweets;
