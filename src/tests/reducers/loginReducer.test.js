import authReducer from '../../store/reducers/loginReducer';
import {
 LOGIN_SUCCESS, LOGIN_FAIL
} from '../../store/actions/actionTypes';

describe('toggleLandingPageReducer', () => {
  it('should return the initial state', () => {
    
    const isAuthentic = false;

    const newState = authReducer(undefined, {});
    expect(newState.isAuthentic).toEqual(isAuthentic);
  });


  it('should change the state of isAuth to true', () => {
    const isAuthentic = true;

    const initialState = {
      isAuthentic: false
    };

    const action = {
      type: LOGIN_SUCCESS,
    };

    const newState = authReducer(initialState, action);
    expect(newState.isAuthentic).toEqual(isAuthentic);
  });

  it('should change the state of isAuth to false', () => {
    const isAuthentic = false;

    const initialState = {
      isAuthentic: false
    };

    const action = {
      type: LOGIN_FAIL,
    };

    const newState = authReducer(initialState, action);
    expect(newState.isAuthentic).toEqual(isAuthentic);
  });

});