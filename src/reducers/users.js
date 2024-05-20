import { FETCH_USERS } from '../constants/actionTypes';

export default (state = { users: [] }, action) =>{
    switch (action.type) {
        case FETCH_USERS:
            console.log("hello");
            return { ...state, users: action.payload.data };
        default:
            return state;
    }
}