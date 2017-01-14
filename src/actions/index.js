import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types'

const ROOT_URL = 'http://localhost:3000'

export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/users/login`, { email, password })
    .then(response => {
      dispatch({
        type: AUTH_USER
      })
      localStorage.setItem('token', response.data.auth_token);
      browserHistory.push('/diary');
    })
    .catch(() => {
      dispatch(authError('Incorrect Login Details'));
    })
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}

export function signupUser({ email, password, password_confirmation }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/users`, { user: { email, password,  password_confirmation} })
    .then(response => {
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/diary')
    })
    .catch(response => {
      dispatch(authError(response.response.data.errors))
    })
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
