import { useEffect, useState } from "react";
import Tweet from "../Components/Tweet";
import { useParams } from "react-router-dom";
import axios from "axios";

import CommentOut from "../Components/Comments/CommentOut";

const SIngleTweet = () => {
  const [tweet, setTweet] = useState(null);
  const { id } = useParams();
  // console.log(id);
  const fetchApi = async () => {
    const resp = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${id}`,
      {
        headers: {
          apiKey: "645666987213f63d43086426",
        },
      }
    );
    console.log(resp.data);
    setTweet(resp.data.post);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      {tweet ? (
        <Tweet
          name={tweet?.user.fullname}
          id={tweet?._id}
          userName={tweet?.user.name}
          img={tweet?.image}
          tweet={tweet?.content}
          avatar={`https://avatars.githubusercontent.com/u/${tweet?.user?.githubId}`}
        />
      ) : null}
      <CommentOut id={id} name={name}/>
    </>
  );
};

export default SIngleTweet;
