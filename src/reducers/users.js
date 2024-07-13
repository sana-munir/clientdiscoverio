import { FETCH_USERS, UDELETE } from '../constants/actionTypes';

export default (state = { users: [] }, action) =>{
    switch (action.type) {
        case FETCH_USERS:
            console.log("hello");
            return { ...state, users: action.payload.data };
        case UDELETE:
            return { ...state, users: state.users.filter((user) => user._id !== action.payload) };
        default:
            return state;
    }
}