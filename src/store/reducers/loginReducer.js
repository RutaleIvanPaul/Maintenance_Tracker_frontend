import {
    LOGIN_SUCCESS, LOGIN_FAIL
  } from '../actions/actionTypes';
  
  const initialize = {
    isAuthentic: localStorage.getItem('token') || false,
  };
  
  const authReducer = (state = initialize, action) => {
    switch (action.type) {  
      case LOGIN_FAIL:
        return {
          ...state,
          isAuthentic: false,
          login_message:action.payload
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthentic: true,
        };
  
      default:
        break;
    }
    return state;
  };
  
  export default authReducer