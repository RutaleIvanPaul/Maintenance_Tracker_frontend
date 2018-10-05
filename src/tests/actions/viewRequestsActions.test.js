import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import getRequests from "../../store/actions/viewRequestsActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("Requests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should return requests", () => {
    moxios.stubRequest(
        "https://kla08-maintenance-tracker.herokuapp.com/api/v1/users/requests",
      {
        status: 200,
        response:{requests:["requests"]}
      }
    );

    const store = mockStore();

    return store.dispatch(getRequests());
  });

});
