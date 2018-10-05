import axios from "axios";
import { GET_REQUESTS } from "./actionTypes";

const returnRequests = (payload) => {
    return {
      type: GET_REQUESTS,
      payload:payload
    };
  };
  
const getRequests = () => {
  return dispatch => {
    // make an axios API call and post json data
    axios({
        url:
          "https://kla08-maintenance-tracker.herokuapp.com/api/v1/users/requests",
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token")
        }
      }).then(response => {
        dispatch(returnRequests(response.data.requests));
      });
  };
};

export default getRequests;
