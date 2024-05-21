import React from "react";
import Home from '@mui/icons-material/Home';
//import Home from "../../img/home.png";
import Noti from '@mui/icons-material/Notifications';
//import Noti from "../../img/noti.png";
//import Comment from "../../img/comment.png";
import Comment from '@mui/icons-material/Comment';
import Setting from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="/posts">
        <Home />
      </Link>
      <Setting />
      <Noti />
      <Link to="/chat">
        <Comment />
      </Link>
    </div>
  );
};

export default NavIcons;
