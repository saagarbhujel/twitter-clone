const Header = (props)=> {
  return (
    <div className="tweet-header">
      <h3 className="username">{props.name}</h3>
      <span className="handle">{props.userName}</span>
      <span className="timestamp">- 5h</span>
    </div>
  );
};

export default Header;
