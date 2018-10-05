import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import signupUser from "../../store/actions/signupActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const reqData = {
  user: {
    username: "test@gmail.com",
    password: "password",
    usertype:"user"
  }
};

describe("Signup a user", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should signup a user", () => {
    moxios.stubRequest(
        "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/signup",
      {
        status: 200,
        response:{message:"User created"}
      }
    );

    const store = mockStore();

    return store.dispatch(signupUser(reqData));
  });

  it("should not signup a user", () => {
    moxios.stubRequest(
        "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/signup",
      {
        status: 500,
        response:{error:"User Not created"}
      }
    );

    const store = mockStore();

    return store.dispatch(signupUser(reqData));
  });



});
