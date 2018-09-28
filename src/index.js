import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

ReactDOM.render(
  <Provider>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);