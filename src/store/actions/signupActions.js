import axios from "axios";
import { SIGNUP_FAIL, SIGNUP_SUCCESS } from "./actionTypes";

const signupFail = (payload) => {
    return {
      type: SIGNUP_FAIL,
      payload:payload
    };
  };
  
  const signupSuccess = (payload) => {
    return {
      type: SIGNUP_SUCCESS,
      payload:payload
    };
  };
  

const signupUser = (data) => {
  return dispatch => {
    // make an axios API call and post json data
    axios({
        url: "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: data
      })
        .then(response => {
          dispatch(signupSuccess(response.data.request));
        })
        .catch(error => {
          if (error.response) {
            dispatch(signupFail(error.response.data.error));
          }
        });
  };
};

export default signupUser;
