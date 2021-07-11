import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {GroupedReducers} from './components/stateManagment'
import Reduxthunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(GroupedReducers,composeEnhancer(applyMiddleware(Reduxthunk)))

ReactDOM.render(
    <Provider store={store}>
      <Router>
    <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);


