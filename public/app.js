var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import reducers from './reducers/index';
import store from './store';
import './app.css';


import Main from 'Main';
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app')
);
