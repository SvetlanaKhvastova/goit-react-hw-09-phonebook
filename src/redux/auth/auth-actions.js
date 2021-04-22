import { createAction } from "@reduxjs/toolkit";

const signupUserRequest = createAction("auth/signupUsersRequest");
const signupUserSuccess = createAction("auth/signupUsersSuccess");
const signupUserError = createAction("auth/signupUsersError");

const loginUserRequest = createAction("auth/loginUsersRequest");
const loginUserSuccess = createAction("auth/loginUsersSuccess");
const loginUserError = createAction("auth/loginUsersError");

const logoutUserRequest = createAction("auth/logoutUsersRequest");
const logoutUserSuccess = createAction("auth/logoutUsersSuccess");
const logoutUserError = createAction("auth/logoutUsersError");

const getCurrentUserRequest = createAction("auth/currentUsersRequest");
const getCurrentUserSuccess = createAction("auth/currentUsersSuccess");
const getCurrentUserError = createAction("auth/currentUsersError");

export {
  signupUserRequest,
  signupUserSuccess,
  signupUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
