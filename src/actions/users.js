import { FETCH_USERS } from '../constants/actionTypes';
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