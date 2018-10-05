import {
    SIGNUP_SUCCESS, SIGNUP_FAIL
  } from '../actions/actionTypes';

  const initialize = {
    signup_message:""
  };
  
  const signupReducer = (state = initialize, action) => {
    switch (action.type) {  
      case SIGNUP_FAIL:
        return {
          ...state,
          signup_message: action.payload,
        };
  
      case SIGNUP_SUCCESS:
        return {
          ...state,
          signup_message: action.payload,
        };
  
      default:
        break;
    }
    return state;
  };
  
  export default signupReducer;