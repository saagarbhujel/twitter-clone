import { useEffect,useState } from "react";
import "./App.css";
import Tweet from "./Components/Tweet";
import axios from "axios";
import WriteTweets from "./Components/WriteTweets";


const App = () => {

  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState([]);


  const fetchTweets = async()=>{
    const posts = await axios.get("https://react-workshop.fly.dev/")
    setTweets(posts.data)
    console.log(posts.data)

  }

  useEffect(()=>{
    fetchTweets()
  },[shouldRefresh])

  return (
    <>
      <div style={{ marginBottom: 15 }}>
        <WriteTweets setShouldRefresh={setShouldRefresh} />
      </div>
      {tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.authorname}
            key={tweet._id}
            userName={tweet.authorname}
            img={tweet.image}
            tweet={tweet.content}

            // userName={tweets.authorname}
            // body="dfsfjs"
            // img="https://youimg1.tripcdn.com/target/100v1f000001h1di6BCEF.jpg?proc=source%2Ftrip"
          />
        );
      })}
    </>
  );
};

export default App;
