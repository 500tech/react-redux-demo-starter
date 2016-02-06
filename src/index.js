import 'bootstrap/dist/css/bootstrap.css';
import './assets/style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DevTools from './components/DevTools.jsx';
import Routes from './routes';
import configureStore from './store';

const initialState = { };

ReactDOM.render(
  <Provider store={ configureStore(initialState) }>
    <div>
      <Routes />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
