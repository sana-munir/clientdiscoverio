import { AUTH, AUTHADMIN } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) =>{
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        //alert("Login successful.")
        navigate('/posts');
    } catch (error) {
        alert("Login unsuccessful.")
        console.log(error);
    }
}
export const signup = (formData, navigate) => async (dispatch) =>{
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        //alert("Congratulations!You have successfully signed up.")
        navigate('/auth');
    } catch (error) {
        alert("Something went wrong. Try Again.")
        console.log(error);
    }
}
export const signinadmin = (formData, navigate) => async (dispatch) =>{
    try {
        const { data } = await api.signInAdmin(formData);
        dispatch({ type: AUTHADMIN, data });
        //alert("Login Successful. Welcome Admin!")
        navigate('/admin'); 
    } catch (error) {
        console.log(error);
    }
}