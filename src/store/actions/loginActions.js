import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes";

const loginFail = payload => {
  return {
    // create an action type for login fail
    type: LOGIN_FAIL,
    payload: payload
  };
};

const loginSuccess = () => {
  return {
    // create an action type on login success
    type: LOGIN_SUCCESS
  };
};

const loginUser = (data, push) => {
  return dispatch => {
    // make an axios API call and post json data
    axios({
      url: "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          if (response.data.type === "admin") {
            localStorage.setItem("type", "admin");
            dispatch(loginSuccess());
            push(`/AdminViewRequests`);
          } else {
            localStorage.setItem("type", "user");
            dispatch(loginSuccess());
            push(`/ViewRequests`);
          }
        }  
      })
      .catch(error => {
        if (error.response) {
          dispatch(loginFail(error.response.data.error));
        }
      });
  };
};

export default loginUser;
