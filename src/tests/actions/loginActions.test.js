import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import loginUser from "../../store/actions/loginActions";
// import { LOGIN_SUCCESS, LOGIN_FAIL } from "../../store/actions/ActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const reqData = {
  user: {
    username: "test@gmail.com",
    password: "password"
  }
};

describe("Login a user", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should start login and return token and user type admin", () => {
    moxios.stubRequest(
      "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/login",
      {
        status: 200,
        response: { token: "token", type: "admin" }
      }
    );

    const store = mockStore();

    return store.dispatch(loginUser(reqData));
  });

  it("should start login and return token and user type user", () => {
    moxios.stubRequest(
      "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/login",
      {
        status: 200,
        response: { token: "token", type: "user" }
      }
    );

    const store = mockStore();

    return store.dispatch(loginUser(reqData));
  });

  it("should start login and fail", () => {
    moxios.stubRequest(
      "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/login",
      {
        status: 400,
        response:{message:"Could not login"}
      }
    );

    const store = mockStore();

    return store.dispatch(loginUser(reqData));
  });

});
