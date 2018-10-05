import signupReducer from "../../store/reducers/signupReducer";
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "../../store/actions/actionTypes";

describe("toggleLandingPageReducer", () => {
  it("should return the initial state", () => {
    const signup_message = "";

    const newState = signupReducer(undefined, {});
    expect(newState.signup_message).toEqual(signup_message);
  });

  it("should change the state of signup_message to action payload message", () => {
    const signup_message = "User Created";

    const initialState = {
        signup_message:""
    }

    const action = {
      type: SIGNUP_SUCCESS,
      payload: "User Created"
    };

    const newState = signupReducer(initialState, action);
    expect(newState.signup_message).toEqual(signup_message);
  });

  it("should change the state of signup_message to action payload message", () => {
    const signup_message = "User Not Created";

    const initialState = {
        signup_message:""
    }

    const action = {
      type: SIGNUP_FAIL,
      payload: "User Not Created"
    };

    const newState = signupReducer(initialState, action);
    expect(newState.signup_message).toEqual(signup_message);
  });
});
