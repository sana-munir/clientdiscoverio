import React from "react";
import "./widget.scss";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        url: "/users", // Add the URL for users
        icon: <PersonIcon className="icon" />,
      };
      break;
    case "post":
      data = {
        title: "POSTS",
        isMoney: false,
        link: "View all posts",
        url: "/posts", // Add the URL for posts
        icon: <PostAddIcon className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <a href={data.url} className="link">
          {data.link}
        </a>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
