import { FETCH_USERS, UDELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchUsers();
      console.log("hello");
      dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
export const deleteUser = (id) => async (dispatch) => {
    try {
      await api.deleteUser(id);
  
      dispatch({ type: UDELETE, payload: id });
      alert("User deleted succcessfully.")
    } catch (error) {
      alert("Failed to delete user.")
      console.log(error.message);
    }
  };