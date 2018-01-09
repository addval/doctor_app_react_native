export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGOUT_USER = "LOGOUT_USER";

import { API_ENDPOINT, API_VERSION, DOCTOR_NAMESPACE } from "../../api/apis.js";
import { Platform } from "react-native";

export function login(userCredentails, store) {
  store.dispatch({ type: LOGIN_USER });
  var payLoad = {
    device_details: {
      app_type: "doctor",
      app_version: "1.2.10",
      device_token:
        "fW7uUKbjynQ:APA91bFWoQoMUJzQ9RzDiu6X9amI44JZA4Qlpscmtml5u8V3htWos2118N7qOEKxVrktHc9Ij41zL72S9EYZeFiyoVBAZSQ2EogQiE1MmIqa7X77zD_Ed5FhDQ0BTN-RJp8UMEEzViJ3",
      device_type: Platform.OS,
      device_version: Platform.Version
    },
    user: {
      country_code: "91",
      password: userCredentails.password,
      phone_number: userCredentails.username,
      timezone: "Asia/Kolkata"
    }
  };

  var data = new FormData();
  data.append("json", JSON.stringify(payload));

  fetch(`${API_ENDPOINT}${API_VERSION}/auth/sign_in`, {
    method: "POST",
    body: data
  })
    .then(response => response.json())
    .then(data =>
      next({
        type: LOGIN_SUCCESS,
        data
      })
    )
    .catch(error =>
      next({
        type: LOGIN_ERROR,
        error
      })
    );
}

export function logOut(userCredentails) {
  return {
    type: LOGOUT_SUCCESS
  };
}

export function signUp(userCredentails) {
  return {
    type: SIGNUP_SUCCESS
  };
}
