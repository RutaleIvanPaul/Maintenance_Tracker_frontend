import {
   GET_REQUESTS
  } from '../actions/actionTypes';

  const initialize = {
    requests:[]
  };
  
  const viewRequestsReducer = (state = initialize, action) => {
    switch (action.type) {  
      case GET_REQUESTS:
        return {
          ...state,
          requests:[...action.payload],
        };
        
      default:
        break;
    }
    return state;
  };
  
  export default viewRequestsReducer;