import axios from 'axios';

const ROOT_URL = 'http://localhost:3000'

export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/users/login`, { email, password })
    .then(response => {

    })
    .catch(() => {

    })
  }
}
