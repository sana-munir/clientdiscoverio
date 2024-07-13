import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Admin from "@mui/icons-material/AdminPanelSettings";
import Posts from "@mui/icons-material/DynamicFeed";
import About from "@mui/icons-material/Info";
import Contact from "@mui/icons-material/ContactPage";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const handleAdminClick = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/admin/login');
    setUser(null);
};

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
        <div onClick={handleAdminClick} className="footer-button" style={{ textDecoration: 'none', cursor: 'pointer'}}>
            <Admin sx={{ fontSize: "3rem", marginRight: "0.5rem", color: "white" }} />
            <Typography>Admin</Typography>
          </div>
          <Link to="/posts" className="footer-button" style={{ textDecoration: 'none'}}>
            <Posts color="white" sx={{ fontSize: "3rem", marginRight: "0.5rem" }} />
            <Typography>Posts</Typography>
          </Link>
          <Link to="/about" className="footer-button" style={{ textDecoration: 'none'}}>
            <About color="white" sx={{ fontSize: "3rem", marginRight: "0.5rem" }} />
            <Typography>About</Typography>
          </Link>
          <Link to="/contact" className="footer-button" style={{ textDecoration: 'none'}}>
            <Contact color="white" sx={{ fontSize: "3rem", marginRight: "0.5rem" }} />
            <Typography>Contact</Typography>
          </Link>
        </div>
        <Typography variant="h6" style={{ color:"black" }}>
          {"Copyright © "}
          Discoverio{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
