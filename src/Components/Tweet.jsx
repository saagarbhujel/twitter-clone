import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";


const Tweet = (props) => {
  return (
    <div className="tweet">
      <img
        src="https://placekitten.com/50/50"
        alt="Profile Picture"
        height={50}
        width={50}
      />

      <div className="tweet-content">
        <Header name={props.name} userName={props.userName}/>
        <TweetBody tweet={props.tweet}  img={props.img} />
        <Footer />
      </div>
    </div>
  );
};

export default Tweet;
