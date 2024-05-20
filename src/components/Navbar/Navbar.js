import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Typography, useMediaQuery, Avatar, Toolbar, Button } from '@mui/material';
import styles from './styles';
import {jwtDecode} from 'jwt-decode';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone'
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/Discoverio.jpg';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const isSmallDevice = useMediaQuery('(max-width:960px)');
    const navigate = useNavigate();
    const location = useLocation();
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    const logout = () =>{
      dispatch({ type: 'LOGOUT' });
      navigate('/');
      setUser(null);
    };

    useEffect(() =>{
      const token = user?.token;
      if (token) {
        const decodedToken = jwtDecode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')))
    },[location]);

    return(
    <AppBar position="static" color="inherit" sx={styles.appBar} style={{ flexDirection: isSmallDevice ? 'column' : 'row' }}>
          <Link to="/chat">
          <div sx={styles.icon} height="45px">
            <ChatTwoToneIcon />
          </div>
          </Link>
          <Link to="/" style={styles.brandContainer}>
          <img src={memoriesText} alt="icon" height="45px" style={styles.image} />
          <img src={memoriesLogo} alt="icon" height="40px" style={styles.image1} />
          </Link>
          <Toolbar sx={styles.toolbar}>
          {user? (
            <div style={styles.profile}>
              <Avatar sx={styles.purple} alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography sx={styles.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" sx={styles.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
          ) :(
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
          </Toolbar>
    </AppBar>
    )
}
export default Navbar;