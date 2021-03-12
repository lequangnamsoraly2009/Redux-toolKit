import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import {Provider} from 'react-redux';

// Provider : mục đích là cung cấp store cho các component con. Vì vậy muốn các components trong App nhận được store thì App sẽ nằm inside trong Provider

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
