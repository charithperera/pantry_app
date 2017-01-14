import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import { AUTH_USER } from './actions/types';
import RequireAuth from './components/auth/require_auth';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Diary from './components/diary';
import Landing from './components/landing';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="signin" component={SignIn}></Route>
        <Route path="signup" component={SignUp}></Route>
        <Route path="diary" component={RequireAuth(Diary)}></Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
