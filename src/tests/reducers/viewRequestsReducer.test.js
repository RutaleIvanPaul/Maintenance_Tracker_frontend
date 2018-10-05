import viewRequestsReducer from "../../store/reducers/viewRequestsReducer";
import { GET_REQUESTS } from "../../store/actions/actionTypes";

describe("toggleLandingPageReducer", () => {
  it("should return the initial state", () => {
    const requests = [];

    const newState = viewRequestsReducer(undefined, {});
    expect(newState.requests).toEqual(requests);
  });

  it("should change the state of requests to action payload", () => {
    const requests = ["User Requests"];

    const initialState = {
        requests:[]
    }

    const action = {
      type: GET_REQUESTS,
      payload: ["User Requests"]
    };

    const newState = viewRequestsReducer(initialState, action);
    expect(newState.requests).toEqual(requests);
  });
});
