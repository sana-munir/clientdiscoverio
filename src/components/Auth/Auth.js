import React,{useState} from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import styles from "./styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from "./Input";
import { GoogleLogin } from '@react-oauth/google';
import Icon from './icon';
import { useDispatch } from "react-redux"; 
import {jwtDecode} from 'jwt-decode';
import { AUTH } from '../../constants/actionTypes';
import { useNavigate } from 'react-router-dom';
import { signup, signin } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () =>{
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleSubmit = (e) => {
        e.preventDefault();//for preventing reloads
        console.log(formData);
        if (isSignup) {
          dispatch(signup(formData, navigate));
        } else {
          dispatch(signin(formData, navigate));
        }
      };
      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
      };
      const switchMode = () => {
        //setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
      };
      const googleSuccess = async (res) => {
        const result = jwtDecode(res?.credential); //?. will not throw error if we dont have access to the object
        const token = res?.credential;
    
        try {
          dispatch({ type: AUTH, data: { result, token } });
    
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      };
    
      const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');
    return(
        <Container sx={isSignup ? {...styles.container, ...styles.containerSignUp} : styles.container} component="main">
            <Paper sx={styles.paper} elevation={4}>
                <Avatar sx={styles.avatar}>
                <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    { isSignup && (
                    <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                    </>
                    )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={styles.submit}>
                    { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleLogin // renderProps.onClick ensures the button triggers the Google Sign-In process, and renderProps.disabled disables the button when needed.
                      render={(renderProps) => (
                        <Button sx={styles.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                          Google Sign In
                        </Button>
                      )}   
                      onSuccess={googleSuccess}
                      onFailure={googleError}
                      cookiePolicy="single_host_origin"               
                     />
  
                    <Grid container justify="flex-end">
                      <Grid item>
                      <Button onClick={switchMode}>
                      { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                      </Button>
                    </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
};
export default Auth;