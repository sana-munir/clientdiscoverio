import React,{useState} from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import styles from "./styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from "../../../components/Auth/Input";
import { useDispatch } from "react-redux"; 
import { useNavigate } from 'react-router-dom';
import { signinadmin } from '../../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Login = () =>{
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleSubmit = (e) => {
        e.preventDefault();//for preventing reloads
        console.log(formData);
        dispatch(signinadmin(formData, navigate));
      };
      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
      };
    
      return(
        <Container component="main" maxWidth="xs">
            <Paper sx={styles.paper} elevation={3}>
                <Avatar sx={styles.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Admin Sign In</Typography>
                <form style={styles.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />                    
                </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={styles.submit}>
                    Sign In
                    </Button>
                </form>
            </Paper>
        </Container>
    )
};
export default Login;