const TweetBody = (props) => {
  return (
    <>
      <p className="tweet-text"> {props.tweet} </p>
      <img
        className="tweet-image"
        src={props.img}
        alt="Tweet Image"
        style={{width:350}}

      />
    </>
  );
};

export default TweetBody;
