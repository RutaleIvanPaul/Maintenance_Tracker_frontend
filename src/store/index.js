import {
    createStore, combineReducers, compose, applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk';
  import authReducer from './reducers/loginReducer';
  import signupReducer from './reducers/signupReducer';
  import viewRequestsReducer from './reducers/viewRequestsReducer';
  
  // combine all reducers into one root reducer
  const rootReducer = combineReducers({
    isAuth: authReducer,signup: signupReducer,view_requests:viewRequestsReducer
  });
  
  // creates a store
  /* eslint no-underscore-dangle: 0 */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  
  export default store;