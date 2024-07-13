import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Typography, useMediaQuery, Avatar, Toolbar, Button } from '@mui/material';
import styles from './styles';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {jwtDecode} from 'jwt-decode';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import discoverio from '../../images/discoverio.png';
import Discoverio from '../../images/Discoverio.jpg';
import { useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
    const isSmallDevice = useMediaQuery('(max-width:960px)');
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleprofile = ()=>{
        navigate(`/creators/${user.result.name}`);
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = jwtDecode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar position="static" color="inherit" sx={styles.appBar} style={{ flexDirection: isSmallDevice ? 'column' : 'row' }}>
            {user? (
            <Link to="/chat">
                <div sx={styles.icon} height="45px">
                    <ChatTwoToneIcon />
                </div>
            </Link> ) : (
              <div></div>
            )}
            <Link to="/" style={styles.brandContainer}>
                <img src={Discoverio} alt="icon" height="45px" style={styles.image} />
                <img src={discoverio} alt="icon" height="40px" style={styles.image1} />
            </Link>
            <Toolbar sx={styles.toolbar}>
                {user ? (
                    <div style={styles.profile}>
                        <Avatar sx={styles.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography sx={styles.userName} variant="h6">{user.result.name}</Typography>
                        <Button aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={styles.logout}><PowerSettingsNewIcon /></Button>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                            <MenuItem onClick={handleprofile}>My profile</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Button sx={styles.signInButton} component={Link} to="/auth" variant="contained">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
