import { useEffect, useState } from "react";
import "../App.css";
import Tweet from "../Components/Tweet";
import axios from "axios";
import WriteTweets from "../Components/WriteTweets";
// import Navbar from "../Components/NavBar";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState([]);

  const fetchTweets = async () => {
    const posts = await axios.get(
      "https://react-workshop-todo.fly.dev/posts/all",
      {
        headers: {
          apiKey: "645666987213f63d43086426",
        },
      }
    );

    setTweets(posts.data);
    console.log(posts.data);
  };

  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);

  return (
    <>

      <div style={{ marginBottom: 15 }}>
        <WriteTweets setShouldRefresh={setShouldRefresh} />
      </div>
      {tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.user.fullname}
            id={tweet._id}
            key={tweet._id}
            userName={tweet.user.name}
            userId={tweet.user._id}
            img={tweet.image}
            tweet={tweet.content}
            avatar={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`}

            // userName={tweets.authorname}
            // body="dfsfjs"
            // img="https://youimg1.tripcdn.com/target/100v1f000001h1di6BCEF.jpg?proc=source%2Ftrip"
          />
        );
      })}
    </>
  );
};

export default Home;
