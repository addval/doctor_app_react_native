import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER
} from "../actions/auth";

let defaultState = {
  user: { loggedIn: false, username: "", password: "" },
  loading: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        user: {
          loggedIn: false,
          username: action.username,
          password: action.password
        },
        loading: true
      });
      break;
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: {
          loggedIn: true,
          username: action.username,
          password: ""
        },
        loading: false
      });
      break;
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        user: {
          loggedIn: false,
          username: "",
          password: ""
        },
        loading: false
      });
      break;
    case LOGOUT_USER:
      return Object.assign({}, state, {
        user: {
          loggedIn: true,
          username: "",
          password: ""
        },
        loading: true
      });
      break;
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        user: {
          loggedIn: false,
          username: "",
          password: ""
        },
        loading: false
      });
      break;
    default:
      return state;
  }
}
