import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SEARCH, VIEW } from './types'

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
  browserHistory.push('/')
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

export function search(term) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/search?term=${term}`)
    .then(response => {
      dispatch({ type: SEARCH, payload: response.data })
    })
    .catch(response => {
      console.log('error');
    })
  }
}

export function addFood(food) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/addFood`, food, {
      headers: { Authorization: localStorage.getItem('token') },
    })
    .then(response => {
      console.log(response)
    })
    .catch(response => {
      console.log(response)
    })
  }
}

export function viewFood(food) {
  return function(dispatch) {
    dispatch({ type: VIEW, payload: food })
  }
}

// export function fetchMessage() {
//   return function(dispatch) {
    // axios.get(ROOT_URL, {
    //   headers: { authorization: localStorage.getItem('token') }
    // })
//     .then(response => {
//       debugger;
//       dispatch({
//         type: FETCH_MESSAGE,
//         payload: response.ressponse.data.message
//       })
//     })
//   }
// }
