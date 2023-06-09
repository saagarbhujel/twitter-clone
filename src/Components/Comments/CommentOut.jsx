import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput"


import axios from "axios";

import Comment from "./Comment";

const CommentOut = ({_id}) => {
  const [outCmnt, setOutCmnt] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState([]);

  

  const fetchInput = async () => {
    const postData = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${_id}`,
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
  }, [shouldRefresh]);
  return (
    <>
        <CommentInput setShouldRefresh={setShouldRefresh}/>

      {outCmnt.map((data) => {
        return (
          <Comment
            name={data.user.fullname}
            username={data.user.name}
            comment={data.content}
            avatar={`https://avatars.githubusercontent.com/u/${data.user.githubId}`}
            key={data._id}
            setShouldRefresh={setShouldRefresh}
          />
        );
      })}
    </>
  );
};

export default CommentOut;
