import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./tweet.css"

const Tweet = (props) => {
  return (
    <div className="tweet">
        <Link to={`/tweet/profile/${props.userId}`}>
      <img src={props.avatar} alt={props.name} height={50} width={50} />
      </Link>

      <div className="tweet-content">
        <Header name={props.name} userName={props.userName} />
        <TweetBody tweet={props.tweet} img={props.img} />
        <Footer />
        <Link to={`/tweet/${props.id}`}>
          <p>see more</p>
        </Link>
      </div>
    </div>
  );
};

export default Tweet;
