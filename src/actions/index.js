import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types'

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
    })
  }
}
