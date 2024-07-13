import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="bottom">
        <p className="title"><h1>Welcome to your Dashboard Admin!</h1></p>
        <p className="amount"><h6>Here you can manage your platform's posts and users. Feel free to explore!</h6></p> 
        </div>
      </div>
  );
};

export default Featured;