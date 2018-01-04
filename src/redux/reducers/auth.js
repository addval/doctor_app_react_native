import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../actions/auth";

let defaultState = { user: { loggedIn: false, username: "", password: "" } };

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: { loggedIn: true, username: action.username, password: action.password }
      });
    case LOGIN_ERROR:
    return Object.assign({}, state, {
      user: { loggedIn: false, username: action.username, password: '' }
    });
    case LOGOUT_SUCCESS:
    return Object.assign({}, state, {
      user: { loggedIn: false, username: '', password: '' }
    });
    default:
      return state;
  }
}
