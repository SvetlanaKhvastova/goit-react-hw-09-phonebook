import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as authActions from "./auth-actions";

const initialusersState = { name: "", email: "" };

const user = createReducer(initialusersState, {
  [authActions.signupUserSuccess]: (_, { payload }) => payload.user,
  [authActions.loginUserSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutUserSuccess]: () => initialusersState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.signupUserSuccess]: (_, { payload }) => payload.token,
  [authActions.loginUserSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutUserSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.signupUserError]: (_, { payload }) => payload,
  [authActions.loginUserError]: (_, { payload }) => payload,
  [authActions.logoutUserError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});
const isAuthenticated = createReducer(false, {
  [authActions.signupUserSuccess]: () => true,
  [authActions.loginUserSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.signupUserError]: () => false,
  [authActions.loginUserError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutUserSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
