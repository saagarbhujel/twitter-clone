import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput"

import axios from "axios";

import Comment from "./Comment";

const CommentOut = ({id}) => {
  const [outCmnt, setOutCmnt] = useState([]);

  const fetchInput = async () => {
    const postData = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${id}`,
      {
        headers: {
          apiKey: "645666987213f63d43086426",
        },
      }
    );
    setOutCmnt(postData.data.post.comments);
  };

  useEffect(() => {
    fetchInput();
    // console.log(postData.data.content)
  }, []);
  return (
    <>
        <CommentInput/>

      {outCmnt.map((data) => {
        return <Comment name={data.user.fullname} username={data.user.name} comment={data.content}key={data._id} />;
      })}
    </>
  );
};

export default CommentOut;
